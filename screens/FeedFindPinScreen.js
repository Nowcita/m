import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ExampleDataForListsApi from '../apis/ExampleDataForListsApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { MapView } from '@draftbit/maps';
import {
  Circle,
  CircleImage,
  Icon,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
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

const FeedFindPinScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [listExists, setListExists] = React.useState(true);
  const [listMissing, setListMissing] = React.useState(false);
  const [menuTab1, setMenuTab1] = React.useState(true);
  const [menuTab2, setMenuTab2] = React.useState(false);
  const [menuTab3, setMenuTab3] = React.useState(false);
  const [noContent, setNoContent] = React.useState(false);

  const mapViewDnBf1kotRef = React.useRef();

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors.communityWhite },
        dimensions.width
      )}
      hasSafeArea={true}
      scrollable={false}
    >
      {/* Navigation Frame */}
      <View
        style={StyleSheet.applyWidth(
          {
            flexDirection: 'row',
            flexGrow: 0,
            flexShrink: 0,
            paddingLeft: 12,
            paddingRight: 12,
          },
          dimensions.width
        )}
      >
        {/* Left Frame */}
        <View
          style={StyleSheet.applyWidth(
            { paddingBottom: 7, paddingTop: 7 },
            dimensions.width
          )}
        >
          {/* Flex Frame for Touchable */}
          <View
            style={StyleSheet.applyWidth(
              { flexGrow: 1, flexShrink: 0, justifyContent: 'center' },
              dimensions.width
            )}
          >
            <Touchable>
              <Circle size={31} bgColor={theme.colors.communityIconBGColor}>
                <Icon
                  size={18}
                  color={theme.colors.communityIconFill}
                  name={'Ionicons/ios-settings-sharp'}
                />
              </Circle>
            </Touchable>
          </View>
        </View>
        {/* Middle Frame */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexGrow: 1,
              flexShrink: 0,
              paddingBottom: 12,
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 12,
            },
            dimensions.width
          )}
        ></View>
        {/* Right Frame */}
        <View
          style={StyleSheet.applyWidth(
            { paddingBottom: 7, paddingTop: 7 },
            dimensions.width
          )}
        >
          {/* Flex Frame for Touchable */}
          <View
            style={StyleSheet.applyWidth(
              { flexGrow: 1, flexShrink: 0, justifyContent: 'center' },
              dimensions.width
            )}
          >
            <Touchable>
              <Circle size={31} bgColor={theme.colors.communityIconBGColor}>
                <Icon
                  name={'FontAwesome/search'}
                  size={18}
                  color={theme.colors.communityIconFill}
                />
              </Circle>
            </Touchable>
          </View>
        </View>
      </View>
      {/* Search And Filter */}
      <View
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.ViewStyles(theme)['search and filter bar'],
            { maxHeight: 45 }
          ),
          dimensions.width
        )}
      >
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          <Surface
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors.surface,
                borderRadius: 12,
                flex: 1,
                flexDirection: 'row',
                height: 48,
                justifyContent: 'space-between',
                minHeight: 48,
                paddingRight: 16,
              },
              dimensions.width
            )}
            elevation={3}
          >
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  borderRadius: 8,
                  color: theme.colors.strong,
                  fontFamily: 'Inter_400Regular',
                  fontSize: 15,
                  height: 48,
                  paddingBottom: 8,
                  paddingLeft: 24,
                  paddingRight: 8,
                  paddingTop: 8,
                  width: '90%',
                },
                dimensions.width
              )}
              placeholder={'Search for place'}
              placeholderTextColor={theme.colors.textPlaceholder}
            />
            <Icon
              name={'Feather/search'}
              size={24}
              color={theme.colors.textPlaceholder}
            />
          </Surface>
        </View>

        <View
          style={StyleSheet.applyWidth({ marginLeft: 16 }, dimensions.width)}
        >
          <Touchable>
            <Icon name={'AntDesign/filter'} size={30} />
          </Touchable>
        </View>
      </View>
      {/* Second Navigation Frame */}
      <View
        style={StyleSheet.applyWidth(
          { paddingLeft: 12, paddingRight: 12 },
          dimensions.width
        )}
      ></View>
      {/* Scroll Content View */}
      <ScrollView
        style={StyleSheet.applyWidth({ flexGrow: 1 }, dimensions.width)}
        contentContainerStyle={StyleSheet.applyWidth(
          { flexShrink: 0 },
          dimensions.width
        )}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <MapView
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.MapViewStyles(theme)['Map View'], {
              maxHeight: 255,
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
          apiKey={'AIzaSyBzktToWosjNgrrUawZnbslB9NSXSXCkwo'}
          showsUserLocation={true}
          showsPointsOfInterest={false}
          provider={'google'}
          ref={mapViewDnBf1kotRef}
        />
        {/* Content Frame Tab 1 */}
        <>
          {!menuTab1 ? null : (
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, flexGrow: 1, flexShrink: 0 },
                dimensions.width
              )}
            >
              <ExampleDataForListsApi.FetchGetSampleDataList10GET>
                {({ loading, error, data, refetchGetSampleDataList10 }) => {
                  const fetchData = data;
                  if (!fetchData || loading) {
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
                      data={fetchData}
                      listKey={'2EAMjAWJ'}
                      keyExtractor={listData =>
                        listData?.id ||
                        listData?.uuid ||
                        JSON.stringify(listData)
                      }
                      renderItem={({ item }) => {
                        const listData = item;
                        return (
                          <>
                            <Touchable
                              onPress={() => {
                                try {
                                  navigation.navigate('OpenTokenScreen');
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                            >
                              <View
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.ViewStyles(theme)[
                                      'Token business card'
                                    ],
                                    {
                                      borderBottomWidth: 1,
                                      borderColor:
                                        theme.colors['Community_Medium_Black'],
                                      borderLeftWidth: 1,
                                      borderRightWidth: 1,
                                      borderTopWidth: 1,
                                    }
                                  ),
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
                                      {
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        marginTop: 12,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    <Icon
                                      size={20}
                                      color={theme.colors['Primary']}
                                      name={'MaterialIcons/account-circle'}
                                    />
                                    <Icon
                                      style={StyleSheet.applyWidth(
                                        { left: 35 },
                                        dimensions.width
                                      )}
                                      size={20}
                                      color={theme.colors['Primary']}
                                      name={
                                        'MaterialCommunityIcons/comment-text-multiple'
                                      }
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
                                      style={StyleSheet.applyWidth(
                                        { left: 15 },
                                        dimensions.width
                                      )}
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
                                      style={StyleSheet.applyWidth(
                                        { left: 15 },
                                        dimensions.width
                                      )}
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
                                      {
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        marginTop: 12,
                                      },
                                      dimensions.width
                                    )}
                                  />
                                </View>
                              </View>
                            </Touchable>
                          </>
                        );
                      }}
                      contentContainerStyle={StyleSheet.applyWidth(
                        { flex: 1 },
                        dimensions.width
                      )}
                      numColumns={1}
                    />
                  );
                }}
              </ExampleDataForListsApi.FetchGetSampleDataList10GET>
            </View>
          )}
        </>
        {/* Content Frame Tab 2 */}
        <>
          {!menuTab2 ? null : (
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, flexGrow: 1, flexShrink: 0 },
                dimensions.width
              )}
            />
          )}
        </>
        {/* Content Frame Tab 3 */}
        <>{!menuTab3 ? null : <View />}</>
      </ScrollView>
      {/* No Content Frame */}
      <>
        {!listMissing ? null : (
          <View
            style={StyleSheet.applyWidth(
              { flexGrow: 1, flexShrink: 0 },
              dimensions.width
            )}
          >
            {/* System Notification Tab 2 */}
            <>
              {!menuTab2 ? null : (
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flex: 1,
                      flexShrink: 0,
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  {/* Flex Frame for Icons */}
                  <View>
                    <Icon
                      name={'MaterialIcons/event-busy'}
                      size={48}
                      color={theme.colors.communityIconFill}
                    />
                  </View>
                  {/* Headline Frame */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexShrink: 0,
                        justifyContent: 'center',
                        marginLeft: 24,
                        marginRight: 24,
                        marginTop: 24,
                      },
                      dimensions.width
                    )}
                  >
                    {/* Rubik Headline Style 18/24 Bold */}
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.communityIconFill,
                          fontFamily: 'Rubik_700Bold',
                          fontSize: 18,
                          lineHeight: 24,
                          textAlign: 'center',
                        },
                        dimensions.width
                      )}
                    >
                      {
                        'Your Events inbox is \ncurrently empty. \nNew events will appear here.'
                      }
                    </Text>
                  </View>
                </View>
              )}
            </>
            {/* System Notification Tab 3 */}
            <>
              {!menuTab3 ? null : (
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flex: 1,
                      flexShrink: 0,
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  {/* Flex Frame for Icons */}
                  <View>
                    <Icon
                      name={'Ionicons/md-notifications-off'}
                      size={48}
                      color={theme.colors.communityIconFill}
                    />
                  </View>
                  {/* Headline Frame */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexShrink: 0,
                        justifyContent: 'center',
                        marginLeft: 24,
                        marginRight: 24,
                        marginTop: 24,
                      },
                      dimensions.width
                    )}
                  >
                    {/* Rubik Headline Style 18/24 Bold */}
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.communityIconFill,
                          fontFamily: 'Rubik_700Bold',
                          fontSize: 18,
                          lineHeight: 24,
                          textAlign: 'center',
                        },
                        dimensions.width
                      )}
                    >
                      {
                        'Your Notifications inbox is \ncurrently empty. \nNew events will appear here.'
                      }
                    </Text>
                  </View>
                </View>
              )}
            </>
          </View>
        )}
      </>
    </ScreenContainer>
  );
};

export default withTheme(FeedFindPinScreen);
