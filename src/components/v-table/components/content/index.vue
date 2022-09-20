<script lang="tsx">
  /* eslint-disable @typescript-eslint/no-explicit-any */
  import {
    computed,
    defineComponent,
    h,
    inject,
    nextTick,
    onMounted,
    onUnmounted,
    PropType,
    Ref,
    ref,
    toRefs,
    VNode,
    // watch,
  } from 'vue'
  import type _Table from '@arco-design/web-vue/es/table'
  // import type _TableColumn from '@arco-design/web-vue/es/table/table-column'
  import {
    CellComponents,
    CellRenderFN,
    Columns,
    OperationsProps,
    TableConfig,
  } from '../../typings'
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import operations from './components/operations.vue'
  import { BaseObj } from '../../../../types/global'
  import { setSelectedRowKeys } from '../../util'
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import ModalForm from '../modal-form.vue'
  import { Table, TableColumn, TableColumnData } from '@arco-design/web-vue'
  import { omit } from 'lodash'

  export default defineComponent({
    props: {
      config: {
        type: Object as PropType<TableConfig>,
      },
    },
    setup(props, { emit, expose }) {
      const components = { operations }

      // type Table = InstanceType<typeof _Table>;

      // const props = defineProps({
      //   config: Object as PropType<TableConfig>,
      // });

      // const emit = defineEmits(["update", "deleteData", "get"]);

      const table = ref()
      const { config } = toRefs(props)

      const TABLE_BASE_CONFIG: typeof Table['$props'] = {
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
        props:
          | OperationsProps
          | ((params: BaseObj) => OperationsProps)
          | undefined,
        params: any
      ) => {
        if (typeof props === 'function') return props(params)
        return {
          ...props,
        }
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

      const RenderColumns = (columns: Columns<BaseObj>[]) => {
        return columns.map((column) => {
          const slot: {
            title?: () => VNode
            cell?: any
          } = {}
          if (column.titleRender) slot.title = column.titleRender
          if (!column.children && column.cellRender) {
            if (typeof column.cellRender === 'function') {
              slot.cell = column.cellRender
            } else {
              const component = column.cellRender as CellComponents<any>
              slot.cell = (record: any) =>
                h(components[component.type] as any, {
                  config: config?.value,
                  columnData: {
                    ...record,
                    // column,
                    // rowIndex,
                  },
                  ...getProps(component?.props, record),
                  onUpdateData: updateData,
                  onDeleteData: deleteData,
                })
            }
          }
          return (
            <TableColumn
              v-slots={slot}
              ellipsis={true}
              {...(omit(column, [
                'cellRender',
                'form',
                'hidden',
                'children',
                'titleRender',
              ]) as any)}
              key={column.dataIndex ?? Date.now()}
            >
              {column.children && RenderColumns(column.children)}
            </TableColumn>
          )
        })
      }

      onMounted(() => {
        if (config?.value) {
          if (!config.value.batchDelete)
            delete (TABLE_BASE_CONFIG as any).rowSelection
          config.value.table = {
            ...TABLE_BASE_CONFIG,
            ...config.value.table,
          }
        }
        // emit("get");
        // setTimeout(() => resize());
        // window.addEventListener("resize", resize);
      })
      // onUnmounted(() => {
      //   // window.removeEventListener("resize", resize);
      // });

      return () => {
        // console.log("render");
        return (
          <div
            style={{
              flex: 1,
              overflow: 'hidden',
            }}
          >
            <Table
              {...omit(config.value?.table, 'v-slots')}
              class='v-table-content'
              onPageChange={pageChange}
              onPageSizeChange={pageSizeChange}
              onSelectionChange={selectionChange}
              ref={table}
              // 无实际意义，仅为激活表格的flex布局，请勿更改！！！
              scroll={{
                y: 100,
              }}
              v-slots={{
                ...(config.value?.table?.['v-slots'] || {}),
                columns: () =>
                  RenderColumns(
                    columns.value?.filter((item) => !item.hidden) || []
                  ),
              }}
            ></Table>
            {operationsRender.value && (
              <ModalForm
                {...config.value?.table}
                ref={modalForm}
                title='编辑'
                onUpdate:visible={(v) => (visible.value = v)}
                visible={visible.value}
                type='Update'
                renderParams={renderParams.value}
                onOkEvent={(data) => emit('update', data)}
              />
            )}
          </div>
        )
      }
    },
  })
</script>

<style lang="less">
  .v-table-content {
    height: 100%;
    .arco-spin {
      overflow: hidden;
      .arco-table-container {
        flex: 1;
        min-height: 0;
        .arco-table-content {
          overflow: hidden;
          .arco-table-body {
            flex: 1;
            min-height: 0;
            max-height: 100% !important;
            height: 0;
          }
        }
      }
    }
    // .arco-table-body {
    //   // height: var(--v-table-height);
    // }
  }
</style>

<style lang="less" scoped>
  .v-table-content {
    :deep(.arco-table-pagination) {
      margin-top: 16px;
    }
  }
</style>
