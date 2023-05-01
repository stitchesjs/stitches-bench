import { style, styleVariants } from '@vanilla-extract/css';

export const view = style({
  alignItems: 'stretch',
  borderWidth: '0',
  borderStyle: 'solid',
  boxSizing: 'border-box',
  display: 'flex',
  flexBasis: 'auto',
  flexDirection: 'column',
  flexShrink: 0,
  margin: '0',
  padding: '0',
  position: 'relative',
  minHeight: '0',
  minWidth: '0',
  alignSelf: 'flex-start',
})

export const layout = styleVariants({
  column: { flexDirection: 'column' },
  row: { flexDirection: 'row' },
});

export const padding = styleVariants({
  true: {
    padding: "4px"
  }
});
export const fixed = styleVariants({
  true: {
    height: '6px',
    width: '6px',
  }
});

export const color = styleVariants({
  0: {
    backgroundColor: '#14171A',
  },
  1: {
    backgroundColor: '#AAB8C2',
  },
  2: {
    backgroundColor: '#E6ECF0',
  },
  3: {
    backgroundColor: '#FFAD1F',
  },
  4: {
    backgroundColor: '#F45D22',
  },
  5: {
    backgroundColor: '#E0245E',
  },
});
