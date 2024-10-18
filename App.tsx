/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';
import {Icon} from './src/components/Icon/Icon';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{padding: 24}}>
          <Text preset="headingLarge">oi</Text>
          <Text
            preset="headingLarge"
            style={{fontFamily: 'Satoshi-MediumItalic'}}>
            a
          </Text>
          <Button title="oi" />
          <Button title="lslslls" preset="outline" />
          <Icon name="eyeOff" color="redError" size={30} />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
