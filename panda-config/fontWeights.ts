import type { GetPandaConfigMap } from './interfaces'

export const pandaFontWeights: GetPandaConfigMap<'fontWeights'> = {
  normal: { value: '400' },
  bold: { value: '700' }
}
