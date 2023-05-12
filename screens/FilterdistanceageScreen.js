import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Icon,
  ScreenContainer,
  Slider,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, TextInput, View, useWindowDimensions } from 'react-native';

const FilterdistanceageScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [AgeSlider, setAgeSlider] = React.useState(0);
  const [FilterBy, setFilterBy] = React.useState('');
  const [InterestedIn, setInterestedIn] = React.useState('');
  const [sliderValue, setSliderValue] = React.useState(0);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 10,
            marginRight: 10,
          },
          dimensions.width
        )}
      >
        {/* Back */}
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
            <Icon size={24} name={'AntDesign/arrowleft'} />
          </Touchable>
        </View>
        {/* Screen Heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Poppins_400Regular',
              fontSize: 15,
            },
            dimensions.width
          )}
        >
          {'All'}
        </Text>
        {/* Close */}
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
            <Icon size={24} name={'AntDesign/close'} />
          </Touchable>
        </View>
      </View>
      {/* Distance */}
      <View style={StyleSheet.applyWidth({ marginTop: 15 }, dimensions.width)}>
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 20,
              paddingRight: 20,
            },
            dimensions.width
          )}
        >
          <Text
            style={StyleSheet.applyWidth(
              {
                color: 'rgb(3, 2, 2)',
                fontFamily: 'Poppins_600SemiBold',
                fontSize: 15,
                paddingBottom: 15,
                paddingTop: 15,
              },
              dimensions.width
            )}
          >
            {'Distance'}
          </Text>

          <Text
            style={StyleSheet.applyWidth(
              {
                color: 'rgb(3, 2, 2)',
                fontFamily: 'Poppins_400Regular',
                fontSize: 13,
                paddingBottom: 15,
                paddingTop: 15,
              },
              dimensions.width
            )}
          >
            {sliderValue}
            {' km'}
          </Text>
        </View>
        <Slider
          onValueChange={newSliderValue => {
            try {
              setSliderValue(newSliderValue);
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            { marginLeft: 12, marginRight: 12 },
            dimensions.width
          )}
          thumbTintColor={theme.colors['Custom Color_5']}
          maximumValue={60}
          minimumTrackTintColor={theme.colors['Custom Color_5']}
          minimumValue={1}
          defaultValue={5}
        />
      </View>
      {/* Filter By */}
      <View
        style={StyleSheet.applyWidth(
          { marginTop: 15, paddingLeft: 20, paddingRight: 20 },
          dimensions.width
        )}
      >
        {/* Options */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', justifyContent: 'space-between' },
            dimensions.width
          )}
        >
          {/* All */}
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, marginRight: 10 },
              dimensions.width
            )}
          >
            {/* selected */}
            <>
              {!(FilterBy === 'all') ? null : (
                <Button
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors['Custom Color_4'],
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Custom Color_5'],
                      borderLeftWidth: 1,
                      borderRadius: 24,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      color: theme.colors['Custom Color_5'],
                      fontFamily: 'Poppins_400Regular',
                      fontSize: 15,
                      height: 48,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                  title={'All'}
                />
              )}
            </>
            {/* unselected */}
            <>
              {!(FilterBy !== 'all') ? null : (
                <Button
                  onPress={() => {
                    try {
                      setFilterBy('all');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors['Custom Color_3'],
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Custom Color_9'],
                      borderLeftWidth: 1,
                      borderRadius: 24,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      color: theme.colors['Custom Color_9'],
                      fontFamily: 'Poppins_400Regular',
                      fontSize: 15,
                      height: 48,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                  title={'All'}
                />
              )}
            </>
          </View>
          {/* Online */}
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, marginRight: 10 },
              dimensions.width
            )}
          >
            {/* selected */}
            <>
              {!(FilterBy === 'online') ? null : (
                <Button
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors['Custom Color_4'],
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Custom Color_5'],
                      borderLeftWidth: 1,
                      borderRadius: 24,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      color: theme.colors['Custom Color_5'],
                      fontFamily: 'Poppins_400Regular',
                      fontSize: 15,
                      height: 48,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                  title={'Online'}
                />
              )}
            </>
            {/* unselected */}
            <>
              {!(FilterBy !== 'online') ? null : (
                <Button
                  onPress={() => {
                    try {
                      setFilterBy('online');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors['Custom Color_3'],
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Custom Color_9'],
                      borderLeftWidth: 1,
                      borderRadius: 24,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      color: theme.colors['Custom Color_9'],
                      fontFamily: 'Poppins_400Regular',
                      fontSize: 15,
                      height: 48,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                  title={'Online'}
                />
              )}
            </>
          </View>
          {/* New */}
          <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
            {/* selected */}
            <>
              {!(FilterBy === 'new') ? null : (
                <Button
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors['Custom Color_4'],
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Custom Color_5'],
                      borderLeftWidth: 1,
                      borderRadius: 24,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      color: theme.colors['Custom Color_5'],
                      fontFamily: 'Poppins_400Regular',
                      fontSize: 15,
                      height: 48,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                  title={'New'}
                />
              )}
            </>
            {/* unselected */}
            <>
              {!(FilterBy !== 'new') ? null : (
                <Button
                  onPress={() => {
                    try {
                      setFilterBy('new');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors['Custom Color_3'],
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Custom Color_9'],
                      borderLeftWidth: 1,
                      borderRadius: 24,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      color: theme.colors['Custom Color_9'],
                      fontFamily: 'Poppins_400Regular',
                      fontSize: 15,
                      height: 48,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                  title={'New'}
                />
              )}
            </>
          </View>
        </View>
      </View>
      {/* Age */}
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, marginTop: 15 },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 20,
              paddingRight: 20,
            },
            dimensions.width
          )}
        >
          <Text
            style={StyleSheet.applyWidth(
              {
                color: 'rgb(3, 2, 2)',
                fontFamily: 'Poppins_600SemiBold',
                fontSize: 15,
                paddingBottom: 15,
                paddingTop: 15,
              },
              dimensions.width
            )}
          >
            {'Days active'}
          </Text>

          <Text
            style={StyleSheet.applyWidth(
              {
                color: 'rgb(3, 2, 2)',
                fontFamily: 'Poppins_400Regular',
                fontSize: 13,
                paddingBottom: 15,
                paddingTop: 15,
              },
              dimensions.width
            )}
          >
            {'Upto '}
            {AgeSlider}
          </Text>
        </View>
        <Slider
          onValueChange={newSliderValue => {
            try {
              setAgeSlider(newSliderValue);
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            { marginLeft: 12, marginRight: 12 },
            dimensions.width
          )}
          thumbTintColor={theme.colors['Custom Color_5']}
          maximumValue={60}
          minimumTrackTintColor={theme.colors['Custom Color_5']}
          minimumValue={18}
        />
      </View>
      {/* Apply */}
      <Button
        onPress={() => {
          try {
            navigation.goBack();
          } catch (err) {
            console.error(err);
          }
        }}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Custom Color_5'],
            borderRadius: 24,
            fontFamily: 'Poppins_500Medium',
            fontSize: 17,
            height: 48,
            marginBottom: 10,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 25,
            textAlign: 'center',
          },
          dimensions.width
        )}
        title={'Apply'}
      />
    </ScreenContainer>
  );
};

export default withTheme(FilterdistanceageScreen);
