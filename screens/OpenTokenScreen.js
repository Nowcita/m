import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ExampleDataForListsApi from '../apis/ExampleDataForListsApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Checkbox,
  Circle,
  CircleImage,
  Icon,
  LinearGradient,
  ScreenContainer,
  Touchable,
  WebView,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const OpenTokenScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [accountFriend, setAccountFriend] = React.useState(false);
  const [actionSheet, setActionSheet] = React.useState(false);
  const [menuTab1, setMenuTab1] = React.useState(true);
  const [menuTab2, setMenuTab2] = React.useState(false);
  const [menuTab3, setMenuTab3] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

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
            zIndex: 12,
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
            <Touchable
              onPress={() => {
                try {
                  navigation.goBack();
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Circle
                size={31}
                bgColor={theme.colors.communityModalOpacityOverlay}
              >
                <Icon
                  name={'Ionicons/caret-back'}
                  size={18}
                  color={theme.colors.communityWhite}
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
            { flexDirection: 'row', paddingBottom: 7, paddingTop: 7 },
            dimensions.width
          )}
        >
          {/* Flex Frame for Touchable */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexGrow: 1,
                flexShrink: 0,
                justifyContent: 'center',
                marginRight: 12,
              },
              dimensions.width
            )}
          >
            <Touchable>
              <Circle
                size={31}
                bgColor={theme.colors.communityModalOpacityOverlay}
              >
                <Icon
                  name={'Ionicons/ios-share'}
                  size={18}
                  color={theme.colors.communityWhite}
                />
              </Circle>
            </Touchable>
          </View>
        </View>
      </View>
      {/* Hero Frame */}
      <View
        style={StyleSheet.applyWidth(
          {
            height: 45,
            marginBottom: 6,
            marginLeft: 3,
            marginRight: 3,
            marginTop: -54,
            overflow: 'hidden',
          },
          dimensions.width
        )}
      >
        <Image
          style={StyleSheet.applyWidth(
            { height: 150, width: 500 },
            dimensions.width
          )}
          source={Images.JonathanBorbaKgCSRo4SiT8Unsplash}
          resizeMode={'cover'}
        />
      </View>
      {/* Profile Image Frame */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'flex-end',
            marginTop: -40,
            paddingRight: 18,
            zIndex: 20,
          },
          dimensions.width
        )}
      >
        {/* Profile Image Background */}
        <Circle size={96} bgColor={theme.colors.communityWhite}>
          {/* Profile Image */}
          <CircleImage
            source={Images.MalikSkydsgaardIgkwHPbVk8Unsplash}
            size={90}
          />
        </Circle>
      </View>
      {/* Profile Detail Frame */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors.communityWhite,
            flexGrow: 0,
            flexShrink: 0,
            marginTop: -36,
          },
          dimensions.width
        )}
      >
        {/* Bio Frame */}
        <View
          style={StyleSheet.applyWidth(
            {
              height: 25,
              paddingBottom: 12,
              paddingLeft: 12,
              paddingRight: 12,
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
                fontSize: 20,
                lineHeight: 26,
              },
              dimensions.width
            )}
          >
            {'Albert Flores'}
          </Text>
          {/* Rubik Text Style 12/18 Regular */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.communityDarkUI,
                fontFamily: 'Rubik_400Regular',
                fontSize: 12,
                lineHeight: 18,
                marginBottom: 12,
              },
              dimensions.width
            )}
          >
            {'@AlbertFlores'}
          </Text>
        </View>
        {/* Action Frame */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              paddingBottom: 12,
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 12,
            },
            dimensions.width
          )}
        >
          {/* Left Frame */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                marginRight: 12,
                paddingBottom: 7,
                paddingTop: 7,
              },
              dimensions.width
            )}
          >
            {/* Flex Frame for Touchable */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexGrow: 1,
                  flexShrink: 0,
                  justifyContent: 'center',
                  marginRight: 12,
                },
                dimensions.width
              )}
            >
              <Touchable>
                <Circle size={31} bgColor={theme.colors.communityIconBGColor}>
                  <Icon
                    name={'Foundation/telephone'}
                    size={18}
                    color={theme.colors.communityIconFill}
                  />
                </Circle>
              </Touchable>
            </View>
            {/* Flex Frame for Touchable */}
            <View
              style={StyleSheet.applyWidth(
                { flexGrow: 1, flexShrink: 0, justifyContent: 'center' },
                dimensions.width
              )}
            >
              <Touchable>
                <Circle bgColor={theme.colors.communityIconBGColor} size={31}>
                  <Icon
                    name={'MaterialCommunityIcons/message-processing'}
                    size={18}
                    color={theme.colors.communityIconFill}
                  />
                </Circle>
              </Touchable>
            </View>
          </View>
          {/* Right Frame */}
          <View
            style={StyleSheet.applyWidth(
              { flexGrow: 1, flexShrink: 0 },
              dimensions.width
            )}
          >
            {/* Flex Frame for Touchable */}
            <>
              {!accountFriend ? null : (
                <View>
                  <Touchable
                    onPress={() => {
                      try {
                        setAccountFriend(false);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    {/* Button Frame True */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: theme.colors.communityWhite,
                          borderBottomWidth: 2,
                          borderColor: theme.colors.communityPrimaryAlt,
                          borderLeftWidth: 2,
                          borderRadius: 64,
                          borderRightWidth: 2,
                          borderTopWidth: 2,
                          flexDirection: 'row',
                          justifyContent: 'center',
                          paddingBottom: 10,
                          paddingLeft: 10,
                          paddingRight: 10,
                          paddingTop: 10,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Rubik Text Style 12/18 Regular */}
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.communityPrimaryAlt,
                            fontFamily: 'Rubik_400Regular',
                            fontSize: 15,
                            lineHeight: 21,
                          },
                          dimensions.width
                        )}
                      >
                        {'Following'}
                      </Text>
                      {/* Flex Frame for Icons */}
                      <View
                        style={StyleSheet.applyWidth(
                          { justifyContent: 'center', marginLeft: 12 },
                          dimensions.width
                        )}
                      >
                        <Icon
                          color={theme.colors.communityPrimaryAlt}
                          name={'Feather/user-check'}
                          size={18}
                        />
                      </View>
                    </View>
                  </Touchable>
                </View>
              )}
            </>
            {/* Flex Frame for Touchable */}
            <>
              {accountFriend ? null : (
                <View>
                  <Touchable
                    onPress={() => {
                      try {
                        setAccountFriend(true);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    {/* Button Frame False */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: theme.colors.communityPrimaryAlt,
                          borderRadius: 64,
                          flexDirection: 'row',
                          justifyContent: 'center',
                          paddingBottom: 12,
                          paddingLeft: 12,
                          paddingRight: 12,
                          paddingTop: 12,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Rubik Text Style 12/18 Regular */}
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.communityWhite,
                            fontFamily: 'Rubik_400Regular',
                            fontSize: 15,
                            lineHeight: 21,
                          },
                          dimensions.width
                        )}
                      >
                        {'Follow'}
                      </Text>
                      {/* Flex Frame for Icons */}
                      <View
                        style={StyleSheet.applyWidth(
                          { justifyContent: 'center', marginLeft: 12 },
                          dimensions.width
                        )}
                      >
                        <Icon
                          name={'FontAwesome/user'}
                          size={18}
                          color={theme.colors.communityWhite}
                        />
                      </View>
                    </View>
                  </Touchable>
                </View>
              )}
            </>
          </View>
        </View>
      </View>

      <View style={StyleSheet.applyWidth({ height: 555 }, dimensions.width)}>
        <WebView
          style={StyleSheet.applyWidth(
            GlobalStyles.WebViewStyles(theme)['Web View'],
            dimensions.width
          )}
          source={{ uri: 'https://reactnative.dev' }}
          javaScriptEnabled={true}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          cacheEnabled={true}
        />
      </View>
      {/* Three Tabs Component Group */}
      <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
        {/* Three Tabs Gradient for Aesthetic */}
        <View style={StyleSheet.applyWidth({ height: 36 }, dimensions.width)}>
          <LinearGradient
            style={StyleSheet.applyWidth(
              { height: '100%', width: '100%' },
              dimensions.width
            )}
            endY={1}
            endX={0}
            color1={theme.colors.communityStoneGray}
            color2={theme.colors.communityWhite}
            startY={100}
          />
        </View>
        {/* Three Tabs Menu Frame */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.communityWhite,
              borderTopLeftRadius: 18,
              borderTopRightRadius: 18,
              marginTop: -12,
            },
            dimensions.width
          )}
        >
          {/* Second Navigation Frame */}
          <View
            style={StyleSheet.applyWidth(
              { paddingLeft: 12, paddingRight: 12, paddingTop: 6 },
              dimensions.width
            )}
          >
            {/* 3 Options Frame */}
            <View
              style={StyleSheet.applyWidth(
                { flexDirection: 'row' },
                dimensions.width
              )}
            >
              {/* Option 1 Frame */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    flex: 1,
                    flexGrow: 1,
                    flexShrink: 0,
                    paddingBottom: 12,
                    paddingLeft: 6,
                    paddingRight: 6,
                    paddingTop: 12,
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
                              borderRadius: 12,
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
                            {'Reviews'}
                          </Text>
                        </View>
                      </Touchable>
                    </View>
                  )}
                </>
                {/* Flex Frame for Touchable */}
                <>
                  {menuTab1 ? null : (
                    <View>
                      <Touchable
                        onPress={() => {
                          try {
                            setMenuTab1(true);
                            setMenuTab2(false);
                            setMenuTab3(false);
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
                              backgroundColor: theme.colors.background,
                              borderBottomWidth: 2,
                              borderColor: theme.colors.communityBorder,
                              borderLeftWidth: 2,
                              borderRadius: 12,
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
                                color: theme.colors.communityIconFill,
                                fontFamily: 'Rubik_400Regular',
                                fontSize: 12,
                                lineHeight: 18,
                              },
                              dimensions.width
                            )}
                          >
                            {'Reviews'}
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
                  {
                    flex: 1,
                    flexGrow: 1,
                    flexShrink: 0,
                    paddingBottom: 12,
                    paddingLeft: 6,
                    paddingRight: 6,
                    paddingTop: 12,
                  },
                  dimensions.width
                )}
              >
                {/* Flex Frame for Touchable */}
                <>
                  {!menuTab2 ? null : (
                    <View>
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
                              borderRadius: 12,
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
                            {'Comments'}
                          </Text>
                        </View>
                      </Touchable>
                    </View>
                  )}
                </>
                {/* Flex Frame for Touchable */}
                <>
                  {menuTab2 ? null : (
                    <View>
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
                        {/* Button Frame False */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              backgroundColor: theme.colors.background,
                              borderBottomWidth: 2,
                              borderColor: theme.colors.communityBorder,
                              borderLeftWidth: 2,
                              borderRadius: 12,
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
                                color: theme.colors.communityIconFill,
                                fontFamily: 'Rubik_400Regular',
                                fontSize: 12,
                                lineHeight: 18,
                              },
                              dimensions.width
                            )}
                          >
                            {'Comments'}
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
                    flex: 1,
                    flexGrow: 1,
                    flexShrink: 0,
                    paddingBottom: 12,
                    paddingLeft: 6,
                    paddingRight: 6,
                    paddingTop: 12,
                  },
                  dimensions.width
                )}
              >
                {/* Flex Frame for Touchable */}
                <>
                  {!menuTab3 ? null : (
                    <View>
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
                              borderRadius: 12,
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
                            {'Reactions'}
                          </Text>
                        </View>
                      </Touchable>
                    </View>
                  )}
                </>
                {/* Flex Frame for Touchable */}
                <>
                  {menuTab3 ? null : (
                    <View>
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
                        {/* Button Frame False */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              backgroundColor: theme.colors.background,
                              borderBottomWidth: 2,
                              borderColor: theme.colors.communityBorder,
                              borderLeftWidth: 2,
                              borderRadius: 12,
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
                                color: theme.colors.communityIconFill,
                                fontFamily: 'Rubik_400Regular',
                                fontSize: 12,
                                lineHeight: 18,
                              },
                              dimensions.width
                            )}
                          >
                            {'Reactions'}
                          </Text>
                        </View>
                      </Touchable>
                    </View>
                  )}
                </>
              </View>
            </View>
          </View>
        </View>
        {/* Three Tabs Content Frame */}
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          {/* Content Frame Tab 1 */}
          <>
            {!menuTab1 ? null : (
              <View
                style={StyleSheet.applyWidth(
                  { flexGrow: 1, flexShrink: 0 },
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
                        listKey={'0XahCQNx'}
                        keyExtractor={listData =>
                          listData?.id ||
                          listData?.uuid ||
                          JSON.stringify(listData)
                        }
                        renderItem={({ item }) => {
                          const listData = item;
                          return (
                            <>
                              {/* Flex Frame for Touchable */}
                              <View
                                style={StyleSheet.applyWidth(
                                  { marginBottom: 12 },
                                  dimensions.width
                                )}
                              >
                                <Touchable
                                  onPress={() => {
                                    try {
                                      setModalOpen(true);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                >
                                  {/* List Frame */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        flexGrow: 1,
                                        flexShrink: 0,
                                        paddingLeft: 18,
                                        paddingRight: 18,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Record Frame */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          backgroundColor:
                                            theme.colors.communityIconBGColor,
                                          borderRadius: 12,
                                          flexDirection: 'row',
                                          flexGrow: 0,
                                          flexShrink: 0,
                                          paddingBottom: 12,
                                          paddingLeft: 18,
                                          paddingRight: 18,
                                          paddingTop: 12,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {/* Left Side */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          { flexGrow: 0, flexShrink: 0 },
                                          dimensions.width
                                        )}
                                      >
                                        {/* Image Frame */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            { flexGrow: 0, flexShrink: 0 },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Flex Frame for Icons */}
                                          <View>
                                            <Icon
                                              size={50}
                                              color={
                                                theme.colors.communityDarkUI
                                              }
                                              name={
                                                'MaterialCommunityIcons/account-box'
                                              }
                                            />
                                          </View>
                                        </View>
                                      </View>
                                      {/* Middle Grow Column */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          {
                                            flexGrow: 1,
                                            flexShrink: 0,
                                            justifyContent: 'center',
                                            marginLeft: 12,
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {/* Data Title */}
                                        <Text
                                          style={StyleSheet.applyWidth(
                                            {
                                              color:
                                                theme.colors.communityDarkUI,
                                              fontFamily: 'Rubik_700Bold',
                                              fontSize: 12,
                                              lineHeight: 18,
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {'Mary Joe'}
                                        </Text>
                                        {/* Data Point */}
                                        <Text
                                          style={StyleSheet.applyWidth(
                                            {
                                              color:
                                                theme.colors.communityDarkUI,
                                              fontFamily: 'Rubik_400Regular',
                                              fontSize: 11,
                                              lineHeight: 17,
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {
                                            'Very professional, lovely people with service as expected.'
                                          }
                                        </Text>
                                      </View>
                                      {/* Right Column */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          { justifyContent: 'center' },
                                          dimensions.width
                                        )}
                                      >
                                        {/* Flex Frame */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              backgroundColor:
                                                theme.colors.communityWhite,
                                              borderRadius: 12,
                                              flexGrow: 0,
                                              flexShrink: 0,
                                              justifyContent: 'center',
                                              paddingBottom: 6,
                                              paddingLeft: 6,
                                              paddingRight: 6,
                                              paddingTop: 6,
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Rubik Headline Style 18/24 Bold */}
                                          <Text
                                            style={StyleSheet.applyWidth(
                                              {
                                                color:
                                                  theme.colors
                                                    .communityPrimaryAlt,
                                                fontFamily: 'Rubik_700Bold',
                                                fontSize: 11,
                                                lineHeight: 17,
                                                paddingLeft: 3,
                                                paddingRight: 3,
                                              },
                                              dimensions.width
                                            )}
                                          >
                                            {'RSVP'}
                                          </Text>
                                        </View>
                                      </View>
                                    </View>
                                  </View>
                                </Touchable>
                              </View>
                            </>
                          );
                        }}
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
                  { flexGrow: 1, flexShrink: 0 },
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
                        listKey={'aM77HYa6'}
                        keyExtractor={listData =>
                          listData?.id ||
                          listData?.uuid ||
                          JSON.stringify(listData)
                        }
                        renderItem={({ item }) => {
                          const listData = item;
                          return (
                            <>
                              {/* Flex Frame for Touchable */}
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
                                <Touchable
                                  onPress={() => {
                                    try {
                                      setModalOpen(true);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                >
                                  {/* List Frame */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      { flexGrow: 1, flexShrink: 0 },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Record Frame */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          borderBottomWidth: 2,
                                          borderColor:
                                            theme.colors.communityBorder,
                                          flexDirection: 'row',
                                          flexGrow: 0,
                                          flexShrink: 0,
                                          paddingLeft: 18,
                                          paddingRight: 18,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {/* Left Side Frame */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          { paddingTop: 12 },
                                          dimensions.width
                                        )}
                                      >
                                        {/* Circle Image Frame */}
                                        <View>
                                          <CircleImage
                                            source={
                                              Images.JoelMottLaK153ghdigUnsplash
                                            }
                                            size={38}
                                          />
                                        </View>
                                      </View>
                                      {/* New Right Side */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          {
                                            flexGrow: 0,
                                            flexShrink: 0,
                                            paddingBottom: 12,
                                            paddingLeft: 12,
                                            paddingRight: 12,
                                            paddingTop: 12,
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {/* Top Row Frame */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              flexGrow: 0,
                                              flexShrink: 0,
                                              paddingBottom: 6,
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Rubik Headline Style 18/24 Bold */}
                                          <Text
                                            style={StyleSheet.applyWidth(
                                              {
                                                color:
                                                  theme.colors
                                                    .communityTrueOption,
                                                fontFamily: 'Rubik_700Bold',
                                                fontSize: 13,
                                                lineHeight: 19,
                                              },
                                              dimensions.width
                                            )}
                                            numberOfLines={2}
                                          >
                                            {'Floyd Miles'}
                                          </Text>
                                          {/* Rubik Text Style 12/18 Regular */}
                                          <Text
                                            style={StyleSheet.applyWidth(
                                              {
                                                color:
                                                  theme.colors
                                                    .communityLightBlack,
                                                fontFamily: 'Rubik_400Regular',
                                                fontSize: 12,
                                                lineHeight: 18,
                                              },
                                              dimensions.width
                                            )}
                                          >
                                            {'@FloydMiles'}
                                          </Text>
                                        </View>
                                        {/* Second Row Frame */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              flexGrow: 0,
                                              flexShrink: 0,
                                              marginTop: 6,
                                              maxWidth: 300,
                                              paddingBottom: 6,
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Rubik Text Style 12/18 Regular */}
                                          <Text
                                            style={StyleSheet.applyWidth(
                                              {
                                                color:
                                                  theme.colors
                                                    .communityTrueOption,
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                fontFamily: 'Rubik_400Regular',
                                                fontSize: 12,
                                                lineHeight: 18,
                                              },
                                              dimensions.width
                                            )}
                                            numberOfLines={3}
                                            ellipsizeMode={'tail'}
                                          >
                                            {
                                              'So how can advisors add Bitcoin exposure to client portfolios? Here are five routes you can take, listed from the most different unique locations. '
                                            }
                                          </Text>
                                        </View>
                                        {/* Third Row */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              flexGrow: 0,
                                              flexShrink: 0,
                                              paddingBottom: 12,
                                              paddingTop: 12,
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Flex for Image */}
                                          <View
                                            style={StyleSheet.applyWidth(
                                              {
                                                borderColor:
                                                  theme.colors.background,
                                                borderRadius: 12,
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                height: 200,
                                                overflow: 'hidden',
                                                width: 300,
                                              },
                                              dimensions.width
                                            )}
                                          >
                                            <Image
                                              style={StyleSheet.applyWidth(
                                                { height: 200, width: 300 },
                                                dimensions.width
                                              )}
                                              source={
                                                Images.AndreTaissin5OUMf1Mr5pUUnsplash
                                              }
                                              resizeMode={'cover'}
                                            />
                                          </View>
                                        </View>
                                        {/* Fourth Row */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              flexDirection: 'row',
                                              flexGrow: 0,
                                              flexShrink: 0,
                                              paddingBottom: 6,
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Action 1 Frame */}
                                          <View
                                            style={StyleSheet.applyWidth(
                                              {
                                                flexDirection: 'row',
                                                flexGrow: 1,
                                                flexShrink: 0,
                                                paddingBottom: 6,
                                                paddingTop: 6,
                                              },
                                              dimensions.width
                                            )}
                                          >
                                            {/* Icon Frame */}
                                            <View>
                                              <Checkbox
                                                onPress={newCheckboxValue => {
                                                  try {
                                                  } catch (err) {
                                                    console.error(err);
                                                  }
                                                }}
                                                size={18}
                                                checkedIcon={'AntDesign/heart'}
                                                uncheckedIcon={
                                                  'AntDesign/hearto'
                                                }
                                                color={
                                                  theme.colors
                                                    .communitySecondary
                                                }
                                                uncheckedColor={
                                                  theme.colors.communityIconFill
                                                }
                                              />
                                            </View>
                                            {/* Data Poiint */}
                                            <Text
                                              style={StyleSheet.applyWidth(
                                                {
                                                  color:
                                                    theme.colors
                                                      .communityMediumBlack,
                                                  fontFamily: 'Rubik_700Bold',
                                                  fontSize: 12,
                                                  lineHeight: 18,
                                                  marginLeft: 12,
                                                },
                                                dimensions.width
                                              )}
                                            >
                                              {'27.1k'}
                                            </Text>
                                          </View>
                                          {/* Action 2 Frame */}
                                          <View
                                            style={StyleSheet.applyWidth(
                                              {
                                                flexDirection: 'row',
                                                flexGrow: 1,
                                                flexShrink: 0,
                                                paddingBottom: 6,
                                                paddingTop: 6,
                                              },
                                              dimensions.width
                                            )}
                                          >
                                            {/* Icon Frame */}
                                            <View>
                                              <Checkbox
                                                onPress={newCheckboxValue => {
                                                  try {
                                                  } catch (err) {
                                                    console.error(err);
                                                  }
                                                }}
                                                size={18}
                                                checkedIcon={
                                                  'Ionicons/chatbubbles'
                                                }
                                                uncheckedIcon={
                                                  'Ionicons/chatbubbles'
                                                }
                                                color={
                                                  theme.colors.communityIconFill
                                                }
                                                uncheckedColor={
                                                  theme.colors.communityIconFill
                                                }
                                              />
                                            </View>
                                            {/* Data Poiint */}
                                            <Text
                                              style={StyleSheet.applyWidth(
                                                {
                                                  color:
                                                    theme.colors
                                                      .communityMediumBlack,
                                                  fontFamily: 'Rubik_700Bold',
                                                  fontSize: 12,
                                                  lineHeight: 18,
                                                  marginLeft: 12,
                                                },
                                                dimensions.width
                                              )}
                                            >
                                              {'3.3k'}
                                            </Text>
                                          </View>
                                          {/* Action 3 Frame */}
                                          <View
                                            style={StyleSheet.applyWidth(
                                              {
                                                flexDirection: 'row',
                                                flexGrow: 1,
                                                flexShrink: 0,
                                                paddingBottom: 6,
                                                paddingTop: 6,
                                              },
                                              dimensions.width
                                            )}
                                          >
                                            {/* Icon Frame */}
                                            <View>
                                              <Checkbox
                                                onPress={newCheckboxValue => {
                                                  try {
                                                  } catch (err) {
                                                    console.error(err);
                                                  }
                                                }}
                                                size={18}
                                                checkedIcon={'AntDesign/eye'}
                                                uncheckedIcon={'AntDesign/eye'}
                                                color={
                                                  theme.colors.communityIconFill
                                                }
                                                uncheckedColor={
                                                  theme.colors.communityIconFill
                                                }
                                              />
                                            </View>
                                            {/* Data Poiint */}
                                            <Text
                                              style={StyleSheet.applyWidth(
                                                {
                                                  color:
                                                    theme.colors
                                                      .communityMediumBlack,
                                                  fontFamily: 'Rubik_700Bold',
                                                  fontSize: 12,
                                                  lineHeight: 18,
                                                  marginLeft: 12,
                                                },
                                                dimensions.width
                                              )}
                                            >
                                              {'104k'}
                                            </Text>
                                          </View>
                                          {/* Flex Frame for Touchable */}
                                          <View>
                                            <Touchable>
                                              {/* Flex Frame for Icons */}
                                              <View
                                                style={StyleSheet.applyWidth(
                                                  {
                                                    paddingBottom: 6,
                                                    paddingLeft: 6,
                                                    paddingRight: 6,
                                                    paddingTop: 6,
                                                  },
                                                  dimensions.width
                                                )}
                                              >
                                                <Icon
                                                  name={'Ionicons/ios-share'}
                                                  size={18}
                                                  color={
                                                    theme.colors
                                                      .communityMediumBlack
                                                  }
                                                />
                                              </View>
                                            </Touchable>
                                          </View>
                                        </View>
                                      </View>
                                    </View>
                                  </View>
                                </Touchable>
                              </View>
                            </>
                          );
                        }}
                        numColumns={1}
                      />
                    );
                  }}
                </ExampleDataForListsApi.FetchGetSampleDataList10GET>
              </View>
            )}
          </>
          {/* Content Frame Tab 3 */}
          <>
            {!menuTab3 ? null : (
              <View
                style={StyleSheet.applyWidth(
                  { flexGrow: 1, flexShrink: 0 },
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
                        listKey={'7RyOVGcP'}
                        keyExtractor={listData =>
                          listData?.id ||
                          listData?.uuid ||
                          JSON.stringify(listData)
                        }
                        renderItem={({ item }) => {
                          const listData = item;
                          return (
                            <>
                              {/* Flex Frame for Touchable */}
                              <View
                                style={StyleSheet.applyWidth(
                                  { marginBottom: 12 },
                                  dimensions.width
                                )}
                              >
                                <Touchable
                                  onPress={() => {
                                    try {
                                      setModalOpen(true);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                >
                                  {/* List Frame */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        flexGrow: 1,
                                        flexShrink: 0,
                                        paddingLeft: 18,
                                        paddingRight: 18,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Record Frame */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          backgroundColor:
                                            theme.colors.communityIconBGColor,
                                          borderRadius: 12,
                                          flexDirection: 'row',
                                          flexGrow: 0,
                                          flexShrink: 0,
                                          paddingBottom: 12,
                                          paddingLeft: 18,
                                          paddingRight: 18,
                                          paddingTop: 12,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {/* Left Side */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          { flexGrow: 0, flexShrink: 0 },
                                          dimensions.width
                                        )}
                                      ></View>
                                      {/* Middle Grow Column */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          {
                                            flexGrow: 1,
                                            flexShrink: 0,
                                            justifyContent: 'center',
                                            marginLeft: 12,
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {/* Data Title */}
                                        <Text
                                          style={StyleSheet.applyWidth(
                                            {
                                              color:
                                                theme.colors.communityDarkUI,
                                              fontFamily: 'Rubik_700Bold',
                                              fontSize: 12,
                                              lineHeight: 18,
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {'Daniel Allison'}
                                        </Text>
                                        {/* Data Point */}
                                        <Text
                                          style={StyleSheet.applyWidth(
                                            {
                                              color:
                                                theme.colors.communityDarkUI,
                                              fontFamily: 'Rubik_400Regular',
                                              fontSize: 11,
                                              lineHeight: 17,
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {'@DanielAlison'}
                                        </Text>
                                      </View>
                                      {/* Right Column */}
                                      <View>
                                        {/* Flex Frame for Icons */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              flexGrow: 1,
                                              flexShrink: 0,
                                              justifyContent: 'center',
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          <Icon
                                            size={24}
                                            color={
                                              theme.colors.communityPrimaryAlt
                                            }
                                            name={'FontAwesome/heart'}
                                          />
                                        </View>
                                      </View>
                                    </View>
                                  </View>
                                </Touchable>
                              </View>
                            </>
                          );
                        }}
                        numColumns={1}
                      />
                    );
                  }}
                </ExampleDataForListsApi.FetchGetSampleDataList10GET>
              </View>
            )}
          </>
        </View>
        {/* Three Tabs Modal Frame */}
        <>
          {!modalOpen ? null : (
            <Modal
              visible={modalOpen}
              animationType={'slide'}
              presentationStyle={'pageSheet'}
              transparent={true}
            >
              {/* Modal Actions Frame */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors.communityModalOpacityOverlay,
                  },
                  dimensions.width
                )}
              >
                {/* Navigation Frame */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor:
                        theme.colors.communityModalOpacityOverlay,
                      flexDirection: 'row',
                      flexGrow: 0,
                      flexShrink: 0,
                      paddingBottom: 12,
                      paddingLeft: 12,
                      paddingRight: 18,
                      paddingTop: 12,
                      zIndex: 12,
                    },
                    dimensions.width
                  )}
                >
                  {/* Left Frame */}
                  <View></View>
                  {/* Middle Frame */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        flexGrow: 1,
                        flexShrink: 0,
                        paddingLeft: 12,
                        paddingRight: 12,
                      },
                      dimensions.width
                    )}
                  ></View>
                  {/* Right Frame */}
                  <View
                    style={StyleSheet.applyWidth(
                      { flexDirection: 'row' },
                      dimensions.width
                    )}
                  >
                    {/* Flex Frame for Touchable */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          flexGrow: 1,
                          flexShrink: 0,
                          justifyContent: 'center',
                          marginRight: 12,
                        },
                        dimensions.width
                      )}
                    >
                      <Touchable
                        onPress={() => {
                          try {
                            setModalOpen(false);
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                      >
                        <Circle
                          size={31}
                          bgColor={theme.colors.communityModalOpacityOverlay}
                        >
                          <Icon
                            color={theme.colors.communityWhite}
                            name={'AntDesign/closecircle'}
                            size={18}
                          />
                        </Circle>
                      </Touchable>
                    </View>
                  </View>
                </View>
              </View>
              {/* Actions Frame Mock */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors.communityWhite,
                    borderTopLeftRadius: 18,
                    borderTopRightRadius: 18,
                    flexGrow: 0,
                    flexShrink: 0,
                  },
                  dimensions.width
                )}
              >
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
                      { flexDirection: 'row' },
                      dimensions.width
                    )}
                  >
                    {/* Option 1 Frame */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          flex: 1,
                          flexGrow: 1,
                          flexShrink: 0,
                          paddingBottom: 12,
                          paddingLeft: 6,
                          paddingRight: 6,
                          paddingTop: 12,
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
                                    backgroundColor:
                                      theme.colors.communityTrueOption,
                                    borderBottomWidth: 2,
                                    borderColor: theme.colors.communityDarkUI,
                                    borderLeftWidth: 2,
                                    borderRadius: 12,
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
                        {menuTab1 ? null : (
                          <View>
                            <Touchable
                              onPress={() => {
                                try {
                                  setMenuTab1(true);
                                  setMenuTab2(false);
                                  setMenuTab3(false);
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
                                    backgroundColor: theme.colors.background,
                                    borderBottomWidth: 2,
                                    borderColor: theme.colors.communityBorder,
                                    borderLeftWidth: 2,
                                    borderRadius: 12,
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
                                      color: theme.colors.communityIconFill,
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
                    {/* Option 2 Frame */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          flex: 1,
                          flexGrow: 1,
                          flexShrink: 0,
                          paddingBottom: 12,
                          paddingLeft: 6,
                          paddingRight: 6,
                          paddingTop: 12,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Flex Frame for Touchable */}
                      <>
                        {!menuTab2 ? null : (
                          <View>
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
                                    backgroundColor:
                                      theme.colors.communityTrueOption,
                                    borderBottomWidth: 2,
                                    borderColor: theme.colors.communityDarkUI,
                                    borderLeftWidth: 2,
                                    borderRadius: 12,
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
                                  {'Posts'}
                                </Text>
                              </View>
                            </Touchable>
                          </View>
                        )}
                      </>
                      {/* Flex Frame for Touchable */}
                      <>
                        {menuTab2 ? null : (
                          <View>
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
                              {/* Button Frame False */}
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    alignItems: 'center',
                                    backgroundColor: theme.colors.background,
                                    borderBottomWidth: 2,
                                    borderColor: theme.colors.communityBorder,
                                    borderLeftWidth: 2,
                                    borderRadius: 12,
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
                                      color: theme.colors.communityIconFill,
                                      fontFamily: 'Rubik_400Regular',
                                      fontSize: 12,
                                      lineHeight: 18,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Posts'}
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
                          flex: 1,
                          flexGrow: 1,
                          flexShrink: 0,
                          paddingBottom: 12,
                          paddingLeft: 6,
                          paddingRight: 6,
                          paddingTop: 12,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Flex Frame for Touchable */}
                      <>
                        {!menuTab3 ? null : (
                          <View>
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
                                    backgroundColor:
                                      theme.colors.communityTrueOption,
                                    borderBottomWidth: 2,
                                    borderColor: theme.colors.communityDarkUI,
                                    borderLeftWidth: 2,
                                    borderRadius: 12,
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
                                  {'Followers'}
                                </Text>
                              </View>
                            </Touchable>
                          </View>
                        )}
                      </>
                      {/* Flex Frame for Touchable */}
                      <>
                        {menuTab3 ? null : (
                          <View>
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
                              {/* Button Frame False */}
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    alignItems: 'center',
                                    backgroundColor: theme.colors.background,
                                    borderBottomWidth: 2,
                                    borderColor: theme.colors.communityBorder,
                                    borderLeftWidth: 2,
                                    borderRadius: 12,
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
                                      color: theme.colors.communityIconFill,
                                      fontFamily: 'Rubik_400Regular',
                                      fontSize: 12,
                                      lineHeight: 18,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Followers'}
                                </Text>
                              </View>
                            </Touchable>
                          </View>
                        )}
                      </>
                    </View>
                  </View>
                </View>
              </View>
              {/* Content Frame */}
              <ScrollView
                contentContainerStyle={StyleSheet.applyWidth(
                  { backgroundColor: theme.colors.communityWhite },
                  dimensions.width
                )}
                showsVerticalScrollIndicator={true}
                bounces={true}
              >
                {/* Tabs Frame */}
                <View
                  style={StyleSheet.applyWidth(
                    { flexGrow: 1, flexShrink: 0 },
                    dimensions.width
                  )}
                >
                  {/* Tab 1 Frame */}
                  <>
                    {!menuTab1 ? null : (
                      <View
                        style={StyleSheet.applyWidth(
                          { flexGrow: 1, flexShrink: 0 },
                          dimensions.width
                        )}
                      >
                        <ExampleDataForListsApi.FetchGetSampleDataList10GET>
                          {({
                            loading,
                            error,
                            data,
                            refetchGetSampleDataList10,
                          }) => {
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
                                listKey={'dAyarjlY'}
                                keyExtractor={listData =>
                                  listData?.id ||
                                  listData?.uuid ||
                                  JSON.stringify(listData)
                                }
                                renderItem={({ item }) => {
                                  const listData = item;
                                  return (
                                    <>
                                      {/* Flex Frame for Touchable */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          { marginBottom: 12 },
                                          dimensions.width
                                        )}
                                      >
                                        <Touchable>
                                          {/* List Frame */}
                                          <View
                                            style={StyleSheet.applyWidth(
                                              {
                                                flexGrow: 1,
                                                flexShrink: 0,
                                                paddingLeft: 18,
                                                paddingRight: 18,
                                              },
                                              dimensions.width
                                            )}
                                          >
                                            {/* Record Frame */}
                                            <View
                                              style={StyleSheet.applyWidth(
                                                {
                                                  backgroundColor:
                                                    theme.colors
                                                      .communityIconBGColor,
                                                  borderRadius: 12,
                                                  flexDirection: 'row',
                                                  flexGrow: 0,
                                                  flexShrink: 0,
                                                  paddingBottom: 12,
                                                  paddingLeft: 18,
                                                  paddingRight: 18,
                                                  paddingTop: 12,
                                                },
                                                dimensions.width
                                              )}
                                            >
                                              {/* Left Side */}
                                              <View
                                                style={StyleSheet.applyWidth(
                                                  {
                                                    flexGrow: 0,
                                                    flexShrink: 0,
                                                  },
                                                  dimensions.width
                                                )}
                                              >
                                                {/* Image Frame */}
                                                <View
                                                  style={StyleSheet.applyWidth(
                                                    {
                                                      flexGrow: 0,
                                                      flexShrink: 0,
                                                    },
                                                    dimensions.width
                                                  )}
                                                >
                                                  {/* Flex Frame for Icons */}
                                                  <View>
                                                    <Icon
                                                      name={
                                                        'Entypo/game-controller'
                                                      }
                                                      size={50}
                                                      color={
                                                        theme.colors
                                                          .communityDarkUI
                                                      }
                                                    />
                                                  </View>
                                                </View>
                                              </View>
                                              {/* Middle Grow Column */}
                                              <View
                                                style={StyleSheet.applyWidth(
                                                  {
                                                    flexGrow: 1,
                                                    flexShrink: 0,
                                                    justifyContent: 'center',
                                                    marginLeft: 12,
                                                  },
                                                  dimensions.width
                                                )}
                                              >
                                                {/* Data Title */}
                                                <Text
                                                  style={StyleSheet.applyWidth(
                                                    {
                                                      color:
                                                        theme.colors
                                                          .communityDarkUI,
                                                      fontFamily:
                                                        'Rubik_700Bold',
                                                      fontSize: 12,
                                                      lineHeight: 18,
                                                    },
                                                    dimensions.width
                                                  )}
                                                >
                                                  {'Game Night'}
                                                </Text>
                                                {/* Data Point */}
                                                <Text
                                                  style={StyleSheet.applyWidth(
                                                    {
                                                      color:
                                                        theme.colors
                                                          .communityDarkUI,
                                                      fontFamily:
                                                        'Rubik_400Regular',
                                                      fontSize: 11,
                                                      lineHeight: 17,
                                                    },
                                                    dimensions.width
                                                  )}
                                                >
                                                  {'Irvine Promenade'}
                                                </Text>
                                              </View>
                                              {/* Right Column */}
                                              <View
                                                style={StyleSheet.applyWidth(
                                                  { justifyContent: 'center' },
                                                  dimensions.width
                                                )}
                                              >
                                                {/* Flex Frame */}
                                                <View
                                                  style={StyleSheet.applyWidth(
                                                    {
                                                      alignItems: 'center',
                                                      backgroundColor:
                                                        theme.colors
                                                          .communityWhite,
                                                      borderRadius: 12,
                                                      flexGrow: 0,
                                                      flexShrink: 0,
                                                      justifyContent: 'center',
                                                      paddingBottom: 6,
                                                      paddingLeft: 6,
                                                      paddingRight: 6,
                                                      paddingTop: 6,
                                                    },
                                                    dimensions.width
                                                  )}
                                                >
                                                  {/* Rubik Headline Style 18/24 Bold */}
                                                  <Text
                                                    style={StyleSheet.applyWidth(
                                                      {
                                                        color:
                                                          theme.colors
                                                            .communityPrimaryAlt,
                                                        fontFamily:
                                                          'Rubik_700Bold',
                                                        fontSize: 11,
                                                        lineHeight: 17,
                                                        paddingLeft: 3,
                                                        paddingRight: 3,
                                                      },
                                                      dimensions.width
                                                    )}
                                                  >
                                                    {'RSVP'}
                                                  </Text>
                                                </View>
                                              </View>
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
                        </ExampleDataForListsApi.FetchGetSampleDataList10GET>
                      </View>
                    )}
                  </>
                  {/* Tab 2 Frame */}
                  <>
                    {!menuTab2 ? null : (
                      <View
                        style={StyleSheet.applyWidth(
                          { flexGrow: 1, flexShrink: 0 },
                          dimensions.width
                        )}
                      >
                        <ExampleDataForListsApi.FetchGetSampleDataList10GET>
                          {({
                            loading,
                            error,
                            data,
                            refetchGetSampleDataList10,
                          }) => {
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
                                listKey={'KXp9BL9w'}
                                keyExtractor={listData =>
                                  listData?.id ||
                                  listData?.uuid ||
                                  JSON.stringify(listData)
                                }
                                renderItem={({ item }) => {
                                  const listData = item;
                                  return (
                                    <>
                                      {/* Flex Frame for Touchable */}
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
                                                borderBottomWidth: 2,
                                                borderColor:
                                                  theme.colors.communityBorder,
                                                flexDirection: 'row',
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                paddingLeft: 18,
                                                paddingRight: 18,
                                              },
                                              dimensions.width
                                            )}
                                          >
                                            {/* Left Side Frame */}
                                            <View
                                              style={StyleSheet.applyWidth(
                                                { paddingTop: 12 },
                                                dimensions.width
                                              )}
                                            >
                                              {/* Circle Image Frame */}
                                              <View>
                                                <CircleImage
                                                  source={
                                                    Images.JoelMottLaK153ghdigUnsplash
                                                  }
                                                  size={38}
                                                />
                                              </View>
                                            </View>
                                            {/* New Right Side */}
                                            <View
                                              style={StyleSheet.applyWidth(
                                                {
                                                  flexGrow: 0,
                                                  flexShrink: 0,
                                                  paddingBottom: 12,
                                                  paddingLeft: 12,
                                                  paddingRight: 12,
                                                  paddingTop: 12,
                                                },
                                                dimensions.width
                                              )}
                                            >
                                              {/* Top Row Frame */}
                                              <View
                                                style={StyleSheet.applyWidth(
                                                  {
                                                    flexGrow: 0,
                                                    flexShrink: 0,
                                                    paddingBottom: 6,
                                                  },
                                                  dimensions.width
                                                )}
                                              >
                                                {/* Rubik Headline Style 18/24 Bold */}
                                                <Text
                                                  style={StyleSheet.applyWidth(
                                                    {
                                                      color:
                                                        theme.colors
                                                          .communityTrueOption,
                                                      fontFamily:
                                                        'Rubik_700Bold',
                                                      fontSize: 13,
                                                      lineHeight: 19,
                                                    },
                                                    dimensions.width
                                                  )}
                                                  numberOfLines={2}
                                                >
                                                  {'Floyd Miles'}
                                                </Text>
                                                {/* Rubik Text Style 12/18 Regular */}
                                                <Text
                                                  style={StyleSheet.applyWidth(
                                                    {
                                                      color:
                                                        theme.colors
                                                          .communityLightBlack,
                                                      fontFamily:
                                                        'Rubik_400Regular',
                                                      fontSize: 12,
                                                      lineHeight: 18,
                                                    },
                                                    dimensions.width
                                                  )}
                                                >
                                                  {'@FloydMiles'}
                                                </Text>
                                              </View>
                                              {/* Second Row Frame */}
                                              <View
                                                style={StyleSheet.applyWidth(
                                                  {
                                                    flexGrow: 0,
                                                    flexShrink: 0,
                                                    marginTop: 6,
                                                    maxWidth: 300,
                                                    paddingBottom: 6,
                                                  },
                                                  dimensions.width
                                                )}
                                              >
                                                {/* Rubik Text Style 12/18 Regular */}
                                                <Text
                                                  style={StyleSheet.applyWidth(
                                                    {
                                                      color:
                                                        theme.colors
                                                          .communityTrueOption,
                                                      flexGrow: 0,
                                                      flexShrink: 0,
                                                      fontFamily:
                                                        'Rubik_400Regular',
                                                      fontSize: 12,
                                                      lineHeight: 18,
                                                    },
                                                    dimensions.width
                                                  )}
                                                  numberOfLines={3}
                                                  ellipsizeMode={'tail'}
                                                >
                                                  {
                                                    'So how can advisors add Bitcoin exposure to client portfolios? Here are five routes you can take, listed from the most different unique locations. '
                                                  }
                                                </Text>
                                              </View>
                                              {/* Third Row */}
                                              <View
                                                style={StyleSheet.applyWidth(
                                                  {
                                                    flexGrow: 0,
                                                    flexShrink: 0,
                                                    paddingBottom: 12,
                                                    paddingTop: 12,
                                                  },
                                                  dimensions.width
                                                )}
                                              >
                                                {/* Flex for Image */}
                                                <View
                                                  style={StyleSheet.applyWidth(
                                                    {
                                                      borderColor:
                                                        theme.colors.background,
                                                      borderRadius: 12,
                                                      flexGrow: 0,
                                                      flexShrink: 0,
                                                      height: 200,
                                                      overflow: 'hidden',
                                                      width: 300,
                                                    },
                                                    dimensions.width
                                                  )}
                                                >
                                                  <Image
                                                    style={StyleSheet.applyWidth(
                                                      {
                                                        height: 200,
                                                        width: 300,
                                                      },
                                                      dimensions.width
                                                    )}
                                                    source={
                                                      Images.AndreTaissin5OUMf1Mr5pUUnsplash
                                                    }
                                                    resizeMode={'cover'}
                                                  />
                                                </View>
                                              </View>
                                              {/* Fourth Row */}
                                              <View
                                                style={StyleSheet.applyWidth(
                                                  {
                                                    flexDirection: 'row',
                                                    flexGrow: 0,
                                                    flexShrink: 0,
                                                    paddingBottom: 6,
                                                  },
                                                  dimensions.width
                                                )}
                                              >
                                                {/* Action 1 Frame */}
                                                <View
                                                  style={StyleSheet.applyWidth(
                                                    {
                                                      flexDirection: 'row',
                                                      flexGrow: 1,
                                                      flexShrink: 0,
                                                      paddingBottom: 6,
                                                      paddingTop: 6,
                                                    },
                                                    dimensions.width
                                                  )}
                                                >
                                                  {/* Icon Frame */}
                                                  <View>
                                                    <Checkbox
                                                      onPress={newCheckboxValue => {
                                                        try {
                                                        } catch (err) {
                                                          console.error(err);
                                                        }
                                                      }}
                                                      size={18}
                                                      checkedIcon={
                                                        'AntDesign/heart'
                                                      }
                                                      uncheckedIcon={
                                                        'AntDesign/hearto'
                                                      }
                                                      color={
                                                        theme.colors
                                                          .communitySecondary
                                                      }
                                                      uncheckedColor={
                                                        theme.colors
                                                          .communityIconFill
                                                      }
                                                    />
                                                  </View>
                                                  {/* Data Poiint */}
                                                  <Text
                                                    style={StyleSheet.applyWidth(
                                                      {
                                                        color:
                                                          theme.colors
                                                            .communityMediumBlack,
                                                        fontFamily:
                                                          'Rubik_700Bold',
                                                        fontSize: 12,
                                                        lineHeight: 18,
                                                        marginLeft: 12,
                                                      },
                                                      dimensions.width
                                                    )}
                                                  >
                                                    {'27.1k'}
                                                  </Text>
                                                </View>
                                                {/* Action 2 Frame */}
                                                <View
                                                  style={StyleSheet.applyWidth(
                                                    {
                                                      flexDirection: 'row',
                                                      flexGrow: 1,
                                                      flexShrink: 0,
                                                      paddingBottom: 6,
                                                      paddingTop: 6,
                                                    },
                                                    dimensions.width
                                                  )}
                                                >
                                                  {/* Icon Frame */}
                                                  <View>
                                                    <Checkbox
                                                      onPress={newCheckboxValue => {
                                                        try {
                                                        } catch (err) {
                                                          console.error(err);
                                                        }
                                                      }}
                                                      size={18}
                                                      checkedIcon={
                                                        'Ionicons/chatbubbles'
                                                      }
                                                      uncheckedIcon={
                                                        'Ionicons/chatbubbles'
                                                      }
                                                      color={
                                                        theme.colors
                                                          .communityIconFill
                                                      }
                                                      uncheckedColor={
                                                        theme.colors
                                                          .communityIconFill
                                                      }
                                                    />
                                                  </View>
                                                  {/* Data Poiint */}
                                                  <Text
                                                    style={StyleSheet.applyWidth(
                                                      {
                                                        color:
                                                          theme.colors
                                                            .communityMediumBlack,
                                                        fontFamily:
                                                          'Rubik_700Bold',
                                                        fontSize: 12,
                                                        lineHeight: 18,
                                                        marginLeft: 12,
                                                      },
                                                      dimensions.width
                                                    )}
                                                  >
                                                    {'3.3k'}
                                                  </Text>
                                                </View>
                                                {/* Action 3 Frame */}
                                                <View
                                                  style={StyleSheet.applyWidth(
                                                    {
                                                      flexDirection: 'row',
                                                      flexGrow: 1,
                                                      flexShrink: 0,
                                                      paddingBottom: 6,
                                                      paddingTop: 6,
                                                    },
                                                    dimensions.width
                                                  )}
                                                >
                                                  {/* Icon Frame */}
                                                  <View>
                                                    <Checkbox
                                                      onPress={newCheckboxValue => {
                                                        try {
                                                        } catch (err) {
                                                          console.error(err);
                                                        }
                                                      }}
                                                      size={18}
                                                      checkedIcon={
                                                        'AntDesign/eye'
                                                      }
                                                      uncheckedIcon={
                                                        'AntDesign/eye'
                                                      }
                                                      color={
                                                        theme.colors
                                                          .communityIconFill
                                                      }
                                                      uncheckedColor={
                                                        theme.colors
                                                          .communityIconFill
                                                      }
                                                    />
                                                  </View>
                                                  {/* Data Poiint */}
                                                  <Text
                                                    style={StyleSheet.applyWidth(
                                                      {
                                                        color:
                                                          theme.colors
                                                            .communityMediumBlack,
                                                        fontFamily:
                                                          'Rubik_700Bold',
                                                        fontSize: 12,
                                                        lineHeight: 18,
                                                        marginLeft: 12,
                                                      },
                                                      dimensions.width
                                                    )}
                                                  >
                                                    {'104k'}
                                                  </Text>
                                                </View>
                                                {/* Flex Frame for Touchable */}
                                                <View>
                                                  <Touchable>
                                                    {/* Flex Frame for Icons */}
                                                    <View
                                                      style={StyleSheet.applyWidth(
                                                        {
                                                          paddingBottom: 6,
                                                          paddingLeft: 6,
                                                          paddingRight: 6,
                                                          paddingTop: 6,
                                                        },
                                                        dimensions.width
                                                      )}
                                                    >
                                                      <Icon
                                                        name={
                                                          'Ionicons/ios-share'
                                                        }
                                                        size={18}
                                                        color={
                                                          theme.colors
                                                            .communityMediumBlack
                                                        }
                                                      />
                                                    </View>
                                                  </Touchable>
                                                </View>
                                              </View>
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
                        </ExampleDataForListsApi.FetchGetSampleDataList10GET>
                      </View>
                    )}
                  </>
                  {/* Tab 3 Frame */}
                  <>
                    {!menuTab3 ? null : (
                      <View
                        style={StyleSheet.applyWidth(
                          { flexGrow: 1, flexShrink: 0 },
                          dimensions.width
                        )}
                      >
                        <ExampleDataForListsApi.FetchGetSampleDataList10GET>
                          {({
                            loading,
                            error,
                            data,
                            refetchGetSampleDataList10,
                          }) => {
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
                                listKey={'j0vY6RJo'}
                                keyExtractor={listData =>
                                  listData?.id ||
                                  listData?.uuid ||
                                  JSON.stringify(listData)
                                }
                                renderItem={({ item }) => {
                                  const listData = item;
                                  return (
                                    <>
                                      {/* Flex Frame for Touchable */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          { marginBottom: 12 },
                                          dimensions.width
                                        )}
                                      >
                                        <Touchable>
                                          {/* List Frame */}
                                          <View
                                            style={StyleSheet.applyWidth(
                                              {
                                                flexGrow: 1,
                                                flexShrink: 0,
                                                paddingLeft: 18,
                                                paddingRight: 18,
                                              },
                                              dimensions.width
                                            )}
                                          >
                                            {/* Record Frame */}
                                            <View
                                              style={StyleSheet.applyWidth(
                                                {
                                                  backgroundColor:
                                                    theme.colors
                                                      .communityIconBGColor,
                                                  borderRadius: 12,
                                                  flexDirection: 'row',
                                                  flexGrow: 0,
                                                  flexShrink: 0,
                                                  paddingBottom: 12,
                                                  paddingLeft: 18,
                                                  paddingRight: 18,
                                                  paddingTop: 12,
                                                },
                                                dimensions.width
                                              )}
                                            >
                                              {/* Left Side */}
                                              <View
                                                style={StyleSheet.applyWidth(
                                                  {
                                                    flexGrow: 0,
                                                    flexShrink: 0,
                                                  },
                                                  dimensions.width
                                                )}
                                              >
                                                {/* Image Frame */}
                                                <View
                                                  style={StyleSheet.applyWidth(
                                                    {
                                                      flexGrow: 0,
                                                      flexShrink: 0,
                                                    },
                                                    dimensions.width
                                                  )}
                                                >
                                                  <Circle
                                                    size={42}
                                                    bgColor={
                                                      theme.colors
                                                        .communityWhite
                                                    }
                                                  >
                                                    <CircleImage
                                                      source={
                                                        Images.LolaRoseZcHseJqAeEcUnsplash
                                                      }
                                                      size={36}
                                                    />
                                                  </Circle>
                                                </View>
                                              </View>
                                              {/* Middle Grow Column */}
                                              <View
                                                style={StyleSheet.applyWidth(
                                                  {
                                                    flexGrow: 1,
                                                    flexShrink: 0,
                                                    justifyContent: 'center',
                                                    marginLeft: 12,
                                                  },
                                                  dimensions.width
                                                )}
                                              >
                                                {/* Data Title */}
                                                <Text
                                                  style={StyleSheet.applyWidth(
                                                    {
                                                      color:
                                                        theme.colors
                                                          .communityDarkUI,
                                                      fontFamily:
                                                        'Rubik_700Bold',
                                                      fontSize: 12,
                                                      lineHeight: 18,
                                                    },
                                                    dimensions.width
                                                  )}
                                                >
                                                  {'Daniel Allison'}
                                                </Text>
                                                {/* Data Point */}
                                                <Text
                                                  style={StyleSheet.applyWidth(
                                                    {
                                                      color:
                                                        theme.colors
                                                          .communityDarkUI,
                                                      fontFamily:
                                                        'Rubik_400Regular',
                                                      fontSize: 11,
                                                      lineHeight: 17,
                                                    },
                                                    dimensions.width
                                                  )}
                                                >
                                                  {'@DanielAlison'}
                                                </Text>
                                              </View>
                                              {/* Right Column */}
                                              <View>
                                                {/* Flex Frame for Icons */}
                                                <View
                                                  style={StyleSheet.applyWidth(
                                                    {
                                                      flexGrow: 1,
                                                      flexShrink: 0,
                                                      justifyContent: 'center',
                                                    },
                                                    dimensions.width
                                                  )}
                                                >
                                                  <Icon
                                                    name={
                                                      'AntDesign/checkcircle'
                                                    }
                                                    size={24}
                                                    color={
                                                      theme.colors
                                                        .communityPrimaryAlt
                                                    }
                                                  />
                                                </View>
                                              </View>
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
                        </ExampleDataForListsApi.FetchGetSampleDataList10GET>
                      </View>
                    )}
                  </>
                </View>
              </ScrollView>
            </Modal>
          )}
        </>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(OpenTokenScreen);
