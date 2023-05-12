import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { MapMarker, MapView } from '@draftbit/maps';
import {
  Button,
  CircleImage,
  DatePicker,
  Icon,
  NumberInput,
  Picker,
  ScreenContainer,
  Stepper,
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

const FeedCreatePinScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [numberInputValue2, setNumberInputValue2] = React.useState('');
  const [numberInputValue3, setNumberInputValue3] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('tab1');
  const [sliderValue, setSliderValue] = React.useState(0);
  const [sliderValue2, setSliderValue2] = React.useState(0);
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

  const mapViewgiXbiiTvRef = React.useRef();

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
        ref={mapViewgiXbiiTvRef}
      >
        <MapMarker flat={false} pinColor={theme.colors['App Green']} />
      </MapView>
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
            {'Map it'}
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
                const handler = async () => {
                  try {
                    setTextInputValue2(newTextInputValue);
                    const Map = await Utils.getLocation();
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
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
              placeholder={'Locate'}
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
        ></View>

        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.textPlaceholder,
              fontFamily: 'Inter_500Medium',
              fontSize: 14,
              marginLeft: 20,
              marginTop: 8,
              textAlign: 'left',
              textTransform: 'capitalize',
            },
            dimensions.width
          )}
        >
          {'Days Active'}
        </Text>
        {/* Actions Stepper Frame */}
        <View
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['+/- Num.'],
            dimensions.width
          )}
        >
          {/* Design Style Frame */}
          <View
            style={StyleSheet.applyWidth(
              {
                borderBottomWidth: 1,
                borderColor: theme.colors.internalBorder,
                borderLeftWidth: 1,
                borderRadius: 12,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                paddingBottom: 18,
                paddingLeft: 24,
                paddingRight: 24,
                paddingTop: 18,
              },
              dimensions.width
            )}
          >
            <Stepper
              onChange={newStepperValue => {
                try {
                } catch (err) {
                  console.error(err);
                }
              }}
              iconSize={32}
              min={1}
              max={10}
              iconColor={theme.colors.internalPrimaryColor}
            />
          </View>
          {/* Summary Detail Frame */}
          <View>
            {/* Data Frame */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', paddingBottom: 12, paddingTop: 12 },
                dimensions.width
              )}
            >
              {/* Data */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.internalPrimaryBold,
                    fontFamily: 'OpenSans_600SemiBold',
                    fontSize: 20,
                    lineHeight: 26,
                  },
                  dimensions.width
                )}
              >
                {'Total: $0.1'}
              </Text>
            </View>
          </View>
        </View>

        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.textPlaceholder,
              fontFamily: 'Inter_500Medium',
              fontSize: 14,
              marginLeft: 20,
              marginTop: 8,
              textAlign: 'left',
              textTransform: 'capitalize',
            },
            dimensions.width
          )}
        >
          {'Token attached'}
        </Text>
        {/* Add description */}
        <View
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ViewStyles(theme)['add description'],
              { alignItems: 'center' }
            ),
            dimensions.width
          )}
          accessibilityRole={'text'}
        >
          <Icon
            style={StyleSheet.applyWidth(
              { maxHeight: 45, minHeight: 45 },
              dimensions.width
            )}
            size={24}
            name={'Ionicons/document-attach-outline'}
          />
          <Icon size={24} name={'AntDesign/pluscircle'} />
        </View>
      </View>
      {/* Button Solid */}
      <Button
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors.tripItBlue,
            borderRadius: 21,
            color: theme.colors.custom_rgb255_255_255,
            fontFamily: 'System',
            fontWeight: '700',
            height: 40,
            marginBottom: 16,
            marginTop: 16,
            textAlign: 'center',
            width: '60%',
          },
          dimensions.width
        )}
        disabled={Constants['Language']}
        loading={Constants['Language']}
        title={'...\n'}
      />
    </ScreenContainer>
  );
};

export default withTheme(FeedCreatePinScreen);
