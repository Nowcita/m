import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openCameraUtil from '../utils/openCamera';
import {
  Button,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  ImageBackground,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CreateUserCVScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;

  const [styledTextFieldValue, setStyledTextFieldValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={true}
      hasBottomSafeArea={true}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          {
            paddingBottom: 16,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16,
          },
          dimensions.width
        )}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
              fontSize: 14,
              marginBottom: 4,
            }),
            dimensions.width
          )}
        >
          {'Profile picture:'}
        </Text>
        {/* Add Images */}
        <Touchable
          onPress={() => {
            const handler = async () => {
              try {
                await openCameraUtil({});
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderRadius: 8,
                justifyContent: 'center',
                marginBottom: 16,
                marginTop: 16,
              },
              dimensions.width
            )}
          >
            <ImageBackground
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  height: 85,
                  justifyContent: 'flex-end',
                  width: 85,
                },
                dimensions.width
              )}
              resizeMode={'cover'}
              source={Images.UploadImages}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors.shopAppBlue,
                    borderRadius: 4,
                    bottom: -15,
                    paddingBottom: 5,
                    paddingLeft: 5,
                    paddingRight: 5,
                    paddingTop: 5,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  size={24}
                  color={theme.colors.custom_rgb255_255_255}
                  name={'Entypo/circle-with-plus'}
                />
              </View>
            </ImageBackground>
          </View>
        </Touchable>
        {/* Product Form */}
        <View>
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
                fontSize: 14,
                marginBottom: 4,
              }),
              dimensions.width
            )}
          >
            {'Name:'}
          </Text>
          {/* Name */}
          <View
            style={StyleSheet.applyWidth(
              { marginBottom: 10, marginTop: 1, minHeight: 13 },
              dimensions.width
            )}
          >
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors.strongInverse,
                  borderBottomWidth: 1,
                  borderColor: theme.colors.viewBG,
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors.strong,
                  height: 50,
                  paddingLeft: 16,
                },
                dimensions.width
              )}
              value={textInputValue}
              placeholder={'Name'}
              placeholderTextColor={theme.colors.textPlaceholder}
            />
          </View>

          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
                fontSize: 14,
                marginBottom: 4,
              }),
              dimensions.width
            )}
          >
            {'Title:'}
          </Text>
          {/* Category */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 8,
                marginTop: 2,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors.strongInverse,
                  borderBottomWidth: 1,
                  borderColor: theme.colors.viewBG,
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors.strong,
                  height: 25,
                  paddingLeft: 16,
                  width: '100%',
                },
                dimensions.width
              )}
              value={textInputValue}
              placeholder={'Sector'}
              placeholderTextColor={theme.colors.textPlaceholder}
            />
            <Touchable></Touchable>
          </View>

          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
                fontSize: 14,
                marginBottom: 4,
              }),
              dimensions.width
            )}
          >
            {'Profile:'}
          </Text>
          {/* Add description */}
          <View
            style={StyleSheet.applyWidth(
              { marginBottom: 10, marginTop: 10 },
              dimensions.width
            )}
            accessibilityRole={'text'}
          >
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors.strongInverse,
                  borderBottomWidth: 1,
                  borderColor: theme.colors.viewBG,
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors.strong,
                  height: 50,
                  paddingLeft: 16,
                },
                dimensions.width
              )}
              value={textInputValue}
              placeholder={'Add Description'}
              placeholderTextColor={theme.colors.textPlaceholder}
              multiline={true}
              scrollEnabled={true}
            />
          </View>
          {/* Sale Price & Discount */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              },
              dimensions.width
            )}
          ></View>
          {/* Wholesale & Dealer prices */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              },
              dimensions.width
            )}
          />
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
                fontSize: 14,
                marginBottom: 4,
              }),
              dimensions.width
            )}
          >
            {'Intro Video:'}
          </Text>
        </View>
        {/* Add Images */}
        <Touchable
          onPress={() => {
            const handler = async () => {
              try {
                await openCameraUtil({});
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderRadius: 8,
                justifyContent: 'center',
                marginBottom: 16,
                marginTop: 16,
              },
              dimensions.width
            )}
          >
            <ImageBackground
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  height: 85,
                  justifyContent: 'flex-end',
                  width: 85,
                },
                dimensions.width
              )}
              resizeMode={'cover'}
              source={Images.VideoIcon}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors.shopAppBlue,
                    borderRadius: 4,
                    bottom: -15,
                    paddingBottom: 5,
                    paddingLeft: 5,
                    paddingRight: 5,
                    paddingTop: 5,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  size={24}
                  color={theme.colors.custom_rgb255_255_255}
                  name={'Entypo/circle-with-plus'}
                />
              </View>
            </ImageBackground>
          </View>
        </Touchable>
        {/* Add Images */}
        <Touchable
          onPress={() => {
            const handler = async () => {
              try {
                await openCameraUtil({});
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
        >
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
                fontSize: 14,
                marginBottom: 4,
              }),
              dimensions.width
            )}
          >
            {'Contact:'}
          </Text>
          {/* Key INFO */}
          <View
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['BER Rating: 2'],
              dimensions.width
            )}
            accessibilityRole={'text'}
          >
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors.strongInverse,
                  borderBottomWidth: 1,
                  borderColor: theme.colors.viewBG,
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors.strong,
                  height: 25,
                  paddingLeft: 16,
                },
                dimensions.width
              )}
              placeholder={'Add'}
              placeholderTextColor={theme.colors.textPlaceholder}
              multiline={true}
            />
          </View>

          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
                fontSize: 14,
                marginBottom: 4,
              }),
              dimensions.width
            )}
          >
            {'Email'}
          </Text>
          {/* Key INFO */}
          <View
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['BER Rating: 2'],
              dimensions.width
            )}
            accessibilityRole={'text'}
          >
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors.strongInverse,
                  borderBottomWidth: 1,
                  borderColor: theme.colors.viewBG,
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors.strong,
                  height: 25,
                  paddingLeft: 16,
                },
                dimensions.width
              )}
              placeholder={'Add'}
              placeholderTextColor={theme.colors.textPlaceholder}
              multiline={true}
            />
          </View>

          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
                fontSize: 14,
                marginBottom: 4,
              }),
              dimensions.width
            )}
          >
            {'Located'}
          </Text>
          {/* Key INFO */}
          <View
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ViewStyles(theme)['BER Rating: 2'],
                { marginBottom: 20 }
              ),
              dimensions.width
            )}
            accessibilityRole={'text'}
          >
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors.strongInverse,
                  borderBottomWidth: 1,
                  borderColor: theme.colors.viewBG,
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors.strong,
                  height: 25,
                  paddingLeft: 16,
                },
                dimensions.width
              )}
              placeholder={'Add'}
              placeholderTextColor={theme.colors.textPlaceholder}
              multiline={true}
            />
          </View>
          {/* Key INFO */}
          <View
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ViewStyles(theme)['BER Rating: 2'],
                { marginBottom: 1, marginTop: 10 }
              ),
              dimensions.width
            )}
            accessibilityRole={'text'}
          >
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors.strongInverse,
                  borderBottomWidth: 1,
                  borderColor: theme.colors.viewBG,
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors.strong,
                  height: 25,
                  paddingLeft: 16,
                },
                dimensions.width
              )}
              placeholder={'Give Title'}
              placeholderTextColor={theme.colors.textPlaceholder}
              multiline={true}
            />
          </View>
          {/* Add description */}
          <View
            style={StyleSheet.applyWidth(
              { marginBottom: 10, marginTop: 10 },
              dimensions.width
            )}
            accessibilityRole={'text'}
          >
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors.strongInverse,
                  borderBottomWidth: 10,
                  borderColor: theme.colors.viewBG,
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors.strong,
                  height: 50,
                  paddingLeft: 16,
                },
                dimensions.width
              )}
              placeholder={'Add'}
              placeholderTextColor={theme.colors.textPlaceholder}
              multiline={true}
              scrollEnabled={true}
            />
          </View>
          {/* Key INFO */}
          <View
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ViewStyles(theme)['BER Rating: 2'],
                { marginTop: 1 }
              ),
              dimensions.width
            )}
            accessibilityRole={'text'}
          >
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors.strongInverse,
                  borderBottomWidth: 1,
                  borderColor: theme.colors.viewBG,
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors.strong,
                  height: 25,
                  paddingLeft: 16,
                },
                dimensions.width
              )}
              placeholder={'Give title'}
              placeholderTextColor={theme.colors.textPlaceholder}
              multiline={true}
            />
          </View>
          {/* Add description */}
          <View
            style={StyleSheet.applyWidth(
              { marginBottom: 10, marginTop: 10 },
              dimensions.width
            )}
            accessibilityRole={'text'}
          >
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors.strongInverse,
                  borderBottomWidth: 1,
                  borderColor: theme.colors.viewBG,
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors.strong,
                  height: 50,
                  paddingLeft: 16,
                },
                dimensions.width
              )}
              placeholder={'Add'}
              placeholderTextColor={theme.colors.textPlaceholder}
              multiline={true}
              scrollEnabled={true}
            />
          </View>
          {/* Key INFO */}
          <View
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ViewStyles(theme)['BER Rating: 2'],
                { marginBottom: 0, marginTop: 10 }
              ),
              dimensions.width
            )}
            accessibilityRole={'text'}
          >
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors.strongInverse,
                  borderBottomWidth: 1,
                  borderColor: theme.colors.viewBG,
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors.strong,
                  height: 25,
                  paddingLeft: 16,
                },
                dimensions.width
              )}
              placeholder={'Give title'}
              placeholderTextColor={theme.colors.textPlaceholder}
              multiline={true}
            />
          </View>
          {/* Add description */}
          <View
            style={StyleSheet.applyWidth(
              { marginBottom: 10, marginTop: 10 },
              dimensions.width
            )}
            accessibilityRole={'text'}
          >
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors.strongInverse,
                  borderBottomWidth: 1,
                  borderColor: theme.colors.viewBG,
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors.strong,
                  height: 50,
                  paddingLeft: 16,
                },
                dimensions.width
              )}
              placeholder={'Add'}
              placeholderTextColor={theme.colors.textPlaceholder}
              multiline={true}
              scrollEnabled={true}
            />
          </View>
          {/* Action Btn */}
          <Button
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors.shopAppBlue,
                borderRadius: 11,
                fontFamily: 'System',
                fontSize: 18,
                fontWeight: '600',
                height: 51,
                marginBottom: 20,
                marginTop: 20,
                textAlign: 'center',
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
            title={'save & publish'}
          />
        </Touchable>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(CreateUserCVScreen);
