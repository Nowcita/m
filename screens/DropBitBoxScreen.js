import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Divider,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const DropBitBoxScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            height: 48,
            marginTop: 12,
            paddingLeft: 16,
            paddingRight: 16,
          },
          dimensions.width
        )}
      >
        {/* Back Click */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              height: 48,
              justifyContent: 'center',
              width: 48,
            },
            dimensions.width
          )}
        >
          <Touchable
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Icon
              style={StyleSheet.applyWidth(
                {
                  backgroundColor:
                    theme.colors['Community_Modal_Opacity_Overlay'],
                  opacity: 1,
                },
                dimensions.width
              )}
              size={24}
              color={theme.colors['Custom Color_2']}
              name={'FontAwesome/arrow-left'}
            />
          </Touchable>
        </View>
        {/* Screen Heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Strong'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 20,
              marginLeft: 16,
            },
            dimensions.width
          )}
        >
          {'Drop Bit Box'}
        </Text>
      </View>

      <View
        style={StyleSheet.applyWidth(
          { flex: 1, paddingLeft: 20, paddingRight: 20, paddingTop: 20 },
          dimensions.width
        )}
      >
        {/* Title */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Community_Dark_UI'],
              fontFamily: 'Inter_500Medium',
              fontSize: 22,
            },
            dimensions.width
          )}
        >
          {'File explorer:'}
        </Text>
        {/* Tab box */}
        <Touchable>
          {/* Row Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                height: 60,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Left Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flex: 1, flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors.strong}
                size={24}
                name={'FontAwesome/folder'}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'System',
                    fontWeight: '600',
                    marginLeft: 12,
                  },
                  dimensions.width
                )}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Folder 1'}
              </Text>
            </View>
            {/* Right Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={StyleSheet.applyWidth({ height: 1 }, dimensions.width)}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>
        {/* Tab box */}
        <Touchable>
          {/* Row Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                height: 60,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Left Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flex: 1, flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors.strong}
                size={24}
                name={'MaterialIcons/folder'}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'System',
                    fontWeight: '600',
                    marginLeft: 12,
                  },
                  dimensions.width
                )}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Folder 2'}
              </Text>
            </View>
            {/* Right Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={StyleSheet.applyWidth({ height: 1 }, dimensions.width)}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>
        {/* Tab box */}
        <Touchable>
          {/* Row Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                height: 60,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Left Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flex: 1, flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors.strong}
                size={24}
                name={'MaterialIcons/folder'}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'System',
                    fontWeight: '600',
                    marginLeft: 12,
                  },
                  dimensions.width
                )}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Folder 3'}
              </Text>
            </View>
            {/* Right Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={StyleSheet.applyWidth({ height: 1 }, dimensions.width)}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>
        {/* Tab box */}
        <Touchable>
          {/* Row Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                height: 60,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Left Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flex: 1, flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors.strong}
                size={24}
                name={'MaterialIcons/folder'}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'System',
                    fontWeight: '600',
                    marginLeft: 12,
                  },
                  dimensions.width
                )}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Folder 4'}
              </Text>
            </View>
            {/* Right Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={StyleSheet.applyWidth({ height: 1 }, dimensions.width)}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>
        {/* Tab box add folder */}
        <Touchable>
          {/* Row Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                height: 60,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Left Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flex: 1, flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors.strong}
                size={24}
                name={'MaterialCommunityIcons/folder-plus'}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'System',
                    fontWeight: '600',
                    marginLeft: 12,
                  },
                  dimensions.width
                )}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Add Folder'}
              </Text>
            </View>
            {/* Right Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors.strong}
                size={24}
                name={'AntDesign/plus'}
              />
            </View>
          </View>
          <Divider
            style={StyleSheet.applyWidth({ height: 1 }, dimensions.width)}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>
        {/* Store on Chain */}
        <View
          style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
        >
          {/* heading */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_500Medium',
                fontSize: 18,
                lineHeight: 21,
                marginTop: 8,
              },
              dimensions.width
            )}
          >
            {'Store directly on-chain:'}
          </Text>

          <View
            style={StyleSheet.applyWidth(
              { flexDirection: 'row', justifyContent: 'space-between' },
              dimensions.width
            )}
          >
            {/* Badges */}
            <Touchable>
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', paddingTop: 16 },
                  dimensions.width
                )}
              >
                <Icon name={'Ionicons/md-document-attach-outline'} size={24} />
                <Text
                  style={StyleSheet.applyWidth(
                    { color: theme.colors.strong, marginTop: 10 },
                    dimensions.width
                  )}
                >
                  {'Upload\nFiles'}
                </Text>
              </View>
            </Touchable>
            {/* Emotes */}
            <Touchable>
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', paddingTop: 16 },
                  dimensions.width
                )}
              >
                <Icon size={24} name={'FontAwesome/file-audio-o'} />
                <Text
                  style={StyleSheet.applyWidth(
                    { color: theme.colors.strong, marginTop: 10 },
                    dimensions.width
                  )}
                >
                  {'Upload\nAudio'}
                </Text>
              </View>
            </Touchable>
            {/* Ad-Free */}
            <Touchable>
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', paddingTop: 16 },
                  dimensions.width
                )}
              >
                <Icon size={24} name={'Ionicons/images-outline'} />
                <Text
                  style={StyleSheet.applyWidth(
                    { color: theme.colors.strong, marginTop: 10 },
                    dimensions.width
                  )}
                >
                  {'Upload\nImages'}
                </Text>
              </View>
            </Touchable>
            {/* Chats */}
            <Touchable>
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', paddingTop: 16 },
                  dimensions.width
                )}
              >
                <Icon
                  size={24}
                  name={'MaterialCommunityIcons/video-plus-outline'}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    { color: theme.colors.strong, marginTop: 10 },
                    dimensions.width
                  )}
                >
                  {'Upload\nVideo'}
                </Text>
              </View>
            </Touchable>
            {/* Chats */}
            <Touchable>
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', paddingTop: 16 },
                  dimensions.width
                )}
              >
                <Icon size={24} name={'MaterialIcons/photo-camera'} />
                <Text
                  style={StyleSheet.applyWidth(
                    { color: theme.colors.strong, marginTop: 10 },
                    dimensions.width
                  )}
                >
                  {'Take \nPhoto'}
                </Text>
              </View>
            </Touchable>
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(DropBitBoxScreen);
