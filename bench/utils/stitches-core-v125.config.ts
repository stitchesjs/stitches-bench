import { createStitches } from '@stitches/core-v125';
import { config, darkThemeConfig } from './stitches-default-config-v125';

export const { css, createTheme, getCssText, globalCss, keyframes } = createStitches(config);

export const darkTheme = createTheme('dark-theme', darkThemeConfig);
