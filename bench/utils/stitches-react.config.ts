import { createCss } from '@stitches/react';
import { config, darkThemeConfig } from './stitches-default-config';

export const { css, styled, theme, getCssString, global, keyframes } = createCss(config);

export const darkTheme = theme('dark-theme', darkThemeConfig);
