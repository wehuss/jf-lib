import { h, getCurrentInstance } from 'vue'
import { toPascalCase } from '@/utils/utils'
import { FormRender } from './typings'
import { BaseObj } from '@/types/global'

export default (render: FormRender, renderParams?: BaseObj | undefined) => {
  if (typeof render === 'function') {
    return render(renderParams)
  }
  const component =
    getCurrentInstance()?.appContext.components[toPascalCase(render.type)] ||
    render.type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return h(component as any, render.props)
}
