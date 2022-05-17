import { FieldRule } from '@arco-design/web-vue/es/form/interface'
import { cloneDeep } from 'lodash'
import { ref, toRefs, watchEffect } from 'vue'
import { BaseObj } from '../../types/global'
import { Columns, FormRender, SearchColSpan } from './typings'

const defineRender = (title: string) => ({
  type: 'a-input',
  props: {
    placeholder: `请输入${title}`,
    allowClear: true,
    maxLength: 100,
  },
})

type FormType = 'Search' | 'Update' | 'Add'

const getIndexAndConvert = (column: Columns, type: FormType) => {
  const { form } = column
  if (typeof form !== 'object') return 0
  const _key = type.toLocaleLowerCase() as 'add' | 'update' | 'search'
  // console.log('_key', _key, form[`${_key}Config`], form.defaultValue=11111)
  if (form[`${_key}Config`]) {
    column.form = {
      ...form,
      ...form[`${_key}Config`],
    }
  }
  return form?.yIndex || 0
}

const getForm = (columns: Array<Columns> | undefined, type: FormType) => {
  // const formData: BaseObj = {}
  const defaultValues: BaseObj = {}
  const rules: Record<string, FieldRule[]> = {}
  let hasTooltip = false
  const addRule = (dataIndex: string, rule: FieldRule | FieldRule[]) => {
    if (!rules[dataIndex]) rules[dataIndex] = []
    if (rule instanceof Array) {
      rules[dataIndex].push(...rule)
    } else {
      rules[dataIndex].push(rule)
    }
  }
  const _columns = cloneDeep(columns?.filter((column) => column.form))
  _columns?.sort((a, b) => {
    return getIndexAndConvert(b, type) - getIndexAndConvert(a, type)
  })
  const form = _columns
    ?.map(({ form, title, dataIndex }) => {
      let formItem: BaseObj = {
        title,
        dataIndex,
      }
      if (typeof form !== 'object') {
        defaultValues[dataIndex as string] = ''
        const render =
          typeof form === 'boolean' ? defineRender(title as string) : form
        return {
          formItem,
          render,
        }
      }
      if (form[`hidden${type}`]) return false
      const { searchColSpan, tooltip } = form
      if (tooltip) hasTooltip = true
      formItem = {
        ...formItem,
        tooltip,
      }
      if (form.title) formItem.title = form.title
      // console.log('form.defaultValue', form.defaultValue, form)
      defaultValues[dataIndex as string] = form.defaultValue ?? ''
      if (form.required)
        addRule(dataIndex as string, {
          required: true,
          message: `${title}不能为空`,
        })
      if (form.rule) addRule(dataIndex as string, form.rule)
      return {
        formItem,
        render: form.render || defineRender(title as string),
        searchColSpan,
      }
    })
    .filter((item) => item)
  return {
    form: form as Array<{
      formItem: {
        title: string
        dataIndex: string
        tooltip?: string
      }
      render: FormRender
      searchColSpan?: SearchColSpan
    }>,
    formData: cloneDeep(defaultValues),
    defaultValues,
    rules,
    hasTooltip,
  }
}

export function useTableForm(
  columns: Array<Columns> | undefined,
  type: 'Search' | 'Update' | 'Add'
) {
  const form = ref(getForm(columns, type))
  watchEffect(() => {
    // form.value = getForm(columns, type)
    const {
      form: _form,
      formData,
      rules,
      defaultValues,
    } = getForm(columns, type)
    form.value.form = _form
    form.value.formData = formData
    form.value.rules = rules
    form.value.defaultValues = defaultValues
  })
  return {
    ...toRefs(form.value),
    resetFormData() {
      form.value.formData = cloneDeep(form.value.defaultValues)
    },
  }
}
