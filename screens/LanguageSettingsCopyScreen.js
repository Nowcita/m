import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const LanguageSettingsCopyScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  const [OtherLanguagesArr, setOtherLanguagesArr] = React.useState([
    'Chinese',
    'Croatian',
    'Czech',
    'Danish',
    'Filpino',
    'Finland',
  ]);
  const [SuggestedLanguagesArr, setSuggestedLanguagesArr] = React.useState([
    'English (UK)',
    'English',
    'Bahasa Indonesia',
  ]);
  const [switchValue, setSwitchValue] = React.useState(false);

  return (
    <ScreenContainer
      scrollable={false}
      hasTopSafeArea={false}
      hasSafeArea={true}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            height: 48,
            marginTop: 12,
            paddingLeft: 16,
            paddingRight: 16,
          },
          dimensions.width
        )}
      >
        {/* Back Click */}
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
          <Touchable
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Icon
              size={24}
              name={'AntDesign/left'}
              color={theme.colors['Community_Dark_UI']}
            />
          </Touchable>
        </View>
        {/* Screen Heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Strong'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 20,
              marginLeft: 16,
            },
            dimensions.width
          )}
        >
          {'Language'}
        </Text>
      </View>
      {/* Languages Container */}
      <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
        {/* Suggested Languages */}
        <View
          style={StyleSheet.applyWidth(
            {
              borderBottomWidth: 1,
              borderColor: theme.colors['Divider'],
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
              paddingBottom: 12,
            },
            dimensions.width
          )}
        >
          {/* Section Heading */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Strong'],
                fontFamily: 'Inter_800ExtraBold',
                fontSize: 18,
                marginBottom: 16,
                marginTop: 5,
                opacity: 1,
              },
              dimensions.width
            )}
          >
            {'Suggested'}
          </Text>
          <FlatList
            data={SuggestedLanguagesArr}
            listKey={'6kWoShy7'}
            keyExtractor={listData =>
              listData?.id || listData?.uuid || JSON.stringify(listData)
            }
            renderItem={({ item }) => {
              const listData = item;
              return (
                <Touchable
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'Language',
                        value: listData,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexDirection: 'row',
                        height: 55,
                        justifyContent: 'space-between',
                      },
                      dimensions.width
                    )}
                  >
                    {/* Language ~ */}
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: 'rgba(3, 1, 1, 0.86)',
                          fontFamily: 'Inter_400Regular',
                          fontSize: 24,
                        },
                        dimensions.width
                      )}
                    >
                      {'English'}
                    </Text>
                    <>
                      {!(Constants['Language'] === listData) ? null : (
                        <Icon
                          size={24}
                          name={'Ionicons/radio-button-on'}
                          color={theme.colors['Custom Color']}
                        />
                      )}
                    </>
                    <>
                      {!(Constants['Language'] !== listData) ? null : (
                        <Icon
                          size={24}
                          name={'Ionicons/radio-button-off-sharp'}
                          color={theme.colors['Custom Color']}
                        />
                      )}
                    </>
                  </View>
                </Touchable>
              );
            }}
            numColumns={1}
          />
        </View>
        {/* Other Languages */}
        <View
          style={StyleSheet.applyWidth(
            {
              borderRadius: 12,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
            },
            dimensions.width
          )}
        >
          {/* Section Heading */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Strong'],
                fontFamily: 'Inter_800ExtraBold',
                fontSize: 18,
                marginBottom: 16,
                marginTop: 5,
                opacity: 1,
              },
              dimensions.width
            )}
          >
            {'Language'}
          </Text>
          <FlatList
            data={OtherLanguagesArr}
            listKey={'on5aiLSu'}
            keyExtractor={listData =>
              listData?.id || listData?.uuid || JSON.stringify(listData)
            }
            renderItem={({ item }) => {
              const listData = item;
              return (
                <Touchable
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'Language',
                        value: listData,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexDirection: 'row',
                        height: 55,
                        justifyContent: 'space-between',
                      },
                      dimensions.width
                    )}
                  >
                    {/* Language ~ */}
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: 'rgba(2, 1, 1, 0.86)',
                          fontFamily: 'Inter_400Regular',
                          fontSize: 24,
                        },
                        dimensions.width
                      )}
                    >
                      {'Spainish'}
                    </Text>
                    <>
                      {!(Constants['Language'] === listData) ? null : (
                        <Icon
                          size={24}
                          name={'Ionicons/radio-button-on'}
                          color={theme.colors['Custom Color']}
                        />
                      )}
                    </>
                    <>
                      {!(Constants['Language'] !== listData) ? null : (
                        <Icon
                          size={24}
                          name={'Ionicons/radio-button-off-sharp'}
                          color={theme.colors['Custom Color']}
                        />
                      )}
                    </>
                  </View>
                </Touchable>
              );
            }}
            numColumns={1}
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(LanguageSettingsCopyScreen);
