import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@park-ui/panda-preset'

import blue from '@park-ui/panda-preset/colors/blue'
import neutral from '@park-ui/panda-preset/colors/neutral'

import { pandaBreakpoints } from './panda-config/breakpoints'
import { pandaSemanticColors } from './panda-config/colors'
import { pandaConditions } from './panda-config/conditions'
import { pandaDurations } from './panda-config/durations'
import { pandaEasings } from './panda-config/easings'
import { pandaFonts } from './panda-config/fonts'
import { pandaFontSizes } from './panda-config/fontSizes'
import { pandaFontWeights } from './panda-config/fontWeights'
import { pandaRadii } from './panda-config/radii'
import { pandaRecipes, pandaSlotRecipes } from './panda-config/recipes'
import { pandaShadows } from './panda-config/shadows'
import { pandaSizes } from './panda-config/sizes'
import { pandaSpacing } from './panda-config/spacing'
import { pandaUtilities } from './panda-config/utilities'

export default defineConfig({
  presets: [
    '@pandacss/preset-base',
    createPreset({
      accentColor: blue,
      grayColor: neutral,
      radius: 'md'
    })
  ],
  jsxFramework: 'react',
  include: ['./src/renderer/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  outdir: 'src/generated/styled-system',
  importMap: '@panda',
  preflight: true,
  minify: process.env.NODE_ENV === 'production',
  globalCss: {
    body: {
      fontFamily: 'body'
    },
    // Lock html scroll when Ark UI dialog is open
    // Ark UI only locks body scroll, but html can still scroll
    // See: https://github.com/chakra-ui/chakra-ui/discussions/8672
    'html:has(body[data-scroll-lock])': {
      overflow: 'hidden'
    }
  },
  theme: {
    extend: {
      tokens: {
        fonts: pandaFonts,
        fontSizes: pandaFontSizes,
        fontWeights: pandaFontWeights,
        spacing: pandaSpacing,
        radii: pandaRadii,
        shadows: pandaShadows,
        sizes: pandaSizes,
        durations: pandaDurations,
        easings: pandaEasings
      },
      semanticTokens: {
        colors: pandaSemanticColors
      },

      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        fadeOut: {
          from: { opacity: '1' },
          to: { opacity: '0' }
        },
        scaleIn: {
          from: { transform: 'scale(0.95)' },
          to: { transform: 'scale(1)' }
        },
        scaleOut: {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(0.95)' }
        }
      },

      recipes: pandaRecipes,
      slotRecipes: pandaSlotRecipes,
      breakpoints: pandaBreakpoints
    }
  },
  conditions: pandaConditions,
  utilities: pandaUtilities
})
