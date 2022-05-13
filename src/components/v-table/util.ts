import { TableConfig } from './typings'

export const setSelectedRowKeys = (
  config: TableConfig,
  value: string[] | undefined
) => {
  if (config?.table.rowSelection) {
    const rowSelection = config?.table.rowSelection
    // console.log('rowSelection', rowSelection)
    if (rowSelection) {
      rowSelection.selectedRowKeys = value
    }
  }
}
