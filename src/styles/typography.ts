import palette from './palette'

export default {
  heading: {
    1: {
      black: {
        bold: {
          fontSize: 24,
          fontWeight: '600',
          color: palette.gray[100],
          lineHeight: 32,
        },
      },
      white: {
        bold: {
          fontSize: 24,
          fontWeight: '600',
          color: palette.white.default,
          lineHeight: 32,
        },
      },
    },
    2: {
      black: {
        normal: {
          fontSize: 18,
          fontWeight: '400',
          color: palette.gray[100],
          lineHeight: 28,
        },
        bold: {
          fontSize: 18,
          fontWeight: '600',
          color: palette.gray[100],
          lineHeight: 28,
        },
      },
    },
    3: {
      black: {
        normal: {
          fontSize: 16,
          fontWeight: '400',
          color: palette.gray[100],
          lineHeight: 24,
        },
        bold: {
          fontSize: 16,
          fontWeight: '600',
          color: palette.gray[100],
          lineHeight: 24,
        },
      },
    },
  },
  body: {
    1: {
      black: {
        fontSize: 16,
        color: palette.gray[90],
        lineHeight: 24,
      },
      white: {
        fontSize: 16,
        color: palette.gray[10],
        lineHeight: 24,
      },
    },
    2: {
      black: {
        fontSize: 14,
        color: palette.gray[90],
        lineHeight: 18,
      },
      white: {
        fontSize: 14,
        color: palette.gray[10],
        lineHeight: 18,
      },
    },
    3: {
      gray: {
        fontSize: 12,
        color: palette.gray[60],
        lineHeight: 16,
      },
    },
  },
  tiny: {
    1: {
      gray: {
        fontSize: 11,
        color: palette.gray[70],
        lineHeight: 14,
      },
      lightGray: {
        fontSize: 11,
        color: palette.gray[60],
        lineHeight: 14,
      },
      black: {
        fontSize: 11,
        color: palette.gray[100],
        lineHeight: 14,
      },
      white: {
        fontSize: 11,
        color: palette.white.default,
        lineHeight: 14,
      },
    },
  },
}
