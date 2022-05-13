<template>
  <span class="column-operations">
    <template v-if="extendRender && props.extendPostion === 'left'">
      <component :is="extendRender" />
    </template>
    <a-button
      v-if="!updateButton?.hidden"
      type="text"
      :disabled="updateButton?.disabled"
      @click="updateData"
      >编辑</a-button
    >
    <template v-if="extendRender && props.extendPostion === 'center'">
      <component :is="extendRender" />
    </template>
    <a-popconfirm content="确定要删除此项内容吗" @ok="deleteData">
      <a-button
        v-if="!deleteButton?.hidden"
        type="text"
        status="danger"
        :disabled="deleteButton?.disabled"
        >删除</a-button
      >
    </a-popconfirm>
    <template v-if="extendRender && props.extendPostion === 'right'">
      <component :is="extendRender" />
    </template>
  </span>
</template>

<script setup lang="ts">
import { computed, h, onMounted, toRefs } from 'vue'
import {
  CellRenderFN,
  OperationsButtonConfig,
  TableColumnProps,
  TableConfig,
} from '@/components/v-table/typings'
import { BaseObj } from '@/types/global'

interface ColumnData {
  record: BaseObj
  column: TableColumnProps
  rowIndex: number
}

const props = withDefaults(
  defineProps<{
    config: TableConfig
    columnData: ColumnData
    extend?: CellRenderFN
    extendPostion?: 'center' | 'left' | 'right'
    updateButton?: OperationsButtonConfig
    deleteButton?: OperationsButtonConfig
  }>(),
  {
    extendPostion: 'center',
  }
)

const emit = defineEmits(['updateData', 'deleteData'])

const { config, columnData, extend } = toRefs(props)

const extendRender = computed(() => {
  if (!columnData) return false
  const { record, column, rowIndex } = columnData?.value as ColumnData
  return () =>
    extend?.value ? extend.value(record, column, rowIndex) : h('span')
  // return false
})

const updateData = async () => {
  if (typeof props.updateButton?.onClick === 'function') {
    const result = await props.updateButton?.onClick(columnData?.value?.record)
    if (result === false) return
  }
  emit('updateData', columnData?.value?.record)
}

const deleteData = async () => {
  if (typeof props.deleteButton?.onClick === 'function') {
    const result = await props.deleteButton?.onClick(columnData?.value?.record)
    if (result === false) return
  }
  emit('deleteData', columnData?.value?.record)
}

onMounted(() => {
  const columns = config?.value?.columns
  if (!columns) return
  const dataIndex = columnData?.value?.column.dataIndex
  for (let i = 0; i < columns.length; i += 1) {
    if (columns[i].dataIndex === dataIndex) {
      const column = columns[i]
      if (column.titleRender) return
      const { title } = column
      column.titleRender = () =>
        h(
          'span',
          {
            style: {
              marginLeft: '6px',
            },
          },
          title
        )
    }
  }
})
</script>

<style lang="less">
.column-operations {
  .arco-btn-size-medium {
    padding: 0 6px;
  }
}
</style>
