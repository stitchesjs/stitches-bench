import { createStitches } from '@stitches/react-vc126';
import { config, darkThemeConfig } from './stitches-default-config-vc126';

export const { css, createTheme, getCssText, globalCss, keyframes, styled, theme } = createStitches(config);

export const darkTheme = createTheme('dark-theme', darkThemeConfig);
