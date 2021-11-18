import { createStitches } from '@stitches/react-v125';
import { config, darkThemeConfig } from './stitches-default-config-v125';

export const { css, createTheme, getCssText, globalCss, keyframes, styled } = createStitches(config);

export const darkTheme = createTheme('dark-theme', darkThemeConfig);
