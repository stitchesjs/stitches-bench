import { createCss } from '@stitches/core';
import { config, darkThemeConfig } from './stitches-default-config';

export const { css, theme, getCssString, global, keyframes } = createCss(config);

export const darkTheme = theme('dark-theme', darkThemeConfig);
