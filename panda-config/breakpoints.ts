import type { Config } from '@pandacss/dev'

export const pandaBreakpoints: Required<Required<Config>['theme']>['extend']['breakpoints'] = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px'
}
