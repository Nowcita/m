import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openCameraUtil from '../utils/openCamera';
import {
  Button,
  DatePicker,
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

const CreateBuySellDD4MotorScreen = props => {
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
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
                fontSize: 14,
                marginBottom: 4,
                marginRight: 250,
              }),
              dimensions.width
            )}
          >
            {'Name:'}
          </Text>
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
              placeholder={'Product Name*'}
              placeholderTextColor={theme.colors.textPlaceholder}
            />
          </View>

          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
                fontSize: 14,
                marginBottom: 4,
                marginRight: 250,
              }),
              dimensions.width
            )}
          >
            {'Product type:'}
          </Text>
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

          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
                fontSize: 14,
                marginBottom: 4,
                marginRight: 250,
              }),
              dimensions.width
            )}
          >
            {'Asking price:'}
          </Text>
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
                    minWidth: 150,
                    paddingLeft: 16,
                  },
                  dimensions.width
                )}
                value={textInputValue}
                placeholder={'Asking Price*'}
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
                    maxHeight: 25,
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
                      maxHeight: 25,
                      paddingLeft: 16,
                      width: '100%',
                    },
                    dimensions.width
                  )}
                  value={textInputValue}
                  placeholder={'Unit*'}
                  placeholderTextColor={theme.colors.textPlaceholder}
                />
                <Touchable
                  style={StyleSheet.applyWidth(
                    { marginLeft: 25, minWidth: 0 },
                    dimensions.width
                  )}
                >
                  <Icon
                    style={StyleSheet.applyWidth(
                      { marginLeft: -48 },
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

          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
                fontSize: 14,
                marginBottom: 4,
                marginRight: 250,
              }),
              dimensions.width
            )}
          >
            {'Seller type:'}
          </Text>
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
          {/* Category */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderStyle: 'solid',
                bottom: 0,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
                marginTop: 0,
                maxHeight: 25,
                maxWidth: 250,
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
                  maxHeight: 25,
                  minWidth: 250,
                  paddingLeft: 16,
                  width: '100%',
                },
                dimensions.width
              )}
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

          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
                fontSize: 14,
                marginBottom: 4,
                marginRight: 250,
              }),
              dimensions.width
            )}
          >
            {'Model:'}
          </Text>

          <View>
            {/* Key INFO */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'column',
                  marginBottom: 10,
                  marginTop: 0,
                  maxHeight: 25,
                  maxWidth: 150,
                  minWidth: 50,
                },
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
              />
            </View>

            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
                  fontSize: 14,
                  marginBottom: 4,
                  marginRight: 250,
                }),
                dimensions.width
              )}
            >
              {'Year:'}
            </Text>
            {/* Key INFO */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'column',
                  marginBottom: 10,
                  marginTop: 0,
                  maxHeight: 25,
                  maxWidth: 150,
                  minWidth: 50,
                },
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
              />
            </View>

            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
                  fontSize: 14,
                  marginBottom: 4,
                  marginRight: 220,
                }),
                dimensions.width
              )}
            >
              {'Transmission:'}
            </Text>
            {/* Key INFO */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'column',
                  marginBottom: 10,
                  marginTop: 0,
                  maxHeight: 25,
                  maxWidth: 150,
                  minWidth: 50,
                },
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
              />
            </View>

            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
                  fontSize: 14,
                  marginBottom: 4,
                  marginRight: 250,
                }),
                dimensions.width
              )}
            >
              {'Color:'}
            </Text>
            {/* Key INFO */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'column',
                  marginBottom: 10,
                  marginTop: 0,
                  maxHeight: 25,
                  maxWidth: 150,
                  minWidth: 50,
                },
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
              />
            </View>

            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
                  fontSize: 14,
                  marginBottom: 4,
                  marginRight: 250,
                }),
                dimensions.width
              )}
            >
              {'Body:'}
            </Text>
            {/* Key INFO */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'column',
                  marginBottom: 10,
                  marginTop: 0,
                  maxHeight: 25,
                  maxWidth: 150,
                  minWidth: 50,
                },
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
              />
            </View>

            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
                  fontSize: 14,
                  marginBottom: 4,
                  marginRight: 250,
                }),
                dimensions.width
              )}
            >
              {'Type:'}
            </Text>
            {/* Key INFO */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'column',
                  marginBottom: 10,
                  marginTop: 0,
                  maxHeight: 25,
                  maxWidth: 150,
                  minWidth: 50,
                },
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
              />
            </View>

            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
                  fontSize: 14,
                  marginBottom: 4,
                  marginRight: 250,
                }),
                dimensions.width
              )}
            >
              {'Mileage:'}
            </Text>
            {/* Key INFO */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'column',
                  marginBottom: 10,
                  marginTop: 0,
                  maxHeight: 25,
                  maxWidth: 150,
                  minWidth: 50,
                },
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
              />
            </View>

            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
                  fontSize: 14,
                  marginBottom: 4,
                  marginRight: 250,
                }),
                dimensions.width
              )}
            >
              {'Litre:'}
            </Text>
            {/* Key INFO */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'column',
                  marginBottom: 10,
                  marginTop: 0,
                  maxHeight: 25,
                  maxWidth: 150,
                  minWidth: 50,
                },
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
              />
            </View>

            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
                  fontSize: 14,
                  marginBottom: 4,
                  marginRight: 250,
                }),
                dimensions.width
              )}
            >
              {'Doors:'}
            </Text>
            {/* Key INFO */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'column',
                  marginBottom: 10,
                  marginTop: 0,
                  maxHeight: 25,
                  maxWidth: 150,
                  minWidth: 50,
                },
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
              />
            </View>

            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
                  fontSize: 14,
                  marginBottom: 4,
                  marginRight: 220,
                }),
                dimensions.width
              )}
            >
              {'Description: '}
            </Text>
          </View>
          <View />
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
              placeholder={'Add Description'}
              placeholderTextColor={theme.colors.textPlaceholder}
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

export default withTheme(CreateBuySellDD4MotorScreen);
