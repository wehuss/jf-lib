/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormRender } from '@/components/v-table/typings'

const clearAndUpper = (text: string) => text.replace(/-/, '').toUpperCase()

export const toPascalCase = (text: string) =>
  text.replace(/(^\w|-\w)/g, clearAndUpper)

export const filterTree = (
  _tree: any[],
  filterValue: string | boolean | number,
  fields: {
    filterField: string
    children: string
    key?: string
  }
) => {
  const getTreeKey = (data: any) => {
    const key = fields.key as string
    const keys: any[] = []
    keys.push(data[key])
    if (data[fields.children]?.length > 0) {
      data[fields.children].forEach((item: any) => {
        keys.push(...getTreeKey(item))
      })
    }
    return keys
  }
  const isMatch = (value: any) => {
    if (typeof filterValue === 'string') return value.includes(filterValue)
    return value === filterValue
  }
  const tree: any[] = []
  const keys: any[] = []
  _tree.forEach((item) => {
    if (isMatch(item[fields.filterField])) {
      tree.push(item)
      if (fields.key) {
        keys.push(...getTreeKey(item))
      }
    } else if (item[fields.children]?.length > 0) {
      const { tree: fTree, keys: fKeys } = filterTree(
        item[fields.children],
        filterValue,
        fields
      )
      if (fTree.length > 0) {
        tree.push(...fTree)
        keys.push(...fKeys)
      }
    }
  })

  return {
    tree,
    keys,
  }
}

export const getFormInput = (props: string | any): FormRender => {
  let baseProps: any = {
    allowClear: true,
    maxLength: 100,
  }
  if (typeof props === 'string') {
    baseProps.placeholder = props
  } else {
    baseProps = {
      ...baseProps,
      ...props,
    }
  }
  return {
    type: 'a-input',
    props: baseProps,
  }
}
