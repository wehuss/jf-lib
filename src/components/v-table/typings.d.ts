/* eslint-disable @typescript-eslint/no-explicit-any */
import { CSSProperties, VNode } from 'vue'
import type _Table from '@arco-design/web-vue/es/table'
import type _TableColumn from '@arco-design/web-vue/es/table/table-column'
import { FieldRule } from '@arco-design/web-vue/es/form/interface'
import { BaseGetData, BaseObj } from '@/types/global'

export type TableColumn = InstanceType<typeof _TableColumn>

export type TableColumnProps = TableColumn['$props']
type Table = InstanceType<typeof _Table>['$props']

type FormRenderType =
  | 'a-input'
  | 'a-input-number'
  | 'a-time-picker'
  | 'a-select'
  | 'v-select'

export type FormRender<T = BaseObj> =
  | {
      type: FormRenderType
      props: {
        [key: string]: unknown
      }
    }
  | ((params: T | undefined) => VNode)

// export type BaseObj = { [key: string]: unknown }

export type CellRenderFN<T = BaseObj> = (
  record: T,
  column: TableColumnProps,
  rowIndex: number
) => VNode

export type OperationsButtonConfig = {
  hidden?: boolean
  disabled?: boolean
  onClick?: (params?: BaseObj) => void | boolean
}

export type OperationsProps<T = BaseObj> = {
  extend?: CellRenderFN<T>
  extendPostion?: 'center' | 'left' | 'right'
  updateButton?: OperationsButtonConfig
  deleteButton?: OperationsButtonConfig
}
type CellComponentOperate<T = BaseObj> = {
  type: 'operations'
  props?: OperationsProps<T> | ((params: T) => OperationsProps<T>)
}

type CellComponents<T> = CellComponentOperate<T>

type TableFormItemConfig<T> = {
  render?: FormRender<T>
  yIndex?: number
  rule?: FieldRule | FieldRule[]
  required?: boolean
  defaultValue?: unknown
  tooltip?: string
  title?: string
}

export type SearchColSpan =
  | number
  | {
      span: number
      formItem?: {
        labelColSpan?: number
        wrapperColSpan?: number
      }
    }

export type Columns<T = BaseObj> = TableColumnProps & {
  dataIndex: keyof T | string
  hidden?: boolean
  titleRender?: () => VNode
  cellRender?: CellRenderFN<T> | CellComponents<T>
  form?:
    | ({
        hiddenSearch?: boolean
        hiddenAdd?: boolean
        hiddenUpdate?: boolean
        searchColSpan?: SearchColSpan
        // [
        //   key: 'addConfig' | 'updateConfig' | 'searchConfig'
        // ]: TableFormItemConfig
        addConfig?: TableFormItemConfig<T>
        updateConfig?: TableFormItemConfig<T>
        searchConfig?: TableFormItemConfig<T>
      } & TableFormItemConfig<T>)
    | boolean
    | (() => VNode)
}

// type BaseGetData = {
//   data: Array<BaseObj>
//   total: number
//   page: number
//   pageSize: number
// }

export interface TableConfig<T = BaseObj> {
  title?: string
  card?: boolean
  batchDelete?: boolean
  hiddenSearch?: boolean
  hiddenToolbar?: boolean
  style?: CSSProperties
  toolbar?: {
    onBeforeAddModalOpen?: () => void | boolean
  }
  search?: {
    hiddenReset?: boolean
  }
  table: Omit<Table, 'columns'> & {
    data: Array<BaseObj>
  }
  columns: Array<Columns<T>>
  apis?: {
    get?: (params: {
      current: number
      pageSize: number
      [key: string]: unknown
    }) =>
      | BaseGetData<T>
      | Promise<T[]>
      | Promise<BaseGetData<T>>
      | Promise<BaseGetData<BaseObj>>
    update?: (formData: T) => void | Promise<unknown>
    add?: (formData: T) => void | Promise<unknown>
    delete?: (
      id: number | number[],
      formData?: T | T[]
    ) => void | Promise<unknown>
  }
}

export interface FormGenerate {
  form: Array<{
    formItem: {
      title: string
      dataIndex: string
    }
    render: FormRender
  }>
  formData: BaseObj
}
