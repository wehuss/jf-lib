<template>
  <div>
    <div v-if="form.length > 0" class="search-form-wrapper">
      <a-row>
        <a-col :flex="1">
          <a-form
            ref="formRef"
            :model="formData"
            :style="{ width: '100%' }"
            label-align="left"
          >
            <a-row :gutter="16">
              <a-col
                v-for="{
                  formItem: { dataIndex, title },
                  render,
                  searchColSpan,
                } in form || []"
                :key="dataIndex"
                :span="getSpan(searchColSpan)"
              >
                <a-form-item
                  :field="dataIndex"
                  :label="title"
                  :label-col-props="{
                    span: getFormItemSpan(searchColSpan, 'label'),
                  }"
                  :wrapper-col-props="{
                    span: getFormItemSpan(searchColSpan, 'wrapper'),
                  }"
                >
                  <component
                    :is="getRenderFunction(render)"
                    v-model="formData[dataIndex]"
                    style="width: 100%"
                  />
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </a-col>
        <a-divider
          :style="{ height: isVertical ? '84px' : '32px' }"
          direction="vertical"
        />
        <a-col :flex="'86px'" style="text-align: right">
          <a-space
            :direction="isVertical ? 'vertical' : 'horizontal'"
            :size="18"
          >
            <a-button type="primary" @click="search">
              <template #icon>
                <icon-search />
              </template>
              搜索
            </a-button>
            <a-button v-if="!config?.search?.hiddenReset" @click="reset">
              <template #icon>
                <icon-refresh />
              </template>
              重置
            </a-button>
          </a-space>
        </a-col>
      </a-row>
    </div>
    <!-- <div class="search-btn-wrapper"></div> -->
  </div>
</template>

<script setup lang="ts">
import { computed, PropType, ref } from 'vue'
import Form from '@arco-design/web-vue/es/form'
import { SearchColSpan, TableConfig } from '../typings'
import getRenderFunction from '../get-render-function'
import { useTableForm } from '../hooks'

const props = defineProps({
  config: Object as PropType<TableConfig>,
})
const emit = defineEmits(['search'])

const { form, formData, resetFormData } = useTableForm(
  props.config?.columns,
  'Search'
)
const formRef = ref<InstanceType<typeof Form>>()
const search = () => {
  emit('search', formData.value)
}
const reset = () => {
  resetFormData()
  search()
  // formRef?.value?.resetFields()
}

const getSpan = (config: SearchColSpan | undefined) => {
  if (!config) return 6
  if (typeof config === 'number') return config
  return config.span ?? 6
}
const formItemSpanSize = {
  label: 7,
  wrapper: 17,
}
const getFormItemSpan = (
  config: SearchColSpan | undefined,
  type: 'label' | 'wrapper'
) => {
  const size = formItemSpanSize[type]
  if (!config || typeof config === 'number' || !config.formItem) {
    return size
  }
  return config?.formItem[`${type}ColSpan`] || size
}

const isVertical = computed(() => {
  let colSpans = 0
  form.value.forEach(({ searchColSpan }) => {
    colSpans += getSpan(searchColSpan)
  })
  return colSpans > 24
})

defineExpose({
  reset,
})
</script>

<style lang="less">
.search-form-wrapper{
  margin-top: 16px;
  .arco-form-item{
    margin-bottom: 16px;
  }
}
</style>
