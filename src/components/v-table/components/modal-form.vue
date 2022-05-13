<template>
  <a-modal
    v-model:visible="_visible"
    modal-class="table-modal"
    unmount-on-close
    @before-ok="handleOk"
    @close="handleClose"
  >
    <template #title> {{ props.title }} </template>
    <div>
      <a-form
        ref="formRef"
        :model="formData"
        :style="{ width: '100%' }"
        :label-col-props="{ span: 6 }"
        :wrapper-col-props="{ span: 18 }"
        :rules="rules"
      >
        <a-row>
          <a-form-item
            v-for="{
              formItem: { dataIndex, title: label, tooltip },
              render,
            } in form || []"
            :key="dataIndex"
            :span="6"
            :field="dataIndex"
            :label="label"
          >
            <a-col :span="24">
              <component
                :is="getRenderFunction(render, props.renderParams)"
                v-model="formData[dataIndex]"
                :style="{
                  width: hasTooltip ? '94%' : '100%',
                }"
              />
              <a-tooltip v-if="tooltip" :content="tooltip">
                <div
                  style="display: inline-block; width: 6%; text-align: right"
                >
                  <icon-info-circle />
                </div>
              </a-tooltip>
            </a-col>
            <!-- <a-col
              :span="24"
              style="font-size: 12px; color: var(--color-text-3)"
            >
              123
            </a-col> -->
          </a-form-item>
        </a-row>
      </a-form>
    </div>
  </a-modal>
</template>

<script setup lang="ts">
import { Form } from '@arco-design/web-vue'
import { cloneDeep } from 'lodash'
import { computed, inject, ref } from 'vue'
import { BaseObj } from '@/types/global'
import getRenderFunction from '../get-render-function'
import { useTableForm } from '../hooks'
import { TableConfig } from '../typings'

const props = defineProps<{
  type: 'Add' | 'Update'
  visible: boolean
  title: string
  renderParams?: BaseObj
}>()
const emit = defineEmits(['update:visible', 'okEvent'])

const config = inject<TableConfig>('config')
const { form, formData, rules, hasTooltip, resetFormData } = useTableForm(
  config?.columns,
  props.type
)
const _visible = computed<boolean>({
  get() {
    return props.visible
  },
  set(val) {
    emit('update:visible', val)
  },
})
const formRef = ref<InstanceType<typeof Form>>()
const handleOk = (done: (closed: boolean) => void) => {
  formRef.value?.validate().then((errors) => {
    if (errors) {
      done(false)
      return
    }
    emit('okEvent', cloneDeep(formData.value))
    done(true)
  })
}
const handleClose = () => {
  resetFormData()
  formRef?.value?.resetFields()
}

defineExpose({
  formData,
  resetFormData,
})
</script>

<style scoped></style>
