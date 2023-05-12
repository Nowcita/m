import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { MapMarker, MapView } from '@draftbit/maps';
import {
  Button,
  Circle,
  Icon,
  NumberInput,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  Image,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';

const Step3PayPinitScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [switchValue, setSwitchValue] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

  const mapViewkBEba6nuRef = React.useRef();

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { justifyContent: 'space-between' },
        dimensions.width
      )}
      hasBottomSafeArea={false}
      hasTopSafeArea={false}
      hasSafeArea={true}
      scrollable={true}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Custom Color'],
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
            flexDirection: 'column',
            height: 72,
            justifyContent: 'space-between',
            paddingLeft: 16,
            paddingRight: 16,
          },
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
          </View>
        </View>
      </View>
      {/* Map */}
      <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
        <MapView
          style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
          latitude={37.40241}
          longitude={-122.12125}
          zoomEnabled={true}
          rotateEnabled={true}
          scrollEnabled={true}
          loadingEnabled={true}
          showsPointsOfInterest={true}
          showsUserLocation={true}
          showsCompass={true}
          followsUserLocation={true}
          zoom={15}
          apiKey={'AIzaSyBzktToWosjNgrrUawZnbslB9NSXSXCkwo'}
          ref={mapViewkBEba6nuRef}
        >
          <MapMarker
            longitude={-122.1228}
            title={'audi a4 car for sale'}
            latitude={37.4078}
            pinColor={theme.colors['Blue']}
          />
        </MapView>
      </View>
      {/* Hospital Details */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Custom Color'],
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            bottom: 0,
            flexDirection: 'column',
            justifyContent: 'space-between',
            left: 0,
            marginTop: 10,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 20,
            position: 'absolute',
            right: 0,
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: theme.colors['Custom Color'],
              borderBottomWidth: 1,
              borderLeftWidth: 1,
              borderRadius: 12,
              borderRightWidth: 1,
              borderTopWidth: 1,
              flexDirection: 'row',
              height: 104,
              marginBottom: 0,
              paddingLeft: 12,
            },
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

        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
              marginBottom: 1,
              marginTop: 1,
              textAlign: 'center',
            }),
            dimensions.width
          )}
        >
          {'.  .  .'}
        </Text>
        {/* Actions */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              height: 48,
              justifyContent: 'space-between',
            },
            dimensions.width
          )}
        >
          {/* Call */}
          <Button
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['Blue'],
                borderRadius: 8,
                fontFamily: 'Inter_400Regular',
                fontSize: 12,
                textAlign: 'center',
                width: '45%',
              },
              dimensions.width
            )}
            disabledOpacity={0.8}
            title={'Days active'}
            icon={'Ionicons/ios-today'}
            activeOpacity={1}
          />
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
            editable={true}
            value={numberInputValue}
            placeholder={"Number of Day's"}
          />
        </View>

        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
              fontSize: 12,
              marginBottom: 1,
              marginTop: 1,
              textAlign: 'center',
            }),
            dimensions.width
          )}
        >
          {'No. Days x 0.1 USD'}
        </Text>

        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
              fontSize: 12,
              marginBottom: 1,
              marginTop: 1,
              textAlign: 'center',
            }),
            dimensions.width
          )}
        >
          {'Total USD = '}
        </Text>
        {/* View 2 */}
        <View>
          <Button
            onPress={() => {
              try {
                navigation.navigate('FeedFindPinScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
                borderRadius: 32,
                marginLeft: 20,
                marginRight: 20,
                marginTop: 10,
              }),
              dimensions.width
            )}
            title={'Pay & Pin It'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(Step3PayPinitScreen);
