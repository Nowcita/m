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
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const MyBitsScreen_0VRSuwzh = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [listExists, setListExists] = React.useState(true);
  const [listMissing, setListMissing] = React.useState(false);
  const [menuTab1, setMenuTab1] = React.useState(true);
  const [menuTab2, setMenuTab2] = React.useState(false);
  const [menuTab3, setMenuTab3] = React.useState(false);
  const [noContent, setNoContent] = React.useState(false);

  const mapViewbb24Puv2Ref = React.useRef();

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors.communityWhite },
        dimensions.width
      )}
      scrollable={false}
      hasSafeArea={true}
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
                  name={'Entypo/chevron-thin-down'}
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
      {/* Headline Only Frame */}
      <View
        style={StyleSheet.applyWidth(
          {
            flexGrow: 0,
            flexShrink: 0,
            paddingBottom: 18,
            paddingLeft: 18,
            paddingRight: 18,
            paddingTop: 18,
          },
          dimensions.width
        )}
      >
        {/* Rubik Headline Style 18/24 Bold */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.communityDarkUI,
              fontFamily: 'Rubik_700Bold',
              fontSize: 24,
              lineHeight: 30,
            },
            dimensions.width
          )}
        >
          {'My Bits'}
        </Text>
      </View>
      {/* Second Navigation Frame */}
      <View
        style={StyleSheet.applyWidth(
          { paddingLeft: 12, paddingRight: 12 },
          dimensions.width
        )}
      >
        {/* 3 Options Frame */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', paddingTop: 12 },
            dimensions.width
          )}
        >
          {/* Option 1 Frame */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors.communityIconBGColor,
                borderBottomLeftRadius: 64,
                borderTopLeftRadius: 64,
                flex: 1,
                flexGrow: 1,
                flexShrink: 0,
                justifyContent: 'center',
              },
              dimensions.width
            )}
          >
            {/* Flex Frame for Touchable */}
            <>
              {!menuTab1 ? null : (
                <View>
                  <Touchable
                    onPress={() => {
                      try {
                        setMenuTab1(true);
                        setMenuTab2(false);
                        setMenuTab3(false);
                        setListMissing(false);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    {/* Button Frame True */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: theme.colors.communityTrueOption,
                          borderBottomWidth: 2,
                          borderColor: theme.colors.communityDarkUI,
                          borderLeftWidth: 2,
                          borderRadius: 64,
                          borderRightWidth: 2,
                          borderTopWidth: 2,
                          flexGrow: 0,
                          flexShrink: 0,
                          justifyContent: 'center',
                          paddingBottom: 9,
                          paddingLeft: 9,
                          paddingRight: 9,
                          paddingTop: 9,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Label */}
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.communityWhite,
                            fontFamily: 'Rubik_400Regular',
                            fontSize: 12,
                            lineHeight: 18,
                          },
                          dimensions.width
                        )}
                      >
                        {'My Pins'}
                      </Text>
                    </View>
                  </Touchable>
                </View>
              )}
            </>
            {/* Flex Frame for Touchable */}
            <>
              {menuTab1 ? null : (
                <View
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.communityIconBGColor,
                      borderBottomLeftRadius: 64,
                      borderTopLeftRadius: 64,
                    },
                    dimensions.width
                  )}
                >
                  <Touchable
                    onPress={() => {
                      try {
                        setMenuTab1(true);
                        setMenuTab2(false);
                        setMenuTab3(false);
                        setListMissing(false);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    {/* Button Frame False */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: theme.colors.communityIconBGColor,
                          borderBottomWidth: 2,
                          borderColor: theme.colors.communityIconBGColor,
                          borderLeftWidth: 2,
                          borderRadius: 64,
                          borderRightWidth: 2,
                          borderTopWidth: 2,
                          flexGrow: 0,
                          flexShrink: 0,
                          justifyContent: 'center',
                          paddingBottom: 9,
                          paddingLeft: 9,
                          paddingRight: 9,
                          paddingTop: 9,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Label */}
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.communityDarkUI,
                            fontFamily: 'Rubik_400Regular',
                            fontSize: 12,
                            lineHeight: 18,
                          },
                          dimensions.width
                        )}
                      >
                        {'My Pins'}
                      </Text>
                    </View>
                  </Touchable>
                </View>
              )}
            </>
          </View>
          {/* Option 2 Frame */}
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, flexGrow: 1, flexShrink: 0 },
              dimensions.width
            )}
          >
            {/* Flex Frame for Touchable */}
            <>
              {!menuTab2 ? null : (
                <View
                  style={StyleSheet.applyWidth(
                    { backgroundColor: theme.colors.communityIconBGColor },
                    dimensions.width
                  )}
                >
                  <Touchable
                    onPress={() => {
                      try {
                        setMenuTab1(false);
                        setMenuTab2(true);
                        setMenuTab3(false);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    {/* Button Frame True */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: theme.colors.communityTrueOption,
                          borderBottomWidth: 2,
                          borderColor: theme.colors.communityDarkUI,
                          borderLeftWidth: 2,
                          borderRadius: 64,
                          borderRightWidth: 2,
                          borderTopWidth: 2,
                          flexGrow: 0,
                          flexShrink: 0,
                          justifyContent: 'center',
                          paddingBottom: 9,
                          paddingLeft: 9,
                          paddingRight: 9,
                          paddingTop: 9,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Label */}
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.communityWhite,
                            fontFamily: 'Rubik_400Regular',
                            fontSize: 12,
                            lineHeight: 18,
                          },
                          dimensions.width
                        )}
                      >
                        {'My Tokens'}
                      </Text>
                    </View>
                  </Touchable>
                </View>
              )}
            </>
            {/* Flex Frame for Touchable */}
            <>
              {menuTab2 ? null : (
                <View
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.communityIconBGColor,
                      paddingBottom: 1,
                      paddingTop: 1,
                    },
                    dimensions.width
                  )}
                >
                  <Touchable
                    onPress={() => {
                      try {
                        setMenuTab1(false);
                        setMenuTab3(false);
                        setMenuTab2(true);
                        setListMissing(true);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    {/* Button Frame False */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: theme.colors.communityIconBGColor,
                          borderBottomWidth: 2,
                          borderColor: theme.colors.communityIconBGColor,
                          borderLeftWidth: 2,
                          borderRadius: 64,
                          borderRightWidth: 2,
                          borderTopWidth: 2,
                          flexGrow: 0,
                          flexShrink: 0,
                          justifyContent: 'center',
                          paddingBottom: 9,
                          paddingLeft: 9,
                          paddingRight: 9,
                          paddingTop: 9,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Label */}
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.communityDarkUI,
                            fontFamily: 'Rubik_400Regular',
                            fontSize: 12,
                            lineHeight: 18,
                          },
                          dimensions.width
                        )}
                      >
                        {'My Tokens'}
                      </Text>
                    </View>
                  </Touchable>
                </View>
              )}
            </>
          </View>
          {/* Option 3 Frame */}
          <View
            style={StyleSheet.applyWidth(
              {
                borderBottomRightRadius: 64,
                borderTopRightRadius: 64,
                flex: 1,
                flexGrow: 1,
                flexShrink: 0,
              },
              dimensions.width
            )}
          >
            {/* Flex Frame for Touchable */}
            <>
              {!menuTab3 ? null : (
                <View
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.communityIconBGColor,
                      borderBottomRightRadius: 64,
                      borderTopRightRadius: 64,
                      paddingBottom: 1,
                      paddingTop: 1,
                    },
                    dimensions.width
                  )}
                >
                  <Touchable
                    onPress={() => {
                      try {
                        setMenuTab1(false);
                        setMenuTab2(false);
                        setMenuTab3(true);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    {/* Button Frame True */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: theme.colors.communityTrueOption,
                          borderBottomWidth: 2,
                          borderColor: theme.colors.communityDarkUI,
                          borderLeftWidth: 2,
                          borderRadius: 64,
                          borderRightWidth: 2,
                          borderTopWidth: 2,
                          flexGrow: 0,
                          flexShrink: 0,
                          justifyContent: 'center',
                          paddingBottom: 9,
                          paddingLeft: 9,
                          paddingRight: 9,
                          paddingTop: 9,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Label */}
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.communityWhite,
                            fontFamily: 'Rubik_400Regular',
                            fontSize: 12,
                            lineHeight: 18,
                          },
                          dimensions.width
                        )}
                      >
                        {'My Reviews'}
                      </Text>
                    </View>
                  </Touchable>
                </View>
              )}
            </>
            {/* Flex Frame for Touchable */}
            <>
              {menuTab3 ? null : (
                <View
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.communityIconBGColor,
                      borderBottomRightRadius: 64,
                      borderTopRightRadius: 64,
                      paddingBottom: 1,
                      paddingTop: 1,
                    },
                    dimensions.width
                  )}
                >
                  <Touchable
                    onPress={() => {
                      try {
                        setMenuTab1(false);
                        setMenuTab2(false);
                        setMenuTab3(true);
                        setListMissing(true);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    {/* Button Frame False */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: theme.colors.communityIconBGColor,
                          borderBottomWidth: 2,
                          borderColor: theme.colors.communityIconBGColor,
                          borderLeftWidth: 2,
                          borderRadius: 64,
                          borderRightWidth: 2,
                          borderTopWidth: 2,
                          flexGrow: 0,
                          flexShrink: 0,
                          justifyContent: 'center',
                          paddingBottom: 9,
                          paddingLeft: 9,
                          paddingRight: 9,
                          paddingTop: 9,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Label */}
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.communityDarkUI,
                            fontFamily: 'Rubik_400Regular',
                            fontSize: 12,
                            lineHeight: 18,
                          },
                          dimensions.width
                        )}
                      >
                        {'My Reviews'}
                      </Text>
                    </View>
                  </Touchable>
                </View>
              )}
            </>
          </View>
        </View>
      </View>
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
          showsPointsOfInterest={true}
          apiKey={'AIzaSyBzktToWosjNgrrUawZnbslB9NSXSXCkwo'}
          ref={mapViewbb24Puv2Ref}
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
                      listKey={'SIUsv8wI'}
                      keyExtractor={listData =>
                        listData?.id ||
                        listData?.uuid ||
                        JSON.stringify(listData)
                      }
                      renderItem={({ item }) => {
                        const listData = item;
                        return (
                          <Touchable
                            onPress={() => {
                              try {
                                navigation.navigate('OpenTokenScreen');
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                          >
                            {/* List Style Frame */}
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  borderBottomWidth: 1,
                                  borderLeftWidth: 1,
                                  borderRightWidth: 1,
                                  borderTopWidth: 1,
                                  marginBottom: 1,
                                  marginLeft: 1,
                                  marginRight: 1,
                                  marginTop: 1,
                                },
                                dimensions.width
                              )}
                            >
                              <Touchable
                                onPress={() => {
                                  try {
                                    navigation.navigate('OpenTokenScreen');
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                              >
                                {/* TOKEN */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.ViewStyles(theme)[
                                        'Token business card 7'
                                      ],
                                      {
                                        borderBottomWidth: 1,
                                        borderColor: theme.colors['Background'],
                                        borderLeftWidth: 1,
                                        borderRightWidth: 1,
                                        marginLeft: 2,
                                        marginRight: 2,
                                        marginTop: 1,
                                      }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  <Image
                                    style={StyleSheet.applyWidth(
                                      {
                                        borderRadius: 4,
                                        height: 80,
                                        width: 80,
                                      },
                                      dimensions.width
                                    )}
                                    resizeMode={'cover'}
                                    source={{
                                      uri: 'https://apps-draftbit-com.s3.amazonaws.com/apps/QIdTF7fF/assets/vhoBEsR3H2JeO6mN8Nvwx',
                                    }}
                                  />
                                  <Touchable>
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
                                            fontSize: 14,
                                            marginTop: 2,
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
                                        <Text
                                          style={StyleSheet.applyWidth(
                                            {
                                              color: theme.colors['Primary'],
                                              fontFamily: 'Inter_400Regular',
                                              fontSize: 13,
                                              marginLeft: 5,
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {'Day 12'}
                                        </Text>
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
                                          name={
                                            'MaterialCommunityIcons/cursor-default-click'
                                          }
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
                                          {'1,533'}
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
                                      <Touchable />
                                    </View>
                                  </Touchable>
                                </View>
                              </Touchable>
                              <Touchable />
                            </View>
                          </Touchable>
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

export default withTheme(MyBitsScreen_0VRSuwzh);
