import {
  BackgroundColorProps,
  createRestyleComponent,
  SpacingProps,
  LayoutProps,
  BorderProps,
  SpacingShorthandProps,
} from '@shopify/restyle';
import {backgroundColor, spacing, border, layout} from '@shopify/restyle';
import {Theme} from '@theme';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme> &
  TouchableOpacityProps;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>([backgroundColor, spacing, border, layout], TouchableOpacity);
