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

const CreateWorkprofessionalScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

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
          {/* Name */}
          <View
            style={StyleSheet.applyWidth(
              { marginBottom: 10, marginTop: 10 },
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
              placeholder={'Name/Title:'}
              placeholderTextColor={theme.colors.textPlaceholder}
            />
          </View>
          {/* Category */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
                marginTop: 10,
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
                  height: 50,
                  paddingLeft: 16,
                  width: '100%',
                },
                dimensions.width
              )}
              value={textInputValue}
              placeholder={'Product Category*'}
              placeholderTextColor={theme.colors.textPlaceholder}
            />
            <Touchable>
              <Icon
                style={StyleSheet.applyWidth(
                  { marginLeft: -35 },
                  dimensions.width
                )}
                size={24}
                name={'Entypo/chevron-down'}
                color={theme.colors.textPlaceholder}
              />
            </Touchable>
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
              value={textInputValue}
              placeholder={'Add Description'}
              placeholderTextColor={theme.colors.textPlaceholder}
              multiline={true}
            />
          </View>
          {/* Stock & Unit */}
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
          >
            {/* Sale Price */}
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, marginBottom: 10, marginTop: 10 },
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
                placeholder={'Salary:'}
                placeholderTextColor={theme.colors.textPlaceholder}
              />
              {/* Unit */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flex: 1,
                    flexDirection: 'row',
                    marginBottom: 10,
                    marginLeft: 16,
                    marginTop: 10,
                    width: '50%',
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
                      height: 50,
                      paddingLeft: 16,
                      width: '100%',
                    },
                    dimensions.width
                  )}
                  value={textInputValue}
                  placeholder={'Unit*'}
                  placeholderTextColor={theme.colors.textPlaceholder}
                />
                <Touchable>
                  <Icon
                    style={StyleSheet.applyWidth(
                      { marginLeft: -35 },
                      dimensions.width
                    )}
                    size={24}
                    name={'Entypo/chevron-down'}
                    color={theme.colors.textPlaceholder}
                  />
                </Touchable>
              </View>
            </View>
          </View>
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
          ></View>
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
              placeholder={'Key information'}
              placeholderTextColor={theme.colors.textPlaceholder}
              multiline={true}
            />
          </View>
        </View>
        {/* Action Btn */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('Step1URLTokenScreen');
            } catch (err) {
              console.error(err);
            }
          }}
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
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(CreateWorkprofessionalScreen);
