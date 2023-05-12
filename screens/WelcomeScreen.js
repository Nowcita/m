import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useIsOnline from '../utils/useIsOnline';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { ImageBackground, View, useWindowDimensions } from 'react-native';

const WelcomeScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;
  const isOnline = useIsOnline();

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth({ borderTopWidth: 0 }, dimensions.width)}
      scrollable={false}
      hasSafeArea={false}
    >
      <>
        {!isOnline ? null : (
          <ImageBackground
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ImageBackgroundStyles(theme)['Image Background'],
                {
                  alignItems: 'flex-start',
                  left: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  paddingLeft: 0,
                }
              ),
              dimensions.width
            )}
            resizeMode={'cover'}
            backgroundColor={'"rgba(0, 0, 0, 0)"'}
            source={{
              uri: 'https://apps-draftbit-com.s3.amazonaws.com/apps/e8vg4FqI/assets/X3A2IQc-3chyLStO6xcE8',
            }}
          />
        )}
      </>
      <Button
        onPress={() => {
          try {
            navigation.navigate('BottomTabNavigator', {
              screen: 'CreateFindScreen_cqvrEKO9',
            });
          } catch (err) {
            console.error(err);
          }
        }}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
            backgroundColor: 'rgb(89, 17, 164)',
            borderColor: 'rgb(61, 30, 155)',
            color: 'rgb(234, 234, 241)',
            fontFamily: 'System',
            fontSize: 32,
            fontStyle: 'italic',
            fontWeight: '700',
            marginLeft: 95,
            marginTop: 450,
            opacity: 1,
            position: 'absolute',
            textAlign: 'right',
          }),
          dimensions.width
        )}
        title={'HandCash'}
      />
    </ScreenContainer>
  );
};

export default withTheme(WelcomeScreen);
