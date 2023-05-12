import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, ScreenContainer, WebView, withTheme } from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const BlankScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <View
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['Token business card 3'],
          dimensions.width
        )}
      >
        <Image
          style={StyleSheet.applyWidth(
            { borderRadius: 4, height: 80, width: 80 },
            dimensions.width
          )}
          resizeMode={'cover'}
          source={{
            uri: 'https://apps-draftbit-com.s3.amazonaws.com/apps/QIdTF7fF/assets/vhoBEsR3H2JeO6mN8Nvwx',
          }}
        />
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, marginLeft: 15 },
            dimensions.width
          )}
        >
          {/* Name */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_500Medium',
                fontSize: 16,
              },
              dimensions.width
            )}
          >
            {'Token "variable name"'}
          </Text>
          {/* Name */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_500Medium',
                fontSize: 16,
              },
              dimensions.width
            )}
          >
            {'Price: variable + Currency'}
          </Text>
          {/* Address */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_300Light',
                fontSize: 12,
                marginTop: 5,
                opacity: 0.7,
              },
              dimensions.width
            )}
          >
            {'Jl. Prapatan No 26, Labuan, Malang'}
          </Text>
          {/* Distance */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flexDirection: 'row', marginTop: 12 },
              dimensions.width
            )}
          >
            <Icon
              size={20}
              color={theme.colors['Primary']}
              name={'MaterialIcons/account-circle'}
            />
            <Icon
              style={StyleSheet.applyWidth({ left: 35 }, dimensions.width)}
              size={20}
              color={theme.colors['Primary']}
              name={'MaterialCommunityIcons/comment-text-multiple'}
            />
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Primary'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 13,
                  marginLeft: 35,
                },
                dimensions.width
              )}
            >
              {'33'}
            </Text>
            <Icon
              style={StyleSheet.applyWidth({ left: 15 }, dimensions.width)}
              size={20}
              color={theme.colors['Primary']}
              name={'Ionicons/heart'}
            />
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Primary'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 13,
                  marginLeft: 15,
                },
                dimensions.width
              )}
            >
              {'112'}
            </Text>
            <Icon
              style={StyleSheet.applyWidth({ left: 15 }, dimensions.width)}
              size={20}
              color={theme.colors['Primary']}
              name={'Entypo/attachment'}
            />
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Primary'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 13,
                  marginLeft: 15,
                },
                dimensions.width
              )}
            >
              {'VIEW'}
            </Text>
          </View>
          {/* Distance */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flexDirection: 'row', marginTop: 12 },
              dimensions.width
            )}
          />
        </View>
      </View>

      <View style={StyleSheet.applyWidth({ height: '65%' }, dimensions.width)}>
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
      </View>
    </ScreenContainer>
  );
};

export default withTheme(BlankScreen);
