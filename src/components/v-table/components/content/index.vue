<script lang="tsx">
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  computed,
  defineComponent,
  h,
  inject,
  onMounted,
  onUnmounted,
  PropType,
  Ref,
  ref,
  toRefs,
  VNode,
  // watch,
} from "vue";
import type _Table from "@arco-design/web-vue/es/table";
// import type _TableColumn from '@arco-design/web-vue/es/table/table-column'
import {
  CellComponents,
  CellRenderFN,
  Columns,
  OperationsProps,
  TableConfig,
} from "../../typings";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import operations from "./components/operations.vue";
import { BaseObj } from "../../../../types/global";
import { setSelectedRowKeys } from "../../util";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ModalForm from "../modal-form.vue";
import { Table, TableColumn, TableColumnData } from "@arco-design/web-vue";

export default defineComponent({
  props: {
    config: {
      type: Object as PropType<TableConfig>,
    },
  },
  setup(props, { emit, expose }) {
    const components = { operations };

    // type Table = InstanceType<typeof _Table>;

    // const props = defineProps({
    //   config: Object as PropType<TableConfig>,
    // });

    // const emit = defineEmits(["update", "deleteData", "get"]);

    const table = ref();
    const { config } = toRefs(props);

    const TABLE_BASE_CONFIG: typeof Table["$props"] = {
      pagination: {
        current: 1,
        showPageSize: true,
        total: config?.value?.table?.data?.length || 0,
        pageSize: 30,
        showTotal: true,
        showJumper: true,
      },
      rowSelection: {
        type: "checkbox",
        showCheckedAll: true,
        selectedRowKeys: [],
      },
    };

    const columns = computed(() => {
      return config?.value?.columns;
    });

    const setPagination = (obj: BaseObj) => {
      if (typeof config?.value?.table.pagination === "object") {
        config.value.table.pagination = {
          ...config.value.table.pagination,
          ...obj,
        };
      }
    };
    const pageChange = (current: number) => {
      setPagination({ current });
      emit("get");
    };
    const pageSizeChange = (pageSize: number) => {
      setPagination({ pageSize });
      setPagination({ current: 1 });
      emit("get");
    };

    // const selectedRowKeys = inject<Ref<string[] | undefined>>('selectedRowKeys')
    const selectionChange = (ids: string[] | undefined) => {
      setSelectedRowKeys((config as Ref<TableConfig>).value, ids);
      // if (selectedRowKeys) selectedRowKeys.value = ids
    };

    const operationsRender = computed(() => {
      let render = false;
      columns?.value?.forEach((column) => {
        if (
          typeof column.cellRender === "object" &&
          column.cellRender.type === "operations"
        ) {
          render = true;
        }
      });
      return render;
    });
    const getProps = (
      props:
        | OperationsProps
        | ((params: BaseObj) => OperationsProps)
        | undefined,
      params: any
    ) => {
      if (typeof props === "function") return props(params);
      return {
        ...props,
      };
    };

    const visible = ref(false);
    const renderParams = ref<BaseObj>({});
    const modalForm = ref<{
      formData: {
        [x: string]: unknown;
      };
    }>();
    const updateData = (params: BaseObj) => {
      renderParams.value = params;
      const formData = modalForm.value?.formData as {
        [x: string]: unknown;
      };
      Object.keys(formData).forEach((key) => {
        // console.log(' params[key]', params[key], key, formData)
        formData[key] = params[key];
      });
      // 主键,一般为id
      const rowKey = config?.value?.table.rowKey;
      if (typeof rowKey === "string") formData[rowKey] = params[rowKey];
      visible.value = true;
    };
    const deleteData = (params: BaseObj) => {
      // console.log('????')
      emit("deleteData", { ...params });
    };

    const tableId = inject<string>("tableId");
    const getTableHeight = () => {
      const container = document.getElementById(`${tableId}`);
      // console.log(container, tableId)
      if (!container) return 0;
      const containerHeight = container.clientHeight;
      // console.dir(document.querySelector(`#${tableId}`))
      // console.log('containerHeight',containerHeight);
      const titleHeight =
        document.querySelector(`#${tableId} .arco-card-header`)?.clientHeight ||
        0;
      const searchFormHeight =
        document.querySelector(`#${tableId} .search-form-wrapper`)
          ?.clientHeight || 0;
      // if (config?.value?.hiddenSearch) searchFormHeight -= 21
      const toolbarHeight =
        document.querySelector(`#${tableId} .table-toolbar`)?.clientHeight || 0;
      // console.log('toolbarHeight', toolbarHeight)
      const tableHeaderHeight =
        document.querySelector(`#${tableId} thead`)?.clientHeight || 0;
      // console.log('tableHeaderHeight',tableHeaderHeight);
      // const tablePaginationHeight =
      //   document.querySelector(`#${tableId} .arco-table-pagination`)
      //     ?.clientHeight || 0
      // card 模式下有32px的padding-top
      const isCard =
        typeof config?.value?.card === "boolean"
          ? config?.value?.card
            ? 32
            : 0
          : 32;
      // console.log('isCard',isCard);
      const tablePaginationHeight = config?.value?.table.pagination ? 48 : 0;
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
        isCard;
      // 最低高度！
      // if (height < 315) height = 315
      // if (tablePaginationHeight) height -= 12
      container.style.setProperty(`--v-table-height`, `${height}px`);
      return height;
    };
    const tableHeight = ref();
    const resize = () => {
      tableHeight.value = getTableHeight();
    };

    const RenderColumns = (columns: Columns<BaseObj>[]) => {
      return columns.map((column) => {
        const slot: {
          title?: () => VNode;
          cell?: any;
        } = {};
        if (column.titleRender) slot.title = column.titleRender;
        if (!column.children && column.cellRender) {
          if (typeof column.cellRender === "function") {
            slot.cell = column.cellRender;
          } else {
            const component = column.cellRender as CellComponents<any>;
            slot.cell = (
              record: any,
              column: TableColumnData,
              rowIndex: number
            ) =>
              h(components[component.type] as any, {
                config: config?.value,
                columnData: {
                  record,
                  column,
                  rowIndex,
                },
                ...getProps(component?.props, record),
                onUpdateData: updateData,
                onDeleteData: deleteData,
              });
          }
        }
        // console.log("columns", columns);
        return (
          <TableColumn
            v-slots={slot}
            ellipsis={true}
            {...(column as any)}
            key={column.dataIndex}
          >
            {column.children && RenderColumns(column.children)}
          </TableColumn>
        );
      });
    };

    expose({ getTableHeight, resize });

    onMounted(() => {
      if (config?.value) {
        if (!config.value.batchDelete)
          delete (TABLE_BASE_CONFIG as any).rowSelection;
        config.value.table = {
          ...TABLE_BASE_CONFIG,
          ...config.value.table,
        };
      }
      emit("get");
      setTimeout(() => resize());
      window.addEventListener("resize", resize);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", resize);
    });

    return () => {
      // console.log("render");
      return (
        <div>
          <Table
            {...config.value?.table}
            class="v-table-content"
            onPageChange={pageChange}
            onPageSizeChange={pageSizeChange}
            onSelectionChange={selectionChange}
            ref={table}
            scroll={{
              y: tableHeight.value,
            }}
            // v-slots={{
            //   columns: () => renderColumns(columns.value || []),
            // }}
          >
            {{
              columns: () =>
                RenderColumns(
                  columns.value?.filter((item) => !item.hidden) || []
                ),
            }}
          </Table>
          {operationsRender.value && (
            <ModalForm
              {...config.value?.table}
              ref={modalForm}
              title="编辑"
              onUpdate:visible={(v) => (visible.value = v)}
              visible={visible.value}
              type="Update"
              renderParams={renderParams.value}
              onOkEvent={(data) => emit("update", data)}
            />
          )}
        </div>
      );
    };
  },
});
</script>

<!-- <template>
  <div>
    <a-table
      v-bind="config?.table"
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
        <component
          v-for="item in renderColumns(
            columns?.filter((item) => !item.hidden) || []
          )"
          :is="item"
        />
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
</template> -->

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
    margin-top: 16px;
  }
}
</style>
