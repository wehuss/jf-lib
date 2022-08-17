<template>
  <a-card
    :id="tableId"
    :style="{ width: '100%', ...(config?.style || {}) }"
    :title="config?.title"
    :bordered="Boolean(config?.card)"
    class="v-table"
    :class="[!config?.card && 'general-card']"
  >
    <!-- 777 -->
    <v-search
      v-if="!config?.hiddenSearch"
      ref="searchRef"
      :config="config"
      @search="search"
    />
    <v-toolbar
      v-if="!config?.hiddenToolbar"
      :config="config"
      @add="add"
      @batch-delete="batchDelete"
    >
      <template #toolbar-left>
        <slot name="toolbar-left"></slot>
      </template>
      <template #toolbar-left-extend>
        <slot name="toolbar-left-extend"></slot>
      </template>
      <template #toolbar-right>
        <slot name="toolbar-right"></slot>
      </template>
    </v-toolbar>
    <v-content
      ref="contentRef"
      :config="config"
      @update="update"
      @delete-data="deleteData"
      @get="get"
    />
  </a-card>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";

export default defineComponent({
  name: "VTable",
});
</script>
<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { computed, provide, Ref, ref, toRefs, PropType } from "vue";
// import { number } from 'echarts/core'
import { uniqueId } from "lodash";
import { Message } from "@arco-design/web-vue";
import { TableConfig } from "./typings";
import VSearch from "./components/search.vue";
import VToolbar from "./components/toolbar.vue";
import VContent from "./components/content/index.vue";
import { BaseGetData, BaseObj } from "../../types/global";
import { setSelectedRowKeys } from "./util";

const tableId = uniqueId("v-table-");
provide("tableId", tableId);

const props = defineProps({
  config: Object as PropType<TableConfig>,
});

const { config } = toRefs(props);

// watch(()=>config,(newVal)=>{
//   console.log('change',newVal);
// },{
//   deep:true
// })

provide("config", config && config.value);

const pagination = computed(() => {
  return config?.value?.table.pagination as {
    size: "mini" | "small" | "medium" | "large";
    disabled: boolean;
    defaultCurrent: number;
    total: number;
    defaultPageSize: number;
    hideOnSinglePage: boolean;
    simple: boolean;
    showTotal: boolean;
    showMore: boolean;
    showJumper: boolean;
    showPageSize: boolean;
    pageSizeOptions: number[];
    baseSize: number;
    bufferSize: number;
    current: number;
    pageSize: number;
  };
});

const setLoading = (bool: boolean) => {
  if (config?.value?.table) config.value.table.loading = bool;
};

const selectedRowKeys = computed({
  get: () => props.config?.table.rowSelection?.selectedRowKeys || [],
  set: (val) => {
    if (props.config?.table.rowSelection?.selectedRowKeys) {
      // eslint-disable-next-line vue/no-mutating-props
      props.config.table.rowSelection.selectedRowKeys = val;
    }
  },
});
provide("selectedRowKeys", selectedRowKeys);

const searchParams = ref<BaseObj>({});
const apis = ref(config?.value?.apis);
const get = async () => {
  if (!config?.value) return;
  if (config.value?.loadingOnGet !== false) setLoading(true);
  try {
    if (apis.value?.get) {
      // const pagination = config.value?.table.pagination as PaginationProps
      const { current, pageSize } = pagination.value;
      const result = (await apis.value?.get({
        current: current as number,
        pageSize: pageSize as number,
        ...searchParams.value,
      })) as any;
      const isBaseGetData = !((result?.total ?? true) === true);
      if (isBaseGetData && pagination.value) {
        const { data, total } = result as BaseGetData<BaseObj>;
        pagination.value.total = total ?? data.length;
        config.value.table.data = data;
      } else {
        const data = result as BaseObj[];
        config.value.table.data = data;
      }
    }
  } catch (error) {
    // console.log('error', error)
  } finally {
    setLoading(false);
  }
};

