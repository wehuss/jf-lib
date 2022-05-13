<template>
  <div>
    <a-table
      v-bind="(config?.table as Table)"
      ref="table"
      class="v-table-content"
      :scroll="{
        y: tableHeight,
      }"
      @page-change="pageChange"
      @page-size-change="pageSizeChange"
      @selection-change="selectionChange"
    >
      <template #columns>
        <a-table-column
          v-for="column in columns?.filter((item) => !item.hidden) || []"
          :key="column.dataIndex"
          ellipsis
          v-bind="(column as TableColumn)"
        >
          <template v-if="column.titleRender" #title>
            <component :is="column.titleRender && column.titleRender()" />
          </template>
          <template
            v-if="column.cellRender"
            #cell="{ record, column: columnConfig, rowIndex }"
          >
            <component
              :is="column.cellRender(record, columnConfig, rowIndex)"
              v-if="typeof column.cellRender === 'function'"
            />
            <component
              :is="components['operations']"
              v-else-if="column?.cellRender?.type === 'operations'"
              v-bind="{
                columnData: {
                  record,
                  column: columnConfig,
                  rowIndex,
                },
                config,
                ...getProps(column.cellRender?.props, record),
              }"
              @updateData="updateData"
              @deleteData="deleteData"
            />
            <!-- <component
              :is="components[column?.cellRender?.type || 'operations']"
              v-bind="{
                columnData: {
                  record,
                  column: columnConfig,
                  rowIndex,
                },
                config,
                ...column.cellRender?.props,
              }"
              v-else
            /> -->
          </template>
        </a-table-column>
      </template>
    </a-table>
    <template v-if="operationsRender">
      <modal-form
        ref="modalForm"
        v-model:visible="visible"
        title="编辑"
        type="Update"
        :render-params="renderParams"
        @ok-event="(data) => emit('update', data)"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  computed,
  inject,
  onMounted,
  onUnmounted,
  PropType,
  Ref,
  ref,
  toRefs,
  // watch,
} from 'vue'
import type _Table from '@arco-design/web-vue/es/table'
import type _TableColumn from '@arco-design/web-vue/es/table/table-column'
import { OperationsProps, TableConfig } from '../../typings'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import operations from './components/operations.vue'
import { BaseObj } from '@/types/global'
import { setSelectedRowKeys } from '../../util'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ModalForm from '../modal-form.vue'

const components = { operations }

type Table = InstanceType<typeof _Table>
type TableColumn = InstanceType<typeof _TableColumn>

const props = defineProps({
  config: Object as PropType<TableConfig>,
})

const emit = defineEmits(['update', 'deleteData', 'get'])

const table = ref()
const { config } = toRefs(props)

const TABLE_BASE_CONFIG: Table['$props'] = {
  pagination: {
    current: 1,
    showPageSize: true,
    total: config?.value?.table?.data?.length || 0,
    pageSize: 30,
    showTotal: true,
    showJumper: true,
  },
  rowSelection: {
    type: 'checkbox',
    showCheckedAll: true,
    selectedRowKeys: [],
  },
}

const columns = computed(() => {
  return config?.value?.columns
})

const setPagination = (obj: BaseObj) => {
  if (typeof config?.value?.table.pagination === 'object') {
    config.value.table.pagination = {
      ...config.value.table.pagination,
      ...obj,
    }
  }
}
const pageChange = (current: number) => {
  setPagination({ current })
  emit('get')
}
const pageSizeChange = (pageSize: number) => {
  setPagination({ pageSize })
  setPagination({ current: 1 })
  emit('get')
}

// const selectedRowKeys = inject<Ref<string[] | undefined>>('selectedRowKeys')
const selectionChange = (ids: string[] | undefined) => {
  setSelectedRowKeys((config as Ref<TableConfig>).value, ids)
  // if (selectedRowKeys) selectedRowKeys.value = ids
}

const operationsRender = computed(() => {
  let render = false
  columns?.value?.forEach((column) => {
    if (
      typeof column.cellRender === 'object' &&
      column.cellRender.type === 'operations'
    ) {
      render = true
    }
  })
  return render
})
const getProps = (
  props: OperationsProps | ((params: BaseObj) => OperationsProps) | undefined,
  params: any
) => {
  if (typeof props === 'function') return props(params)
  return props
}

const visible = ref(false)
const renderParams = ref<BaseObj>({})
const modalForm = ref<{
  formData: {
    [x: string]: unknown
  }
}>()
const updateData = (params: BaseObj) => {
  renderParams.value = params
  const formData = modalForm.value?.formData as {
    [x: string]: unknown
  }
  Object.keys(formData).forEach((key) => {
    // console.log(' params[key]', params[key], key, formData)
    formData[key] = params[key]
  })
  // 主键,一般为id
  const rowKey = config?.value?.table.rowKey
  if (typeof rowKey === 'string') formData[rowKey] = params[rowKey]
  visible.value = true
}
const deleteData = (params: BaseObj) => {
  // console.log('????')
  emit('deleteData', { ...params })
}

const tableId = inject<string>('tableId')
const getTableHeight = () => {
  const container = document.getElementById(`${tableId}`)
  // console.log(container, tableId)
  if (!container) return 0
  const containerHeight = container.clientHeight
  // console.dir(document.querySelector(`#${tableId}`))
  const titleHeight =
    document.querySelector(`#${tableId} .arco-card-header`)?.clientHeight || 0
  const searchFormHeight =
    document.querySelector(`#${tableId} .search-form-wrapper`)?.clientHeight ||
    0
  // if (config?.value?.hiddenSearch) searchFormHeight -= 21
  const toolbarHeight =
    document.querySelector(`#${tableId} .table-toolbar`)?.clientHeight || 0
  // console.log('toolbarHeight', toolbarHeight)
  const tableHeaderHeight =
    document.querySelector(`#${tableId} thead`)?.clientHeight || 0
  // const tablePaginationHeight =
  //   document.querySelector(`#${tableId} .arco-table-pagination`)
  //     ?.clientHeight || 0
  // card 模式下有16px的padding-top
  const isCard = config?.value?.card ? 16 : 0
  const tablePaginationHeight = config?.value?.table.pagination ? 50 : 24
  // console.log(
  //   containerHeight,
  //   titleHeight,
  //   searchFormHeight,
  //   toolbarHeight,
  //   tableHeaderHeight,
  //   tablePaginationHeight
  // )
  const height =
    containerHeight -
    titleHeight -
    searchFormHeight -
    toolbarHeight -
    tableHeaderHeight -
    tablePaginationHeight -
    isCard
  // 最低高度！
  // if (height < 315) height = 315
  // if (tablePaginationHeight) height -= 12
  container.style.setProperty(`--v-table-height`, `${height}px`)
  return height
}
const tableHeight = ref()
const resize = () => {
  tableHeight.value = getTableHeight()
}
defineExpose({ getTableHeight })

onMounted(() => {
  if (config?.value) {
    if (!config.value.batchDelete)
      delete (TABLE_BASE_CONFIG as any).rowSelection
    config.value.table = {
      ...TABLE_BASE_CONFIG,
      ...config.value.table,
    }
  }
  emit('get')
  setTimeout(() => resize())
  window.addEventListener('resize', resize)
})
onUnmounted(() => {
  window.removeEventListener('resize', resize)
})
</script>

<style lang="less">
.v-table-content {
  .arco-table-body {
    height: var(--v-table-height);
  }
}
</style>

<style lang="less" scoped>
.v-table-content {
  :deep(.arco-table-pagination) {
    margin-top: 8px;
  }
}
</style>
