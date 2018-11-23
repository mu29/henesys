import palette from './palette'

export default {
  heading: {
    1: {
      black: {
        fontSize: 24,
        fontWeight: '600',
        color: palette.gray[100],
        lineHeight: 32,
      },
    },
    2: {
      black: {
        fontSize: 18,
        fontWeight: '600',
        color: palette.gray[100],
        lineHeight: 28,
      },
    },
    3: {
      black: {
        fontSize: 16,
        fontWeight: '600',
        color: palette.gray[100],
        lineHeight: 24,
      },
    },
  },
  body: {
    1: {
      black: {
        fontSize: 16,
        color: palette.gray[100],
        lineHeight: 24,
      },
    },
    2: {
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
        fontSize: 10,
        color: palette.gray[70],
        lineHeight: 12,
      },
    },
  },
}