const crud = async (
  apiName: "update" | "delete" | "add",
  params: BaseObj | any[]
) => {
  const map = {
    update: "编辑",
    add: "新增",
    delete: "删除",
  };
  const paramsIsArray = params instanceof Array;
  const filterParams: BaseObj = {};
  if (!paramsIsArray) {
    Object.keys(params).forEach((key) => {
      if ((params[key] ?? false) !== false && params[key] !== "") {
        filterParams[key] = params[key];
      }
    });
  }
  if (apis.value && apis.value[apiName]) {
    // eslint-disable-next-line no-useless-catch
    try {
      const requestFunction = apis.value[apiName] as any;
      // await ()(filterParams)
      if (paramsIsArray) {
        // console.log('params', params)
        await requestFunction.call(null, ...params);
      } else {
        await requestFunction(filterParams);
      }
      Message.success(`${map[apiName]}成功`);
      get();
    } catch (error) {
      // console.trace(`${map[apiName]}失败`)
      throw error;
    }
  }
};

const add = async (params: BaseObj) => {
  // if (apis.value?.add) {
  //   await apis.value?.add(params)
  //   get()
  // }
  crud("add", params);
};
const update = async (params: BaseObj) => {
  // if (apis.value?.update) {
  //   await apis.value?.update(params)
  //   get()
  // }
  crud("update", params);
};
const deleteData = async (params: BaseObj) => {
  // if (apis.value?.delete) {
  //   await apis.value?.delete(params)
  //   get()
  // }
  // console.log(
  //   'config?.value?.table?.rowKey',
  //   config?.value?.table?.rowKey,
  //   params
  // )
  const rowKey =
    (params[config?.value?.table?.rowKey as string] as number) || null;
  // const rowKey = 12333
  crud("delete", [rowKey, params]).then(() => {
    const index = selectedRowKeys.value.indexOf(rowKey as never);
    if (index !== -1) {
      selectedRowKeys.value.splice(index, 1);
      // setSelectedRowKeys((config as Ref<TableConfig>).value, [
      //   ...(selectedRowKeys.value as string[]),
      // ])
    }
  });
};

const batchDelete = async () => {
  const keys = selectedRowKeys.value;
  crud("delete", [keys]).then(() => {
    selectedRowKeys.value = [];
    // setSelectedRowKeys((config as Ref<TableConfig>).value, [])
  });
};

const search = (params: BaseObj) => {
  // console.log('params', params)
  searchParams.value = {};
  Object.keys(params).forEach((key) => {
    if ((params[key] ?? "") !== "") {
      searchParams.value[key] = params[key];
    }
  });
  // searchParams.value = params
  if (pagination.value) pagination.value.current = 1;
  get();
};

const contentRef = ref<{
  getTableHeight: () => number;
}>();
const searchRef = ref<{
  reset: () => void;
}>();

// setTimeout(()=>{
//   console.log('contentRef',contentRef);

// },1000)
// provide('setGetTableHeight', (fn: () => number) => {
//   getTableHeight.value = fn
//   console.log('getTableHeight', getTableHeight.value)
// })
const _setSelectedRowKeys = (keys: string[]) =>
  setSelectedRowKeys((config as Ref<TableConfig>).value, keys);
defineExpose({
  contentRef,
  get,
  resetSearchParams: searchRef.value?.reset,
  setSelectedRowKeys: _setSelectedRowKeys,
  getSelectedRowKeys: () => selectedRowKeys.value,
});
</script>

<style lang="less">
.v-table {
  height: 100%;
  // height: var(--container-height);
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .arco-card-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding-top: 0 !important;
  }

  .arco-table-border {
    .arco-table-container {
      border-right: 1px solid var(--color-neutral-3);
    }

    .arco-table-scroll-y
      .arco-table-body
      .arco-table-tr:not(.arco-table-tr-empty):last-of-type
      .arco-table-td,
    .arco-table-border
      .arco-table-scroll-y
      tfoot
      .arco-table-tr:last-of-type
      .arco-table-td {
      border-bottom: 1px solid var(--color-border-2);
    }
  }

  .arco-table-border-cell
    .arco-table-tr
    .arco-table-td:last-child:not(.arco-table-tr-expand) {
    border-right: none;
  }

  // .arco-card-body {
  //   padding-bottom: 0 !important;
  // }
}

.table-modal {
  .arco-modal-title {
    display: block;
  }
}
</style>
