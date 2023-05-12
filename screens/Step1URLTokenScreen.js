import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, ScreenContainer, WebView, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const Step1URLTokenScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <Text
        style={StyleSheet.applyWidth(
          GlobalStyles.TextStyles(theme)['header 2'],
          dimensions.width
        )}
      >
        {'URL view to your minted Token'}
      </Text>
      <WebView
        style={StyleSheet.applyWidth(
          GlobalStyles.WebViewStyles(theme)['Web View'],
          dimensions.width
        )}
        source={{ uri: 'https://reactnative.dev' }}
        javaScriptEnabled={true}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        cacheEnabled={true}
      />
      <View>
        <View>
          <Button
            onPress={() => {
              try {
                navigation.navigate('Step2LocatepinScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
                backgroundColor: theme.colors['App Green'],
                marginBottom: 5,
                marginLeft: 5,
                marginRight: 5,
                marginTop: 5,
              }),
              dimensions.width
            )}
            title={'Pin Your Token on the Market (Active)'}
          />
          <View>
            <Button
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
                  backgroundColor: theme.colors['Community_Dark_Red'],
                  marginBottom: 5,
                  marginLeft: 5,
                  marginRight: 5,
                  marginTop: 0,
                }),
                dimensions.width
              )}
              title={'Leave Token in my Wallet (in-Active)'}
            />
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(Step1URLTokenScreen);
