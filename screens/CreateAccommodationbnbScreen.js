import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  DatePicker,
  Icon,
  ScreenContainer,
  Switch,
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

const CreateAccommodationbnbScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [date, setDate] = React.useState(new Date());
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
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
                await Utils.openCamera({});
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
                marginRight: 150,
              }),
              dimensions.width
            )}
          >
            {'Name of the Place:'}
          </Text>
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
              placeholder={'Property Address'}
              placeholderTextColor={theme.colors.textPlaceholder}
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
              placeholder={'Flat/House/Unit/Space'}
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
                  fontSize: 10,
                  height: 50,
                  maxHeight: 25,
                  minWidth: 250,
                  paddingLeft: 16,
                  width: '100%',
                },
                dimensions.width
              )}
              placeholder={'"Entire place/ Private roon/ Shared Room'}
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
                marginBottom: 0,
                marginRight: 150,
              }),
              dimensions.width
            )}
          >
            {'Avg, Price Per Night:'}
          </Text>
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
              placeholder={'Price*'}
              placeholderTextColor={theme.colors.textPlaceholder}
            />
            <Touchable
              style={StyleSheet.applyWidth(
                { marginLeft: 25, minWidth: 0 },
                dimensions.width
              )}
            ></Touchable>
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
            {'Guests:'}
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
                placeholder={'No.'}
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
              {'Bedrooms:'}
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
                placeholder={'No.'}
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
              {'Bathrooms:'}
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
                placeholder={'No.'}
                placeholderTextColor={theme.colors.textPlaceholder}
                multiline={true}
              />
            </View>

            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
                  fontSize: 14,
                  marginBottom: 4,
                  marginRight: 200,
                }),
                dimensions.width
              )}
            >
              {'King Beds:'}
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
                placeholder={'No.'}
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
              {'Queen Beds: '}
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
                placeholder={'No.'}
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
              {'Double Beds:'}
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
                placeholder={'No.'}
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
              {'Single Beds: '}
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
                placeholder={'No.'}
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
              {'Tufon Beds: '}
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
                placeholder={'No.'}
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
              multiline={true}
              scrollEnabled={true}
            />
          </View>

          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
                fontSize: 14,
                marginBottom: 0,
                marginRight: 150,
              }),
              dimensions.width
            )}
          >
            {'Property Features:'}
          </Text>
          {/* Property Features */}
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
                  marginBottom: 10,
                  paddingLeft: 16,
                },
                dimensions.width
              )}
              placeholder={'Add Property Features'}
              placeholderTextColor={theme.colors.textPlaceholder}
              multiline={true}
              scrollEnabled={true}
            />
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
                  fontSize: 14,
                  marginBottom: 0,
                  marginRight: 150,
                }),
                dimensions.width
              )}
            >
              {'Check-in date:'}
            </Text>
            <DatePicker
              onDateChange={newDatePickerValue => {
                const date = newDatePickerValue;
                try {
                  setDatePickerValue(newDatePickerValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              date={datePickerValue}
              mode={'date'}
              label={'Date'}
              leftIconMode={'inset'}
              type={'solid'}
              autoDismissKeyboard={true}
            />
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
                  fontSize: 14,
                  marginBottom: 0,
                  marginRight: 150,
                  marginTop: 5,
                }),
                dimensions.width
              )}
            >
              {'Check-in date:'}
            </Text>

            <View
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ViewStyles(theme)['Time and date block 2'],
                  { paddingRight: 0 }
                ),
                dimensions.width
              )}
            ></View>
            <DatePicker
              onDateChange={newDatePickerValue => {
                const date = newDatePickerValue;
                try {
                  setDatePickerValue(newDatePickerValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              mode={'date'}
              label={'Date'}
              leftIconMode={'inset'}
              type={'solid'}
              autoDismissKeyboard={true}
              date={date}
            />
          </View>

          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
                fontSize: 14,
                marginBottom: 0,
                marginRight: 150,
              }),
              dimensions.width
            )}
          >
            {'Neighbourhood Guide:'}
          </Text>
          {/* Neighbourhood Guide */}
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
              placeholder={'Add neighbourhood Guide'}
              placeholderTextColor={theme.colors.textPlaceholder}
              multiline={true}
              scrollEnabled={true}
            />
          </View>

          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
                fontSize: 14,
                marginBottom: 0,
                marginRight: 0,
                textAlign: 'center',
                textDecorationLine: 'underline',
              }),
              dimensions.width
            )}
          >
            {'Property Host:'}
          </Text>
        </View>
        {/* Add Images */}
        <Touchable
          onPress={() => {
            const handler = async () => {
              try {
                await Utils.openCamera({});
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
              source={Images.ProfessIcon}
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
          {'Name: '}
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
          {'Host bio: '}
        </Text>
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
              marginBottom: 8,
              paddingLeft: 16,
            },
            dimensions.width
          )}
          placeholder={'Add Information'}
          placeholderTextColor={theme.colors.textPlaceholder}
          multiline={true}
          scrollEnabled={true}
        />
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
              fontSize: 14,
              marginBottom: 0,
              marginRight: 150,
            }),
            dimensions.width
          )}
        >
          {'Availability:'}
        </Text>
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
          placeholder={'Add Information'}
          placeholderTextColor={theme.colors.textPlaceholder}
          multiline={true}
          scrollEnabled={true}
        />
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
              fontSize: 14,
              marginBottom: 0,
              marginRight: 150,
            }),
            dimensions.width
          )}
        >
          {'House Rules:'}
        </Text>
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
          placeholder={'Add Information'}
          placeholderTextColor={theme.colors.textPlaceholder}
          multiline={true}
          scrollEnabled={true}
        />
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
              fontSize: 14,
              marginBottom: 0,
              marginRight: 150,
            }),
            dimensions.width
          )}
        >
          {'Health & Safety:'}
        </Text>
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
          placeholder={'Add Information'}
          placeholderTextColor={theme.colors.textPlaceholder}
          multiline={true}
          scrollEnabled={true}
        />
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
              fontSize: 14,
              marginBottom: 0,
              marginRight: 150,
            }),
            dimensions.width
          )}
        >
          {'Cancellation policy:'}
        </Text>
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
          placeholder={'Add Information'}
          placeholderTextColor={theme.colors.textPlaceholder}
          multiline={true}
          scrollEnabled={true}
        />
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

export default withTheme(CreateAccommodationbnbScreen);
