import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DraftbitApi from '../apis/DraftbitApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  AccordionGroup,
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

const CreateFindAcc5RentaroomScreen = props => {
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

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
      hasBottomSafeArea={true}
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
          },
          dimensions.width
        )}
      >
        {/* Left Section */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'flex-start', justifyContent: 'center' },
            dimensions.width
          )}
        >
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.medium,
                fontFamily: 'Inter_500Medium',
                fontSize: 16,
              },
              dimensions.width
            )}
          >
            {"Hey, Polish Painter's.."}
          </Text>

          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flexDirection: 'row', marginTop: 3 },
              dimensions.width
            )}
          >
            <Icon
              name={'Feather/map-pin'}
              size={15}
              color={theme.colors.medium}
            />
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_700Bold',
                  fontSize: 15,
                  paddingLeft: 8,
                  paddingRight: 5,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'Mayo, Ireland'}
            </Text>
            <Icon name={'Entypo/chevron-small-down'} size={24} />
          </View>
        </View>
        {/* Right Section */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            },
            dimensions.width
          )}
        >
          <Touchable>
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
              <Icon
                style={StyleSheet.applyWidth(
                  { marginTop: 14 },
                  dimensions.width
                )}
                name={'Ionicons/ios-notifications'}
                size={30}
                color={theme.colors.textPlaceholder}
              />
              <>
                {!starRatingValue ? null : (
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: theme.colors.custom_rgb255_0_0,
                        borderBottomWidth: 3,
                        borderColor: theme.colors.custom_rgb255_255_255,
                        borderLeftWidth: 3,
                        borderRadius: 7,
                        borderRightWidth: 3,
                        borderTopWidth: 3,
                        height: 14,
                        left: 6,
                        top: -30,
                        width: 14,
                      },
                      dimensions.width
                    )}
                  />
                )}
              </>
            </View>
          </Touchable>

          <Touchable
            style={StyleSheet.applyWidth({ marginLeft: 12 }, dimensions.width)}
          >
            <Surface
              style={StyleSheet.applyWidth(
                {
                  borderRadius: 20,
                  justifyContent: 'center',
                  minHeight: 40,
                  overflow: 'hidden',
                },
                dimensions.width
              )}
              elevation={3}
            >
              <CircleImage size={40} source={Images.PolishPainters} />
            </Surface>
          </Touchable>
        </View>
      </View>

      <ScrollView
        style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        {/* header */}
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
              alignSelf: 'center',
              fontSize: 21,
              textDecorationLine: 'underline',
            }),
            dimensions.width
          )}
        >
          {'\nSelect Sub-Category :'}
        </Text>
        <Button
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
              backgroundColor: theme.colors['Community_Dark_UI'],
              color: theme.colors['Background'],
              fontFamily: 'ABeeZee_400Regular',
              fontSize: 21,
              marginBottom: 10,
              marginLeft: 60,
              marginRight: 60,
              marginTop: 5,
              textTransform: 'capitalize',
            }),
            dimensions.width
          )}
          title={'Accommodation;'}
        />
        <Button
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
              backgroundColor: theme.colors['Community_Dark_UI'],
              color: theme.colors['Background'],
              fontFamily: 'ABeeZee_400Regular',
              fontSize: 21,
              marginBottom: 10,
              marginLeft: 60,
              marginRight: 60,
              marginTop: 5,
              textTransform: 'capitalize',
            }),
            dimensions.width
          )}
          title={'Rent a Room;'}
        />
        {/* header */}
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
              alignSelf: 'center',
              fontSize: 21,
              textDecorationLine: 'underline',
            }),
            dimensions.width
          )}
        >
          {'Short-term stay:'}
        </Text>
        <Button
          onPress={() => {
            try {
              navigation.navigate('CreateAccommodationairbnbScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
              backgroundColor: theme.colors['Custom Color_10'],
              color: theme.colors['Background'],
              fontFamily: 'ABeeZee_400Regular',
              fontSize: 21,
              marginBottom: 10,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 2,
            }),
            dimensions.width
          )}
          title={'Travel stay'}
        />
        {/* header */}
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
              alignSelf: 'center',
              fontSize: 21,
              textDecorationLine: 'underline',
            }),
            dimensions.width
          )}
        >
          {'Long-term stay :'}
        </Text>
        <Button
          onPress={() => {
            try {
              navigation.navigate(
                'CreateAccommodation1RentProfessionalScreen_kg0e5hMg'
              );
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
              backgroundColor: theme.colors['Custom Color_10'],
              color: theme.colors['Background'],
              fontFamily: 'ABeeZee_400Regular',
              fontSize: 21,
              marginBottom: 0,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 0,
            }),
            dimensions.width
          )}
          title={'Commercial Landlord'}
        />
        <Button
          onPress={() => {
            try {
              navigation.navigate('CreateAccommodation2RentPrivateScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
              backgroundColor: theme.colors['Custom Color_10'],
              color: theme.colors['Background'],
              fontFamily: 'ABeeZee_400Regular',
              fontSize: 21,
              marginBottom: 0,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
            }),
            dimensions.width
          )}
          title={'Private Landlord'}
        />
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['header 2'], {
              textAlign: 'center',
            }),
            dimensions.width
          )}
        >
          {'.  .  .'}
        </Text>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(CreateFindAcc5RentaroomScreen);
