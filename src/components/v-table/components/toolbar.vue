<template>
  <div class="table-toolbar">
    <a-row
      style="padding-bottom: 16px"
      v-if="config?.batchDelete || form.length > 0 || onBeforeAddModalOpen"
    >
      <a-col :span="16" class="toolbar-left">
        <a-space>
          <slot name="toolbar-left">
            <a-button
              v-if="form.length > 0 || onBeforeAddModalOpen"
              type="primary"
              @click="handleClickAdd"
            >
              <template #icon>
                <icon-plus />
              </template>
              新增
            </a-button>
            <a-popconfirm
              v-if="config?.batchDelete"
              :content="`是否删除选中的${selectedRowKeys?.length}项内容`"
              :disabled="selectedRowKeys?.length === 0"
              :ok-button-props="{
                status: 'danger',
              }"
              type="error"
              position="bl"
              @ok="emit('batchDelete')"
            >
              <a-button
                type="primary"
                status="danger"
                :disabled="selectedRowKeys?.length === 0"
              >
                <template #icon>
                  <icon-minus />
                </template>
                删除
              </a-button>
            </a-popconfirm>
          </slot>
          <slot name="toolbar-left-extend"></slot>
        </a-space>
      </a-col>
      <a-col :span="8" class="toolbar-right">
        <slot name="toolbar-right"></slot>
      </a-col>
    </a-row>
    <template v-if="form.length > 0">
      <modal-form
        v-model:visible="visible"
        title="新增"
        type="Add"
        @ok-event="(data) => emit('add', data)"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { PropType, Ref, inject, ref, computed } from "vue";
import { useTableForm } from "../hooks";
import { TableConfig } from "../typings";

import ModalForm from "./modal-form.vue";

const props = defineProps({
  config: Object as PropType<TableConfig>,
});
const emit = defineEmits(["add", "batchDelete"]);

const selectedRowKeys = inject<Ref<number[] | string[]>>("selectedRowKeys");

const visible = ref(false);
const { form } = useTableForm(props.config?.columns, "Add");
const onBeforeAddModalOpen = computed(() => {
  return props.config?.toolbar?.onBeforeAddModalOpen;
});
const handleClickAdd = async () => {
  if (typeof onBeforeAddModalOpen.value === "function") {
    const result = await onBeforeAddModalOpen.value();
    if (result === false) return;
  }
  visible.value = true;
};
</script>

<style lang="less">
.table-toolbar {
  // padding-bottom: 16px;
  .arco-space{
    width: 100%;
  }

  .toolbar-right {
    text-align: right;
  }
}
</style>
