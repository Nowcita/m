import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DraftbitApi from '../apis/DraftbitApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { MapCallout, MapMarker, MapView } from '@draftbit/maps';
import {
  Button,
  CheckboxRow,
  Circle,
  CircleImage,
  Icon,
  Link,
  Picker,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const Locatepin3Screen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [pickerValue2, setPickerValue2] = React.useState('');
  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('tab1');
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [textInputValue, setTextInputValue] = React.useState('');

  const mapViewYnUl7pHQRef = React.useRef();

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={true}
      hasBottomSafeArea={true}
      scrollable={true}
    >
      <View>
        {/* Header */}
        <View
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['Map search bar 4'],
            dimensions.width
          )}
        >
          {/* Left View */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flex: 1,
                flexDirection: 'row',
                height: 48,
                justifyContent: 'center',
              },
              dimensions.width
            )}
          >
            {/* Back */}
            <Touchable
              onPress={() => {
                try {
                  navigation.goBack();
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Divider'],
                    borderLeftWidth: 1,
                    borderRadius: 10,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    height: 48,
                    width: 48,
                  },
                  dimensions.width
                )}
              >
                <Circle size={50}>
                  <Icon
                    size={24}
                    name={'Ionicons/arrow-back-sharp'}
                    color={theme.colors['Strong']}
                  />
                </Circle>
              </View>
            </Touchable>
            {/* Address */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Divider'],
                  borderLeftWidth: 1,
                  borderRadius: 10,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  flex: 1,
                  flexDirection: 'row',
                  marginLeft: 8,
                  paddingLeft: 12,
                },
                dimensions.width
              )}
            >
              <Icon
                size={24}
                name={'Ionicons/search-outline'}
                color={theme.colors['Light']}
              />
              <View
                style={StyleSheet.applyWidth(
                  { flex: 1, paddingLeft: 8, paddingRight: 8 },
                  dimensions.width
                )}
              >
                <TextInput
                  style={StyleSheet.applyWidth(
                    {
                      borderRadius: 8,
                      height: 48,
                      paddingBottom: 8,
                      paddingLeft: 8,
                      paddingRight: 8,
                      paddingTop: 8,
                    },
                    dimensions.width
                  )}
                  autoCapitalize={'none'}
                  placeholder={'Enter a value...'}
                  defaultValue={'Jl. Prapatan No 26, Labuan, Malang'}
                />
              </View>

              <View>
                <Icon
                  size={24}
                  name={'Entypo/circle-with-plus'}
                  color={theme.colors['Light']}
                />
                <Touchable />
              </View>
            </View>
          </View>
        </View>
        {/* Header */}
        <View
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['Map search bar 4'],
            dimensions.width
          )}
        >
          {/* Left View */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flex: 1,
                flexDirection: 'row',
                height: 48,
                justifyContent: 'center',
              },
              dimensions.width
            )}
          >
            {/* Address */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Divider'],
                  borderLeftWidth: 1,
                  borderRadius: 10,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  flex: 1,
                  flexDirection: 'row',
                  marginLeft: 8,
                  paddingLeft: 12,
                },
                dimensions.width
              )}
            >
              <Icon
                size={24}
                name={'Ionicons/search-outline'}
                color={theme.colors['Light']}
              />
              <View
                style={StyleSheet.applyWidth(
                  { flex: 1, paddingLeft: 8, paddingRight: 8 },
                  dimensions.width
                )}
              >
                <TextInput
                  style={StyleSheet.applyWidth(
                    {
                      borderRadius: 8,
                      height: 48,
                      paddingBottom: 8,
                      paddingLeft: 8,
                      paddingRight: 8,
                      paddingTop: 8,
                    },
                    dimensions.width
                  )}
                  autoCapitalize={'none'}
                  placeholder={'Enter a value...'}
                  defaultValue={'Jl. Prapatan No 26, Labuan, Malang'}
                />
              </View>

              <View>
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('Locatepin2Screen');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                />
                <Icon
                  size={24}
                  color={theme.colors['Light']}
                  name={'AntDesign/minuscircle'}
                />
              </View>
            </View>
          </View>
        </View>
        {/* Header */}
        <View
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['Map search bar 4'],
            dimensions.width
          )}
        >
          {/* Left View */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flex: 1,
                flexDirection: 'row',
                height: 48,
                justifyContent: 'center',
              },
              dimensions.width
            )}
          >
            {/* Address */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Divider'],
                  borderLeftWidth: 1,
                  borderRadius: 10,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  flex: 1,
                  flexDirection: 'row',
                  marginLeft: 8,
                  paddingLeft: 12,
                },
                dimensions.width
              )}
            >
              <Icon
                size={24}
                name={'Ionicons/search-outline'}
                color={theme.colors['Light']}
              />
              <View
                style={StyleSheet.applyWidth(
                  { flex: 1, paddingLeft: 8, paddingRight: 8 },
                  dimensions.width
                )}
              >
                <TextInput
                  style={StyleSheet.applyWidth(
                    {
                      borderRadius: 8,
                      height: 48,
                      paddingBottom: 8,
                      paddingLeft: 8,
                      paddingRight: 8,
                      paddingTop: 8,
                    },
                    dimensions.width
                  )}
                  autoCapitalize={'none'}
                  placeholder={'Enter a value...'}
                  defaultValue={'Jl. Prapatan No 26, Labuan, Malang'}
                />
              </View>
            </View>
          </View>
        </View>
      </View>

      <Text
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
            marginBottom: 3,
          }),
          dimensions.width
        )}
      >
        {'     Locate your Token for the Market:'}
      </Text>

      <MapView
        style={StyleSheet.applyWidth(
          GlobalStyles.MapViewStyles(theme)['Map View'],
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
        ref={mapViewYnUl7pHQRef}
      >
        <MapMarker pinColor={theme.colors['App Green']} flat={true}>
          <MapCallout showTooltip={true} />
        </MapMarker>
      </MapView>

      <View>
        <View>
          <Button
            onPress={() => {
              try {
                navigation.navigate('Step3PayPinitScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
                backgroundColor: theme.colors['App Green'],
                marginBottom: 5,
                marginLeft: 5,
                marginRight: 5,
                marginTop: 5,
              }),
              dimensions.width
            )}
            title={'Pin Your Token Here'}
          />
          <View>
            <Button
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
                  backgroundColor: theme.colors['Community_Dark_Red'],
                  marginBottom: 5,
                  marginLeft: 5,
                  marginRight: 5,
                  marginTop: 0,
                }),
                dimensions.width
              )}
              title={'Leave Token in my Wallet'}
            />
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(Locatepin3Screen);
