import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { MapView } from '@draftbit/maps';
import {
  Button,
  CircleImage,
  DatePicker,
  Icon,
  NumberInput,
  Picker,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  FlatList,
  ImageBackground,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';

const CreateDropOff5RideShareScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('tab1');
  const [sliderValue, setSliderValue] = React.useState(0);
  const [sliderValue2, setSliderValue2] = React.useState(0);
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

  const mapViewoaXHwU43Ref = React.useRef();

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
            height: 400,
            minHeight: 300,
            width: 400,
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
        ref={mapViewoaXHwU43Ref}
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
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 16,
              marginTop: 16,
              width: '100%',
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 16,
                paddingLeft: 16,
                paddingRight: 16,
              },
              dimensions.width
            )}
          >
            <DatePicker
              onDateChange={newDatePickerValue => {
                try {
                  setDatePickerValue(newDatePickerValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Community_Border'],
                  borderRadius: 12,
                  marginLeft: 0,
                  marginRight: 0,
                  width: '100%',
                },
                dimensions.width
              )}
              date={datePickerValue}
              label={'Departure'}
              leftIconMode={'inset'}
              type={'solid'}
              format={'ddd, d mmm'}
              mode={'datetime'}
            />
          </View>
          <>
            {!(selectedTab === 'tab2') ? null : (
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 16,
                    paddingLeft: 16,
                    paddingRight: 16,
                  },
                  dimensions.width
                )}
              >
                <DatePicker
                  onDateChange={newDatePickerValue => {
                    try {
                      setDatePickerValue(newDatePickerValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors['Community_Heather_Gray'],
                      borderRadius: 12,
                      color: 'rgb(11, 7, 7)',
                      marginLeft: 0,
                      marginRight: 0,
                      width: '100%',
                    },
                    dimensions.width
                  )}
                  date={datePickerValue}
                  label={'Return'}
                  mode={'date'}
                  leftIconMode={'inset'}
                  type={'solid'}
                  format={'ddd, d mmm'}
                />
              </View>
            )}
          </>
        </View>

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
          {'Available Seats '}
        </Text>
        <NumberInput
          onChangeText={newNumberInputValue => {
            const numberInputValue = newNumberInputValue;
            try {
              setNumberInputValue(newNumberInputValue);
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            GlobalStyles.NumberInputStyles(theme)['Number Input'],
            dimensions.width
          )}
          value={numberInputValue}
          editable={true}
          placeholder={'Enter a number...'}
        />
        {/* Add description */}
        <View
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['add description'],
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
            placeholder={'Add Comment / Note'}
            placeholderTextColor={theme.colors.textPlaceholder}
            multiline={true}
          />
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
            {'Cash payment Per Person'}
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
              placeholder={'Enter a value...'}
              placeholderTextColor={theme.colors.textPlaceholder}
            />
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
        title={'Create Service'}
      />
    </ScreenContainer>
  );
};

export default withTheme(CreateDropOff5RideShareScreen);
