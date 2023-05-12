import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Circle,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Fetch } from 'react-request';

const ChatdirectmessageScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [switchValue, setSwitchValue] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { justifyContent: 'space-between' },
        dimensions.width
      )}
      scrollable={false}
      hasBottomSafeArea={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            height: 48,
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
            <Circle size={50}>
              <Icon
                size={24}
                name={'Ionicons/arrow-back-sharp'}
                color={theme.colors['Custom Color']}
              />
            </Circle>
          </Touchable>

          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flexDirection: 'row', marginLeft: 12 },
              dimensions.width
            )}
          >
            {/* User Image */}
            <Circle bgColor={theme.colors.light} size={40}>
              <Image
                style={StyleSheet.applyWidth(
                  { height: 40, width: 40 },
                  dimensions.width
                )}
                resizeMode={'cover'}
                source={{
                  uri: `${
                    props.route?.params?.OtherUserImage ??
                    'https://s3-us-west-1.amazonaws.com/example-data.draftbit.com/people_photos/square/model-005.jpg'
                  }`,
                }}
              />
            </Circle>
            {/* Name */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color'],
                  fontFamily: 'Poppins_600SemiBold',
                  fontSize: 18,
                  marginLeft: 15,
                },
                dimensions.width
              )}
            >
              {props.route?.params?.otherUser ?? 'Arvind'}
            </Text>
          </View>
        </View>
        {/* Right View */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              height: 48,
              justifyContent: 'center',
            },
            dimensions.width
          )}
        >
          {/* Video Call */}
          <Touchable
            style={StyleSheet.applyWidth({ marginRight: 12 }, dimensions.width)}
          >
            <Circle size={50}>
              <Icon
                size={24}
                color={theme.colors['Custom Color']}
                name={'MaterialIcons/video-call'}
              />
            </Circle>
          </Touchable>
          {/* Audio Call */}
          <Touchable>
            <Circle size={50}>
              <Icon
                size={24}
                color={theme.colors['Custom Color']}
                name={'MaterialIcons/call'}
              />
            </Circle>
          </Touchable>
        </View>
      </View>

      <KeyboardAwareScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          {
            flex: 1,
            justifyContent: 'space-between',
            marginBottom: 20,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 20,
          },
          dimensions.width
        )}
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps={'never'}
      >
        {/* Chats */}
        <DraftbitExampleDataApi.FetchUsersGET limit={3}>
          {({ loading, error, data, refetchUsers }) => {
            const chatsData = data;
            if (!chatsData || loading) {
              return <ActivityIndicator />;
            }

            if (error) {
              return (
                <Text style={{ textAlign: 'center' }}>
                  There was a problem fetching this data
                </Text>
              );
            }

            return (
              <FlatList
                data={chatsData}
                listKey={'bc9yp7p9'}
                keyExtractor={listData =>
                  listData?.id || listData?.uuid || JSON.stringify(listData)
                }
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <>
                      {/* Users message */}
                      <>
                        {!(listData?.id === 2) ? null : (
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginBottom: 4,
                                overflow: 'hidden',
                                paddingBottom: 4,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                { flex: 1 },
                                dimensions.width
                              )}
                            >
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    backgroundColor:
                                      theme.colors['Custom Color_10'],
                                    borderRadius: 6,
                                    flex: 1,
                                    marginRight: 45,
                                    paddingBottom: 5,
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    paddingTop: 10,
                                  },
                                  dimensions.width
                                )}
                              >
                                {/* Message ~ */}
                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors['Custom Color'],
                                      fontFamily: 'Poppins_400Regular',
                                      fontSize: 15,
                                      lineHeight: 20,
                                      opacity: 0.7,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {listData?.bio}
                                </Text>
                                {/* time ~! */}
                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors['Custom Color_2'],
                                      fontFamily: 'Inter_500Medium',
                                      fontSize: 11,
                                      lineHeight: 20,
                                      marginLeft: 10,
                                      marginTop: 4,
                                      opacity: 0.5,
                                      paddingBottom: 2,
                                      textAlign: 'right',
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'9:41 AM'}
                                </Text>
                              </View>
                            </View>
                          </View>
                        )}
                      </>
                      {/* My message */}
                      <>
                        {!(listData?.id !== 2) ? null : (
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                marginBottom: 4,
                                overflow: 'hidden',
                                paddingBottom: 4,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                { flex: 1 },
                                dimensions.width
                              )}
                            >
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    backgroundColor:
                                      theme.colors['Custom Color_10'],
                                    borderRadius: 6,
                                    flex: 1,
                                    marginLeft: 45,
                                    paddingBottom: 5,
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    paddingTop: 10,
                                  },
                                  dimensions.width
                                )}
                              >
                                {/* Message ~ */}
                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors['Custom Color'],
                                      fontFamily: 'Poppins_400Regular',
                                      fontSize: 15,
                                      lineHeight: 20,
                                      opacity: 0.7,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {listData?.bio}
                                </Text>
                                {/* time ~! */}
                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors['Custom Color_2'],
                                      fontFamily: 'Inter_500Medium',
                                      fontSize: 11,
                                      lineHeight: 20,
                                      marginRight: 10,
                                      marginTop: 4,
                                      opacity: 1,
                                      paddingBottom: 2,
                                      textAlign: 'right',
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'9:41 AM'}
                                  {/* Read Reciepts */}
                                  <Text
                                    style={StyleSheet.applyWidth(
                                      {
                                        color: theme.colors['Custom Color_5'],
                                        fontFamily: 'Inter_600SemiBold',
                                        fontSize: 11,
                                        lineHeight: 20,
                                        marginTop: 4,
                                        opacity: 1,
                                        paddingBottom: 2,
                                        textAlign: 'right',
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {'     R'}
                                  </Text>
                                </Text>
                              </View>
                            </View>
                          </View>
                        )}
                      </>
                    </>
                  );
                }}
                numColumns={1}
              />
            );
          }}
        </DraftbitExampleDataApi.FetchUsersGET>
        {/* Message Tray */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: theme.colors['Background'],
              borderRadius: 24,
              bottom: 0,
              flexDirection: 'row',
              height: 48,
              justifyContent: 'space-between',
              left: 0,
              marginLeft: 10,
              marginRight: 10,
              marginTop: 10,
              position: 'absolute',
              right: 0,
            },
            dimensions.width
          )}
        >
          {/* Emojis */}
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
            {/* Send */}
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
                  size={24}
                  color={theme.colors['Custom Color_5']}
                  name={'Entypo/emoji-happy'}
                />
              </View>
            </Touchable>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                borderBottomWidth: 1,
                borderColor: theme.colors['Custom Color_6'],
                borderLeftWidth: 1,
                borderRadius: 24,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flex: 1,
                justifyContent: 'center',
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
                  borderRadius: 8,
                  color: theme.colors['Custom Color'],
                  fontFamily: 'Poppins_400Regular',
                  fontSize: 14,
                  marginLeft: 8,
                  paddingBottom: 8,
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              value={textInputValue}
              placeholder={'Type your message...'}
              editable={true}
              placeholderTextColor={theme.colors['Light']}
            />
          </View>
          {/* Send */}
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
            {/* Send */}
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
                  size={24}
                  name={'Ionicons/send'}
                  color={theme.colors['Custom Color_5']}
                />
              </View>
            </Touchable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(ChatdirectmessageScreen);
