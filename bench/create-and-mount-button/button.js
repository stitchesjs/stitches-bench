export const styles = {
  // Reset
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  fontFamily: 'system-ui',
  fontWeight: 500,
  fontVariantNumeric: 'tabular-nums',
  '&:disabled': {
    backgroundColor: 'gray',
    boxShadow: 'inset 0 0 0 1px gray',
    color: 'gray',
    pointerEvents: 'none',
  },
  backgroundColor: 'white',
  boxShadow: 'inset 0 0 0 1px gray',
  color: 'black',
  '&:hover': {
    boxShadow: 'inset 0 0 0 1px gray',
  },
  '&:active': {
    backgroundColor: 'gray',
    boxShadow: 'inset 0 0 0 1px gray',
  },
  '&:focus': {
    boxShadow: 'inset 0 0 0 1px gray, 0 0 0 1px gray',
  },
  '&[data-radix-popover-trigger][data-state="open"]': {
    backgroundColor: 'gray',
    boxShadow: 'inset 0 0 0 1px gray',
  },
  borderRadius: '3px',
  height: '25px',
  paddingLeft: '10px',
  paddingRight: '10px',
  fontSize: '13px',
  lineHeight: '25px',
};

export const stitchesVariants = {
  variants: {
    color: {
      red: {
        color: 'red',
      },
      blue: {
        color: 'blue',
      },
    },
  },
};

export const interpolationVariants = {};
