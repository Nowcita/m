import React from 'react';
import * as ExampleDataForListsApi from '../apis/ExampleDataForListsApi.js';
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
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const LeadsScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;

  const [listExists, setListExists] = React.useState(true);
  const [listMissing, setListMissing] = React.useState(false);
  const [menuTab1, setMenuTab1] = React.useState(true);
  const [menuTab2, setMenuTab2] = React.useState(false);
  const [menuTab3, setMenuTab3] = React.useState(false);
  const [noContent, setNoContent] = React.useState(false);

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors.communityWhite },
        dimensions.width
      )}
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
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
          {'Inbox'}
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
            { flexDirection: 'row', paddingBottom: 12, paddingTop: 12 },
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
                        {'Messages'}
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
                        {'Messages'}
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
                        {'Events'}
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
                        {'Events'}
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
                        {'Notifications'}
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
                        {'Notifications'}
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
                      listKey={'aOPvx44N'}
                      keyExtractor={listData =>
                        listData?.id ||
                        listData?.uuid ||
                        JSON.stringify(listData)
                      }
                      renderItem={({ item }) => {
                        const listData = item;
                        return (
                          <>
                            {/* List Flex Frame */}
                            <View
                              style={StyleSheet.applyWidth(
                                { flexGrow: 0, flexShrink: 0 },
                                dimensions.width
                              )}
                            >
                              {/* Touchable Flex Frame */}
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    marginBottom: 12,
                                    marginTop: 12,
                                  },
                                  dimensions.width
                                )}
                              >
                                <Touchable>
                                  {/* Record Frame */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        flexDirection: 'row',
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        maxWidth: '100%',
                                        paddingTop: 12,
                                        width: '100%',
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Left Side Frame */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        { paddingLeft: 12 },
                                        dimensions.width
                                      )}
                                    >
                                      {/* Date Frame */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignItems: 'center',
                                            marginBottom: 6,
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        <Text
                                          style={StyleSheet.applyWidth(
                                            {
                                              color:
                                                theme.colors
                                                  .communityTrueOption,
                                              fontFamily: 'Rubik_400Regular',
                                              fontSize: 12,
                                              lineHeight: 18,
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {'Tues'}
                                        </Text>
                                      </View>

                                      <Circle
                                        size={36}
                                        bgColor={
                                          theme.colors.communityPrimaryAlt
                                        }
                                      >
                                        <Text
                                          style={StyleSheet.applyWidth(
                                            {
                                              color:
                                                theme.colors.communityWhite,
                                              fontFamily: 'Rubik_400Regular',
                                              fontSize: 15,
                                              lineHeight: 21,
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {'12'}
                                        </Text>
                                      </Circle>
                                    </View>
                                    {/* Right Side Frame */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          backgroundColor:
                                            theme.colors.communityIconBGColor,
                                          borderRadius: 18,
                                          flexGrow: 1,
                                          flexShrink: 0,
                                          marginLeft: 12,
                                          marginRight: 12,
                                          paddingBottom: 12,
                                          paddingLeft: 12,
                                          paddingRight: 12,
                                          paddingTop: 12,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <ExampleDataForListsApi.Fetch5SampleRecordsGET>
                                        {({
                                          loading,
                                          error,
                                          data,
                                          refetch5SampleRecords,
                                        }) => {
                                          const fetchData = data;
                                          if (!fetchData || loading) {
                                            return <ActivityIndicator />;
                                          }

                                          if (error) {
                                            return (
                                              <Text
                                                style={{ textAlign: 'center' }}
                                              >
                                                There was a problem fetching
                                                this data
                                              </Text>
                                            );
                                          }

                                          return (
                                            <FlatList
                                              data={fetchData}
                                              listKey={JSON.stringify(
                                                fetchData
                                              )}
                                              keyExtractor={listData =>
                                                listData?.id ||
                                                listData?.uuid ||
                                                JSON.stringify(listData)
                                              }
                                              renderItem={({ item }) => {
                                                const listData = item;
                                                return (
                                                  <>
                                                    {/* Touchable Flex Frame */}
                                                    <View>
                                                      <Touchable>
                                                        {/* Sub Option Frame */}
                                                        <View
                                                          style={StyleSheet.applyWidth(
                                                            {
                                                              borderBottomWidth: 1,
                                                              borderColor:
                                                                theme.colors
                                                                  .communityDivider,
                                                              flexDirection:
                                                                'row',
                                                              paddingBottom: 9,
                                                              paddingLeft: 9,
                                                              paddingRight: 9,
                                                              paddingTop: 9,
                                                            },
                                                            dimensions.width
                                                          )}
                                                        >
                                                          {/* Left Side Grow */}
                                                          <View
                                                            style={StyleSheet.applyWidth(
                                                              {
                                                                flexGrow: 1,
                                                                flexShrink: 0,
                                                              },
                                                              dimensions.width
                                                            )}
                                                          >
                                                            {/* Data Point */}
                                                            <Text
                                                              style={StyleSheet.applyWidth(
                                                                {
                                                                  color:
                                                                    theme.colors
                                                                      .communityTrueOption,
                                                                  fontFamily:
                                                                    'Rubik_400Regular',
                                                                  fontSize: 13,
                                                                  lineHeight: 19,
                                                                },
                                                                dimensions.width
                                                              )}
                                                            >
                                                              {
                                                                'Irvine Promenade Luncheon'
                                                              }
                                                            </Text>
                                                          </View>
                                                          {/* Right Side Shrink */}
                                                          <View
                                                            style={StyleSheet.applyWidth(
                                                              {
                                                                flexGrow: 0,
                                                                flexShrink: 0,
                                                                marginLeft: 12,
                                                              },
                                                              dimensions.width
                                                            )}
                                                          >
                                                            <Circle
                                                              size={22}
                                                              bgColor={
                                                                theme.colors
                                                                  .communityWhite
                                                              }
                                                            >
                                                              {/* Icon Flex Frame */}
                                                              <View
                                                                style={StyleSheet.applyWidth(
                                                                  {
                                                                    flexGrow: 0,
                                                                    flexShrink: 0,
                                                                  },
                                                                  dimensions.width
                                                                )}
                                                              >
                                                                <Icon
                                                                  name={
                                                                    'MaterialIcons/lunch-dining'
                                                                  }
                                                                  size={18}
                                                                  color={
                                                                    theme.colors
                                                                      .communityTrueOption
                                                                  }
                                                                />
                                                              </View>
                                                            </Circle>
                                                          </View>
                                                        </View>
                                                      </Touchable>
                                                    </View>
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
                                      </ExampleDataForListsApi.Fetch5SampleRecordsGET>
                                      {/* Touchable Flex Frame */}
                                      <View>
                                        <Touchable>
                                          {/* Sub Actions Frame */}
                                          <View
                                            style={StyleSheet.applyWidth(
                                              {
                                                flexDirection: 'row',
                                                paddingBottom: 9,
                                                paddingLeft: 9,
                                                paddingRight: 9,
                                                paddingTop: 9,
                                              },
                                              dimensions.width
                                            )}
                                          >
                                            {/* Left Side Grow */}
                                            <View
                                              style={StyleSheet.applyWidth(
                                                { flexGrow: 1, flexShrink: 0 },
                                                dimensions.width
                                              )}
                                            >
                                              {/* Data Point */}
                                              <Text
                                                style={StyleSheet.applyWidth(
                                                  {
                                                    color:
                                                      theme.colors
                                                        .communityPrimary,
                                                    fontFamily:
                                                      'Rubik_400Regular',
                                                    fontSize: 13,
                                                    lineHeight: 19,
                                                  },
                                                  dimensions.width
                                                )}
                                              >
                                                {'Show All'}
                                              </Text>
                                            </View>
                                            {/* Right Side Shrink */}
                                            <View
                                              style={StyleSheet.applyWidth(
                                                {
                                                  flexGrow: 0,
                                                  flexShrink: 0,
                                                  marginLeft: 12,
                                                },
                                                dimensions.width
                                              )}
                                            >
                                              <Circle
                                                size={18}
                                                bgColor={
                                                  theme.colors.communityGreenBG
                                                }
                                              >
                                                {/* Icon Flex Frame */}
                                                <View
                                                  style={StyleSheet.applyWidth(
                                                    {
                                                      flexGrow: 0,
                                                      flexShrink: 0,
                                                    },
                                                    dimensions.width
                                                  )}
                                                >
                                                  <Icon
                                                    name={
                                                      'AntDesign/arrowright'
                                                    }
                                                    size={15}
                                                    color={
                                                      theme.colors
                                                        .communityPrimary
                                                    }
                                                  />
                                                </View>
                                              </Circle>
                                            </View>
                                          </View>
                                        </Touchable>
                                      </View>
                                    </View>
                                  </View>
                                </Touchable>
                              </View>
                            </View>
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

export default withTheme(LeadsScreen);
