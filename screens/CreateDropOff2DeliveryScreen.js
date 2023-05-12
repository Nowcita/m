import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { MapView } from '@draftbit/maps';
import {
  Button,
  CircleImage,
  DatePicker,
  Icon,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, TextInput, View, useWindowDimensions } from 'react-native';

const CreateDropOff2DeliveryScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('tab1');
  const [sliderValue, setSliderValue] = React.useState(0);
  const [sliderValue2, setSliderValue2] = React.useState(0);
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

  const mapViewJIReG3QhRef = React.useRef();

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth({ alignItems: 'center' }, dimensions.width)}
      hasSafeArea={true}
      scrollable={true}
      hasBottomSafeArea={false}
    >
      {/* Top Navigation Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 8,
            paddingBottom: 8,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 8,
            width: '100%',
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { height: 48, justifyContent: 'center', width: 48 },
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
            <Surface
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderRadius: 24,
                  height: 48,
                  justifyContent: 'center',
                  minHeight: 48,
                  width: 48,
                },
                dimensions.width
              )}
            >
              <Icon name={'Entypo/chevron-left'} size={24} />
            </Surface>
          </Touchable>
        </View>
      </View>
      <MapView
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.MapViewStyles(theme)['Map View'], {
            alignContent: 'flex-start',
            bottom: 0,
            flexWrap: 'nowrap',
            minHeight: 300,
          }),
          dimensions.width
        )}
        latitude={37.40241}
        longitude={-122.12125}
        zoom={8}
        zoomEnabled={true}
        rotateEnabled={true}
        scrollEnabled={true}
        loadingEnabled={true}
        showsPointsOfInterest={true}
        apiKey={'AIzaSyBzktToWosjNgrrUawZnbslB9NSXSXCkwo'}
        ref={mapViewJIReG3QhRef}
      />
      {/* Form */}
      <View
        style={StyleSheet.applyWidth(
          {
            marginLeft: 16,
            marginRight: 16,
            paddingBottom: 16,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16,
            width: '100%',
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { paddingLeft: 16, paddingRight: 16 },
            dimensions.width
          )}
        >
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.textPlaceholder,
                fontFamily: 'Inter_500Medium',
                fontSize: 14,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'From'}
          </Text>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors.divider,
                borderRadius: 12,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                paddingLeft: 16,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <Icon
              name={'Feather/map-pin'}
              color={theme.colors.textPlaceholder}
              size={16}
            />
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue2(newTextInputValue);
                  mapViewJIReG3QhRef.current.animateToLocation({
                    latitude: newTextInputValue,
                    longitude: newTextInputValue,
                    zoom: null,
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors.divider,
                  borderRadius: 15,
                  height: 45,
                  paddingBottom: 8,
                  paddingLeft: 10,
                  paddingRight: 8,
                  paddingTop: 8,
                  width: '100%',
                },
                dimensions.width
              )}
              value={textInputValue2}
              placeholder={'Source'}
              placeholderTextColor={theme.colors.textPlaceholder}
            />
          </View>
        </View>

        <View
          style={StyleSheet.applyWidth(
            { marginTop: 16, paddingLeft: 16, paddingRight: 16 },
            dimensions.width
          )}
        >
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.textPlaceholder,
                fontFamily: 'Inter_500Medium',
                fontSize: 14,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'To'}
          </Text>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors.divider,
                borderRadius: 12,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                paddingLeft: 16,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <Icon
              name={'Feather/map-pin'}
              color={theme.colors.textPlaceholder}
              size={16}
            />
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue2(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors.divider,
                  borderRadius: 15,
                  height: 45,
                  paddingBottom: 8,
                  paddingLeft: 10,
                  paddingRight: 8,
                  paddingTop: 8,
                  width: '100%',
                },
                dimensions.width
              )}
              value={textInputValue2}
              placeholder={'Destination'}
              placeholderTextColor={theme.colors.textPlaceholder}
            />
          </View>
          {/* Package View */}
          <View
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)[
                'Package/ Shatter or strong opt 2'
              ],
              dimensions.width
            )}
          >
            {/* heading */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_400Regular',
                  opacity: 0.6,
                },
                dimensions.width
              )}
            >
              {'Package'}
            </Text>

            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 16,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              <Touchable
                style={StyleSheet.applyWidth(
                  { width: '45%' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors.lightInverse,
                      borderBottomWidth: 1,
                      borderColor: theme.colors.appGreen,
                      borderLeftWidth: 1,
                      borderRadius: 15,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      height: 55,
                      justifyContent: 'center',
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.appGreen,
                        fontFamily: 'Inter_500Medium',
                        textTransform: 'capitalize',
                      },
                      dimensions.width
                    )}
                  >
                    {'shatter resistant'}
                  </Text>
                </View>
              </Touchable>

              <Touchable
                style={StyleSheet.applyWidth(
                  { width: '45%' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors.bGGray,
                      borderRadius: 15,
                      height: 55,
                      justifyContent: 'center',
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.textPlaceholder,
                        fontFamily: 'Inter_500Medium',
                        textTransform: 'capitalize',
                      },
                      dimensions.width
                    )}
                  >
                    {'shatter resistant'}
                  </Text>
                </View>
              </Touchable>

              <Touchable
                style={StyleSheet.applyWidth(
                  { width: '45%' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors.lightInverse,
                      borderBottomWidth: 1,
                      borderColor: theme.colors.appGreen,
                      borderLeftWidth: 1,
                      borderRadius: 15,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      height: 55,
                      justifyContent: 'center',
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.appGreen,
                        fontFamily: 'Inter_500Medium',
                        textTransform: 'capitalize',
                      },
                      dimensions.width
                    )}
                  >
                    {'easily broken'}
                  </Text>
                </View>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { width: '45%' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors.bGGray,
                      borderRadius: 15,
                      height: 55,
                      justifyContent: 'center',
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.textPlaceholder,
                        fontFamily: 'Inter_500Medium',
                        textTransform: 'capitalize',
                      },
                      dimensions.width
                    )}
                  >
                    {'easily broken'}
                  </Text>
                </View>
              </Touchable>
            </View>
            {/* Modes */}
            <View
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Modes; 3 opts'],
                dimensions.width
              )}
            >
              {/* Mode 1 Active */}
              <Touchable
                style={StyleSheet.applyWidth(
                  { width: '30%' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors.greenBG,
                      borderRadius: 12,
                      height: 140,
                      justifyContent: 'center',
                      marginTop: 16,
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    style={StyleSheet.applyWidth(
                      { opacity: 0.5 },
                      dimensions.width
                    )}
                    size={40}
                    name={'MaterialCommunityIcons/package-variant'}
                    color={theme.colors.appGreen}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.appGreen,
                        fontFamily: 'Inter_400Regular',
                        fontSize: 12,
                        marginTop: 16,
                        opacity: 0.7,
                        textAlign: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    {'< 1 Kg'}
                  </Text>
                </View>
              </Touchable>
              {/* Mode 1 Inactive */}
              <Touchable
                onPress={() => {
                  try {
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { width: '30%' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors.bGGray,
                      borderRadius: 12,
                      height: 140,
                      justifyContent: 'center',
                      marginTop: 16,
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    style={StyleSheet.applyWidth(
                      { opacity: 0.5 },
                      dimensions.width
                    )}
                    size={40}
                    name={'MaterialCommunityIcons/package-variant'}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Inter_400Regular',
                        fontSize: 12,
                        marginTop: 16,
                        opacity: 0.7,
                        textAlign: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    {'< 1 Kg'}
                  </Text>
                </View>
              </Touchable>
              {/* Mode 2 Active */}
              <Touchable
                style={StyleSheet.applyWidth(
                  { width: '30%' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors.greenBG,
                      borderRadius: 12,
                      height: 140,
                      justifyContent: 'center',
                      marginTop: 16,
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    style={StyleSheet.applyWidth(
                      { opacity: 0.5 },
                      dimensions.width
                    )}
                    size={40}
                    name={'MaterialCommunityIcons/package-variant'}
                    color={theme.colors.appGreen}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.appGreen,
                        fontFamily: 'Inter_400Regular',
                        fontSize: 12,
                        marginTop: 16,
                        opacity: 0.7,
                        textAlign: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    {'3 Kg - 10 Kg'}
                  </Text>
                </View>
              </Touchable>
              {/* Mode 2 Inactive */}
              <Touchable
                onPress={() => {
                  try {
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { width: '30%' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors.bGGray,
                      borderRadius: 12,
                      height: 140,
                      justifyContent: 'center',
                      marginTop: 16,
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    style={StyleSheet.applyWidth(
                      { opacity: 0.5 },
                      dimensions.width
                    )}
                    size={40}
                    name={'MaterialCommunityIcons/package-variant'}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Inter_400Regular',
                        fontSize: 12,
                        marginTop: 16,
                        opacity: 0.7,
                        textAlign: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    {'3 Kg - 10 Kg'}
                  </Text>
                </View>
              </Touchable>
              {/* Mode 3 Active */}
              <Touchable
                style={StyleSheet.applyWidth(
                  { width: '30%' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors.greenBG,
                      borderRadius: 12,
                      height: 140,
                      justifyContent: 'center',
                      marginTop: 16,
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    style={StyleSheet.applyWidth(
                      { opacity: 0.5 },
                      dimensions.width
                    )}
                    name={'MaterialCommunityIcons/package-variant'}
                    size={40}
                    color={theme.colors.appGreen}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.appGreen,
                        fontFamily: 'Inter_400Regular',
                        fontSize: 12,
                        marginTop: 16,
                        opacity: 0.7,
                        textAlign: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    {'10 Kg - 25 Kg'}
                  </Text>
                </View>
              </Touchable>
              {/* Mode 3 Inactive */}
              <Touchable
                onPress={() => {
                  try {
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { width: '30%' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors.bGGray,
                      borderRadius: 12,
                      height: 140,
                      justifyContent: 'center',
                      marginTop: 16,
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    style={StyleSheet.applyWidth(
                      { opacity: 0.5 },
                      dimensions.width
                    )}
                    size={40}
                    name={'MaterialCommunityIcons/package-variant'}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Inter_400Regular',
                        fontSize: 12,
                        marginTop: 16,
                        opacity: 0.7,
                        textAlign: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    {'10 Kg - 25 Kg'}
                  </Text>
                </View>
              </Touchable>
            </View>
          </View>
        </View>
        {/* Size View */}
        <View
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['Package size opt'],
            dimensions.width
          )}
        >
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_400Regular',
                opacity: 0.6,
              },
              dimensions.width
            )}
          >
            {'Package Size:'}
          </Text>
        </View>

        <View
          style={StyleSheet.applyWidth(
            { marginTop: 16, paddingLeft: 16, paddingRight: 16 },
            dimensions.width
          )}
        >
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.textPlaceholder,
                fontFamily: 'Inter_500Medium',
                fontSize: 14,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'Cash'}
          </Text>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors.divider,
                borderRadius: 12,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                paddingLeft: 16,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors.textPlaceholder}
              size={16}
              name={'MaterialIcons/attach-money'}
            />
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue2(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors.divider,
                  borderRadius: 15,
                  height: 45,
                  paddingBottom: 8,
                  paddingLeft: 10,
                  paddingRight: 8,
                  paddingTop: 8,
                  width: '100%',
                },
                dimensions.width
              )}
              value={textInputValue2}
              placeholder={'Enter a value...'}
              placeholderTextColor={theme.colors.textPlaceholder}
            />
          </View>
          {/* Add description */}
          <View
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['text box entry'],
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
          {/* Modes */}
          <View
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Modes; 3 opts 3'],
              dimensions.width
            )}
          >
            {/* Mode 1 Active */}
            <Touchable
              style={StyleSheet.applyWidth({ width: '30%' }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors.greenBG,
                    borderRadius: 12,
                    height: 140,
                    justifyContent: 'center',
                    marginTop: 16,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                <Icon
                  style={StyleSheet.applyWidth(
                    { opacity: 0.5 },
                    dimensions.width
                  )}
                  size={40}
                  name={'MaterialCommunityIcons/package-variant'}
                  color={theme.colors.appGreen}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.appGreen,
                      fontFamily: 'Inter_400Regular',
                      fontSize: 12,
                      marginTop: 16,
                      opacity: 0.7,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                >
                  {'< 1 Kg'}
                </Text>
              </View>
            </Touchable>
            {/* Mode 1 Inactive */}
            <Touchable
              onPress={() => {
                try {
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth({ width: '30%' }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors.bGGray,
                    borderRadius: 12,
                    height: 140,
                    justifyContent: 'center',
                    marginTop: 16,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                <Icon
                  style={StyleSheet.applyWidth(
                    { opacity: 0.5 },
                    dimensions.width
                  )}
                  size={40}
                  name={'MaterialCommunityIcons/package-variant'}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      fontSize: 12,
                      marginTop: 16,
                      opacity: 0.7,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                >
                  {'< 1 Kg'}
                </Text>
              </View>
            </Touchable>
            {/* Mode 2 Active */}
            <Touchable
              style={StyleSheet.applyWidth({ width: '30%' }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors.greenBG,
                    borderRadius: 12,
                    height: 140,
                    justifyContent: 'center',
                    marginTop: 16,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                <Icon
                  style={StyleSheet.applyWidth(
                    { opacity: 0.5 },
                    dimensions.width
                  )}
                  size={40}
                  name={'MaterialCommunityIcons/package-variant'}
                  color={theme.colors.appGreen}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.appGreen,
                      fontFamily: 'Inter_400Regular',
                      fontSize: 12,
                      marginTop: 16,
                      opacity: 0.7,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                >
                  {'3 Kg - 10 Kg'}
                </Text>
              </View>
            </Touchable>
            {/* Mode 2 Inactive */}
            <Touchable
              onPress={() => {
                try {
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth({ width: '30%' }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors.bGGray,
                    borderRadius: 12,
                    height: 140,
                    justifyContent: 'center',
                    marginTop: 16,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                <Icon
                  style={StyleSheet.applyWidth(
                    { opacity: 0.5 },
                    dimensions.width
                  )}
                  size={40}
                  name={'MaterialCommunityIcons/package-variant'}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      fontSize: 12,
                      marginTop: 16,
                      opacity: 0.7,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                >
                  {'3 Kg - 10 Kg'}
                </Text>
              </View>
            </Touchable>
            {/* Mode 3 Active */}
            <Touchable
              style={StyleSheet.applyWidth({ width: '30%' }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors.greenBG,
                    borderRadius: 12,
                    height: 140,
                    justifyContent: 'center',
                    marginTop: 16,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                <Icon
                  style={StyleSheet.applyWidth(
                    { opacity: 0.5 },
                    dimensions.width
                  )}
                  name={'MaterialCommunityIcons/package-variant'}
                  size={40}
                  color={theme.colors.appGreen}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.appGreen,
                      fontFamily: 'Inter_400Regular',
                      fontSize: 12,
                      marginTop: 16,
                      opacity: 0.7,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                >
                  {'10 Kg - 15 Kg'}
                </Text>
              </View>
            </Touchable>
            {/* Mode 3 Inactive */}
            <Touchable
              onPress={() => {
                try {
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth({ width: '30%' }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors.bGGray,
                    borderRadius: 12,
                    height: 140,
                    justifyContent: 'center',
                    marginTop: 16,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                <Icon
                  style={StyleSheet.applyWidth(
                    { opacity: 0.5 },
                    dimensions.width
                  )}
                  size={40}
                  name={'MaterialCommunityIcons/package-variant'}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      fontSize: 12,
                      marginTop: 16,
                      opacity: 0.7,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                >
                  {'10 Kg - 15 Kg'}
                </Text>
              </View>
            </Touchable>
          </View>
          {/* Size View */}
          <View
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Package size opt 3'],
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_400Regular',
                  opacity: 0.6,
                },
                dimensions.width
              )}
            >
              {'Package Size:'}
            </Text>
            {/* Modes */}
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
              {/* Mode 1 Active */}
              <Touchable
                style={StyleSheet.applyWidth(
                  { width: '30%' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors.greenBG,
                      borderRadius: 12,
                      height: 140,
                      justifyContent: 'center',
                      marginTop: 16,
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    style={StyleSheet.applyWidth(
                      { opacity: 0.5 },
                      dimensions.width
                    )}
                    size={40}
                    name={'MaterialCommunityIcons/package-variant'}
                    color={theme.colors.appGreen}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.appGreen,
                        fontFamily: 'Inter_400Regular',
                        fontSize: 12,
                        marginTop: 16,
                        opacity: 0.7,
                        textAlign: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    {'< 1 Kg'}
                  </Text>
                </View>
              </Touchable>
              {/* Mode 1 Inactive */}
              <Touchable
                onPress={() => {
                  try {
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { width: '30%' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors.bGGray,
                      borderRadius: 12,
                      height: 140,
                      justifyContent: 'center',
                      marginTop: 16,
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    style={StyleSheet.applyWidth(
                      { opacity: 0.5 },
                      dimensions.width
                    )}
                    size={40}
                    name={'MaterialCommunityIcons/package-variant'}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Inter_400Regular',
                        fontSize: 12,
                        marginTop: 16,
                        opacity: 0.7,
                        textAlign: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    {'< 1 Kg'}
                  </Text>
                </View>
              </Touchable>
              {/* Mode 2 Active */}
              <Touchable
                style={StyleSheet.applyWidth(
                  { width: '30%' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors.greenBG,
                      borderRadius: 12,
                      height: 140,
                      justifyContent: 'center',
                      marginTop: 16,
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    style={StyleSheet.applyWidth(
                      { opacity: 0.5 },
                      dimensions.width
                    )}
                    size={40}
                    name={'MaterialCommunityIcons/package-variant'}
                    color={theme.colors.appGreen}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.appGreen,
                        fontFamily: 'Inter_400Regular',
                        fontSize: 12,
                        marginTop: 16,
                        opacity: 0.7,
                        textAlign: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    {'3 Kg - 10 Kg'}
                  </Text>
                </View>
              </Touchable>
              {/* Mode 2 Inactive */}
              <Touchable
                onPress={() => {
                  try {
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { width: '30%' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors.bGGray,
                      borderRadius: 12,
                      height: 140,
                      justifyContent: 'center',
                      marginTop: 16,
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    style={StyleSheet.applyWidth(
                      { opacity: 0.5 },
                      dimensions.width
                    )}
                    size={40}
                    name={'MaterialCommunityIcons/package-variant'}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Inter_400Regular',
                        fontSize: 12,
                        marginTop: 16,
                        opacity: 0.7,
                        textAlign: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    {'3 Kg - 10 Kg'}
                  </Text>
                </View>
              </Touchable>
              {/* Mode 3 Active */}
              <Touchable
                style={StyleSheet.applyWidth(
                  { width: '30%' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors.greenBG,
                      borderRadius: 12,
                      height: 140,
                      justifyContent: 'center',
                      marginTop: 16,
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    style={StyleSheet.applyWidth(
                      { opacity: 0.5 },
                      dimensions.width
                    )}
                    name={'MaterialCommunityIcons/package-variant'}
                    size={40}
                    color={theme.colors.appGreen}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.appGreen,
                        fontFamily: 'Inter_400Regular',
                        fontSize: 12,
                        marginTop: 16,
                        opacity: 0.7,
                        textAlign: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    {'10 Kg - 15 Kg'}
                  </Text>
                </View>
              </Touchable>
              {/* Mode 3 Inactive */}
              <Touchable
                onPress={() => {
                  try {
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { width: '30%' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors.bGGray,
                      borderRadius: 12,
                      height: 140,
                      justifyContent: 'center',
                      marginTop: 16,
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    style={StyleSheet.applyWidth(
                      { opacity: 0.5 },
                      dimensions.width
                    )}
                    size={40}
                    name={'MaterialCommunityIcons/package-variant'}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Inter_400Regular',
                        fontSize: 12,
                        marginTop: 16,
                        opacity: 0.7,
                        textAlign: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    {'10 Kg - 15 Kg'}
                  </Text>
                </View>
              </Touchable>
            </View>
          </View>
          {/* Package View */}
          <View
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)[
                'Package/ Shatter or strong opt 3'
              ],
              dimensions.width
            )}
          >
            {/* heading */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_400Regular',
                  opacity: 0.6,
                },
                dimensions.width
              )}
            >
              {'Package'}
            </Text>

            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 16,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              <Touchable
                style={StyleSheet.applyWidth(
                  { width: '45%' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors.lightInverse,
                      borderBottomWidth: 1,
                      borderColor: theme.colors.appGreen,
                      borderLeftWidth: 1,
                      borderRadius: 15,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      height: 55,
                      justifyContent: 'center',
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.appGreen,
                        fontFamily: 'Inter_500Medium',
                        textTransform: 'capitalize',
                      },
                      dimensions.width
                    )}
                  >
                    {'shatter resistant'}
                  </Text>
                </View>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { width: '45%' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors.bGGray,
                      borderRadius: 15,
                      height: 55,
                      justifyContent: 'center',
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.textPlaceholder,
                        fontFamily: 'Inter_500Medium',
                        textTransform: 'capitalize',
                      },
                      dimensions.width
                    )}
                  >
                    {'shatter resistant'}
                  </Text>
                </View>
              </Touchable>

              <Touchable
                style={StyleSheet.applyWidth(
                  { width: '45%' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors.lightInverse,
                      borderBottomWidth: 1,
                      borderColor: theme.colors.appGreen,
                      borderLeftWidth: 1,
                      borderRadius: 15,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      height: 55,
                      justifyContent: 'center',
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.appGreen,
                        fontFamily: 'Inter_500Medium',
                        textTransform: 'capitalize',
                      },
                      dimensions.width
                    )}
                  >
                    {'easily broken'}
                  </Text>
                </View>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { width: '45%' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors.bGGray,
                      borderRadius: 15,
                      height: 55,
                      justifyContent: 'center',
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.textPlaceholder,
                        fontFamily: 'Inter_500Medium',
                        textTransform: 'capitalize',
                      },
                      dimensions.width
                    )}
                  >
                    {'easily broken'}
                  </Text>
                </View>
              </Touchable>
            </View>
          </View>
          {/* Package View */}
          <View
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)[
                'Package/ Shatter or strong opt 4'
              ],
              dimensions.width
            )}
          >
            {/* heading */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_400Regular',
                  opacity: 0.6,
                },
                dimensions.width
              )}
            >
              {'Package'}
            </Text>

            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 16,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              <Touchable
                style={StyleSheet.applyWidth(
                  { width: '45%' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors.lightInverse,
                      borderBottomWidth: 1,
                      borderColor: theme.colors.appGreen,
                      borderLeftWidth: 1,
                      borderRadius: 15,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      height: 55,
                      justifyContent: 'center',
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.appGreen,
                        fontFamily: 'Inter_500Medium',
                        textTransform: 'capitalize',
                      },
                      dimensions.width
                    )}
                  >
                    {'shatter resistant'}
                  </Text>
                </View>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { width: '45%' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors.bGGray,
                      borderRadius: 15,
                      height: 55,
                      justifyContent: 'center',
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.textPlaceholder,
                        fontFamily: 'Inter_500Medium',
                        textTransform: 'capitalize',
                      },
                      dimensions.width
                    )}
                  >
                    {'shatter resistant'}
                  </Text>
                </View>
              </Touchable>

              <Touchable
                style={StyleSheet.applyWidth(
                  { width: '45%' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors.lightInverse,
                      borderBottomWidth: 1,
                      borderColor: theme.colors.appGreen,
                      borderLeftWidth: 1,
                      borderRadius: 15,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      height: 55,
                      justifyContent: 'center',
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.appGreen,
                        fontFamily: 'Inter_500Medium',
                        textTransform: 'capitalize',
                      },
                      dimensions.width
                    )}
                  >
                    {'easily broken'}
                  </Text>
                </View>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { width: '45%' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors.bGGray,
                      borderRadius: 15,
                      height: 55,
                      justifyContent: 'center',
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.textPlaceholder,
                        fontFamily: 'Inter_500Medium',
                        textTransform: 'capitalize',
                      },
                      dimensions.width
                    )}
                  >
                    {'easily broken'}
                  </Text>
                </View>
              </Touchable>
            </View>
          </View>
        </View>
      </View>
      {/* Button Solid */}
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
            backgroundColor: theme.colors.tripItBlue,
            borderRadius: 21,
            color: theme.colors.custom_rgb255_255_255,
            fontFamily: 'System',
            fontWeight: '700',
            height: 40,
            marginTop: 16,
            textAlign: 'center',
            width: '60%',
          },
          dimensions.width
        )}
        title={'Create Request'}
      />
    </ScreenContainer>
  );
};

export default withTheme(CreateDropOff2DeliveryScreen);
