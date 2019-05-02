const colors = {
  indigo: Object.assign('#211F6D', {
    '50': '#908FB6',
    '25': '#C7C7DB'
  }),
  blue: Object.assign('#3700FF', {
    '50': '#9B80FF',
    '25': '#CDBFFF',
    '10': '#EBE5FF'
  }),
  ink: Object.assign('#0D0D0D', {
    '95': '#191919',
    '90': '#252525',
    '75': '#222222',
    '50': '#33333E',
    '25': '#767686'
  }),
  sky: Object.assign('#BFBFC3', {
    '50': '#E5E5EC',
    '25': '#F2F2F7',
    '10': '#FBFBFC'
  }),
  red: Object.assign('#DE3618', {
    '50': '#FEAD9A',
    '25': '#FBEAE5'
  }),
  green: Object.assign('#2CB312', {
    '50': '#95D988',
    '25': '#CAECC4'
  }),
  cyan: '#00D4FF'
}

const breakpoints = ['640px', '832px', '1024px', '1152px', '1360px']
const fontSizes = [12, 14, 16, 20, 24, 28, 32, 36, 48, 64, 96, 128]
const space = [0, 4, 8, 12, 16, 24, 32, 48, 64, 96]
const lineHeights = [0.85, 1, 1.125, 1.3, 1.5, 1.6, 1.75]
const fontWeights = {
  light: 300,
  normal: 400,
  semibold: 600,
  bold: 700
}
const fonts = {
  brand: `'IBM Plex Mono', 'Fira Mono', monospace`,
  default: `-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif`
}
const radii = [0, 2, 4, 8]
const borders = [0, '1px solid', '2px solid']
const transitions = {
  default: '0.5s all cubic-bezier(.19,1,.22,1)'
}
const shadows = {
  button: Object.assign('0px 2px 6px rgba(37, 0, 105, 0.22)', {
    hover: '0px 5px 9px rgba(37,0,105,0.28)',
    active: '0px 2px 2px rgba(37, 0, 105, 0.42)'
  }),
  card: Object.assign('0px 4px 4px rgba(0, 0, 0, 0.05)', {}),
  general: Object.assign('0px 4px 4px rgba(0, 0, 0, 0.05)', {})
}

export const theme = {
  breakpoints,
  colors,
  space,
  fontSizes,
  lineHeights,
  fontWeights,
  radii,
  borders,
  shadows,
  transition: transitions,
  fonts
}

const titleProps = {
  fontFamily: 'IBM Plex Mono',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: 3,
  letterSpacing: '-0.02em'
}
const titleStyles = {
  h1: {
    fontSize: [6, 6, 8],
    fontWeight: 500,
    fontFamily: 'brand',
    lineHeight: ['64px']
  },
  h2: {
    fontSize: [5, 5, 6],
    fontWeight: 400,
    fontFamily: 'brand',
    lineHeight: ['48px']
  },
  h3: {
    fontSize: [5, 5, 6],
    fontWeight: 400,
    fontFamily: 'brand',
    lineHeight: ['48px']
  },
  h4: {
    fontSize: [3],
    fontFamily: 'default',
    fontWeight: 600,
    lineHeight: ['28px']
  }
}

const transition = '0.3s all cubic-bezier(.19,1,.22,1)'

export { transition, titleProps, titleStyles }
