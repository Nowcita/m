import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';
import LinkingConfiguration from './LinkingConfiguration.js';

import AccountScreen from './screens/AccountScreen';
import AppSettingsScreen from './screens/AppSettingsScreen';
import BlankScreen from './screens/BlankScreen';
import ChatdirectmessageScreen from './screens/ChatdirectmessageScreen';
import CreateAcc4CampingScreen from './screens/CreateAcc4CampingScreen';
import CreateAccommodation1RentProfessionalScreen_kg0e5hMg from './screens/CreateAccommodation1RentProfessionalScreen_kg0e5hMg';
import CreateAccommodation2BNBScreen from './screens/CreateAccommodation2BNBScreen';
import CreateAccommodation2RentPrivateScreen from './screens/CreateAccommodation2RentPrivateScreen';
import CreateAccommodationairbnbScreen from './screens/CreateAccommodationairbnbScreen';
import CreateAccommodationbnbScreen from './screens/CreateAccommodationbnbScreen';
import CreateAccommodationhotelScreen from './screens/CreateAccommodationhotelScreen';
import CreateBookings1AdvertsScreen from './screens/CreateBookings1AdvertsScreen';
import CreateBookings2AppointmentsScreen from './screens/CreateBookings2AppointmentsScreen';
import CreateBookings3EventsScreen from './screens/CreateBookings3EventsScreen';
import CreateBookings4ServicesScreen from './screens/CreateBookings4ServicesScreen';
import CreateBookings5ProductsScreen from './screens/CreateBookings5ProductsScreen';
import CreateBookings6OtherScreen from './screens/CreateBookings6OtherScreen';
import CreateBuySell2AdvertsScreen from './screens/CreateBuySell2AdvertsScreen';
import CreateBuySellConstructionCopyScreen from './screens/CreateBuySellConstructionCopyScreen';
import CreateBuySellConstructionScreen from './screens/CreateBuySellConstructionScreen';
import CreateBuySellDD1FarmScreen from './screens/CreateBuySellDD1FarmScreen';
import CreateBuySellDD4MotorScreen from './screens/CreateBuySellDD4MotorScreen';
import CreateBuySellDD5PropertyScreen from './screens/CreateBuySellDD5PropertyScreen';
import CreateBuySellDD7OtherScreen from './screens/CreateBuySellDD7OtherScreen';
import CreateBuySellHouseholdScreen from './screens/CreateBuySellHouseholdScreen';
import CreateBuySellITinputsScreen from './screens/CreateBuySellITinputsScreen';
import CreateDropOff1privateDriverScreen from './screens/CreateDropOff1privateDriverScreen';
import CreateDropOff2DeliveryScreen from './screens/CreateDropOff2DeliveryScreen';
import CreateDropOff3FooddeliveryScreen from './screens/CreateDropOff3FooddeliveryScreen';
import CreateDropOff4FreightdeliveryScreen from './screens/CreateDropOff4FreightdeliveryScreen';
import CreateDropOff5RideShareScreen from './screens/CreateDropOff5RideShareScreen';
import CreateDropOff6TransportationScreen from './screens/CreateDropOff6TransportationScreen';
import CreateFindAcc5RentaroomCopyScreen from './screens/CreateFindAcc5RentaroomCopyScreen';
import CreateFindAcc5RentaroomScreen from './screens/CreateFindAcc5RentaroomScreen';
import CreateFindAcc6HouseScreen from './screens/CreateFindAcc6HouseScreen';
import CreateFindAcc7ApartmentScreen from './screens/CreateFindAcc7ApartmentScreen';
import CreateFindAccommodationScreen from './screens/CreateFindAccommodationScreen';
import CreateFindAppointmentsBookingScreen from './screens/CreateFindAppointmentsBookingScreen';
import CreateFindBuySellScreen from './screens/CreateFindBuySellScreen';
import CreateFindDropoffScreen from './screens/CreateFindDropoffScreen';
import CreateFindFoodBeverageScreen from './screens/CreateFindFoodBeverageScreen';
import CreateFindOtherMarketScreen from './screens/CreateFindOtherMarketScreen';
import CreateFindScreen_cqvrEKO9 from './screens/CreateFindScreen_cqvrEKO9';
import CreateFindWorkProfoptScreen from './screens/CreateFindWorkProfoptScreen';
import CreateFindWorkScreen from './screens/CreateFindWorkScreen';
import CreateFindWorktaskoptScreen from './screens/CreateFindWorktaskoptScreen';
import CreateFood3ResturantScreen from './screens/CreateFood3ResturantScreen';
import CreateFood4BarScreen from './screens/CreateFood4BarScreen';
import CreateFood5CafeScreen from './screens/CreateFood5CafeScreen';
import CreateFoodBeverageInputScreen from './screens/CreateFoodBeverageInputScreen';
import CreateFoodBeverageMakeorderScreen from './screens/CreateFoodBeverageMakeorderScreen';
import CreateFoodBeverageScreen from './screens/CreateFoodBeverageScreen';
import CreateFoodTakeawayinputScreen from './screens/CreateFoodTakeawayinputScreen';
import CreateMarketCopyScreen from './screens/CreateMarketCopyScreen';
import CreateOtherMissalionaousScreen from './screens/CreateOtherMissalionaousScreen';
import CreateScreen from './screens/CreateScreen';
import CreateUserCVScreen from './screens/CreateUserCVScreen';
import CreateWork2ProfessionalScreen from './screens/CreateWork2ProfessionalScreen';
import CreateWork2TaskScreen from './screens/CreateWork2TaskScreen';
import CreateWorkTask1AdminScreen from './screens/CreateWorkTask1AdminScreen';
import CreateWorkTask2FarmingScreen from './screens/CreateWorkTask2FarmingScreen';
import CreateWorkTask3BuildingScreen from './screens/CreateWorkTask3BuildingScreen';
import CreateWorkTask4CreativeScreen from './screens/CreateWorkTask4CreativeScreen';
import CreateWorkTask5ITScreen from './screens/CreateWorkTask5ITScreen';
import CreateWorkTask6MechanicalScreen from './screens/CreateWorkTask6MechanicalScreen';
import CreateWorkTask7TransportScreen from './screens/CreateWorkTask7TransportScreen';
import CreateWorkTask8OtherScreen from './screens/CreateWorkTask8OtherScreen';
import CreateWorkTasksoptionsScreen from './screens/CreateWorkTasksoptionsScreen';
import CreateWorkprof1adminScreen from './screens/CreateWorkprof1adminScreen';
import CreateWorkprof2FarmingScreen from './screens/CreateWorkprof2FarmingScreen';
import CreateWorkprof3BuildingScreen from './screens/CreateWorkprof3BuildingScreen';
import CreateWorkprof4CreativeScreen from './screens/CreateWorkprof4CreativeScreen';
import CreateWorkprof5ITScreen from './screens/CreateWorkprof5ITScreen';
import CreateWorkprof6MechanicalScreen from './screens/CreateWorkprof6MechanicalScreen';
import CreateWorkprof7TransportScreen from './screens/CreateWorkprof7TransportScreen';
import CreateWorkprof8OtherScreen from './screens/CreateWorkprof8OtherScreen';
import CreateWorkprofessionalScreen from './screens/CreateWorkprofessionalScreen';
import DropBitBoxScreen from './screens/DropBitBoxScreen';
import FavBitsScreen_DOQ3NVI1 from './screens/FavBitsScreen_DOQ3NVI1';
import FeedCreatePinScreen from './screens/FeedCreatePinScreen';
import FeedFindPinScreen from './screens/FeedFindPinScreen';
import FilterdistanceageScreen from './screens/FilterdistanceageScreen';
import FindAccommodationScreen from './screens/FindAccommodationScreen';
import FindAppointmentsBookingScreen from './screens/FindAppointmentsBookingScreen';
import FindBuySellScreen from './screens/FindBuySellScreen';
import FindDropoffScreen from './screens/FindDropoffScreen';
import FindFoodBeverageScreen from './screens/FindFoodBeverageScreen';
import FindMarketScreen from './screens/FindMarketScreen';
import FindOtherMarketScreen from './screens/FindOtherMarketScreen';
import FindWorkProfoptCopyScreen from './screens/FindWorkProfoptCopyScreen';
import FindWorkScreen from './screens/FindWorkScreen';
import FindWorktaskoptCopyScreen from './screens/FindWorktaskoptCopyScreen';
import LanguageSettingsCopyScreen from './screens/LanguageSettingsCopyScreen';
import LeadsScreen from './screens/LeadsScreen';
import Locatepin1Screen from './screens/Locatepin1Screen';
import Locatepin2Screen from './screens/Locatepin2Screen';
import Locatepin3Screen from './screens/Locatepin3Screen';
import MapScreen from './screens/MapScreen';
import MyBitsScreen_0VRSuwzh from './screens/MyBitsScreen_0VRSuwzh';
import OpenTokenScreen from './screens/OpenTokenScreen';
import PinsprofileScreen from './screens/PinsprofileScreen';
import Step1URLTokenScreen from './screens/Step1URLTokenScreen';
import Step2LocatepinScreen from './screens/Step2LocatepinScreen';
import Step3PayPinitScreen from './screens/Step3PayPinitScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Placeholder() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131A2A',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 36,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 12,
          color: '#FFF',
        }}
      >
        Missing Screen
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        This screen is not in a navigator.
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        Go to Navigation mode, and click the + (plus) icon in the Navigator tab
        on the left side to add this screen to a Navigator.
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFF' }}>
        If the screen is in a Tab Navigator, make sure the screen is assigned to
        a tab in the Config panel on the right.
      </Text>
    </View>
  );
}
function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: { borderTopColor: 'transparent' },
      }}
    >
      <Tab.Screen
        name="LeadsScreen"
        component={LeadsScreen}
        options={{
          title: 'Leads',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialCommunityIcons/message-text"
              size={25}
              color={focused ? color : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FavBitsScreen_DOQ3NVI1"
        component={FavBitsScreen_DOQ3NVI1}
        options={{
          title: 'Fav. Bits',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialCommunityIcons/heart-multiple"
              size={25}
              color={focused ? color : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CreateFindScreen_cqvrEKO9"
        component={CreateFindScreen_cqvrEKO9}
        options={{
          title: 'Create & Find',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="AntDesign/plussquare"
              size={25}
              color={focused ? color : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyBitsScreen_0VRSuwzh"
        component={MyBitsScreen_0VRSuwzh}
        options={{
          title: 'My Bits',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Entypo/location"
              size={25}
              color={focused ? color : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          title: 'Account',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialIcons/account-circle"
              size={25}
              color={focused ? color : color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator>
        <Stack.Screen
          name="AppSettingsScreen"
          component={AppSettingsScreen}
          options={{
            title: 'App Settings',
          }}
        />
        <Stack.Screen
          name="CreateFindWorkProfoptScreen"
          component={CreateFindWorkProfoptScreen}
          options={{
            title: 'Create & Find; Work Prof opt',
          }}
        />
        <Stack.Screen
          name="CreateFindAppointmentsBookingScreen"
          component={CreateFindAppointmentsBookingScreen}
          options={{
            title: 'Create & Find; Appointments / Booking',
          }}
        />
        <Stack.Screen
          name="FindAppointmentsBookingScreen"
          component={FindAppointmentsBookingScreen}
          options={{
            title: 'Find; Appointments / Booking',
          }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            title: 'Welcome',
          }}
        />
        <Stack.Screen
          name="Locatepin1Screen"
          component={Locatepin1Screen}
          options={{
            title: 'Locate pin(1)',
          }}
        />
        <Stack.Screen
          name="FindOtherMarketScreen"
          component={FindOtherMarketScreen}
          options={{
            title: 'Find; Other Market',
          }}
        />
        <Stack.Screen
          name="LanguageSettingsCopyScreen"
          component={LanguageSettingsCopyScreen}
          options={{
            title: 'Language Settings Copy',
          }}
        />
        <Stack.Screen
          name="CreateFindAccommodationScreen"
          component={CreateFindAccommodationScreen}
          options={{
            title: 'Create & Find; Accommodation',
          }}
        />
        <Stack.Screen
          name="CreateFindBuySellScreen"
          component={CreateFindBuySellScreen}
          options={{
            title: 'Create & Find; Buy / Sell',
          }}
        />
        <Stack.Screen
          name="CreateFindDropoffScreen"
          component={CreateFindDropoffScreen}
          options={{
            title: 'Create & Find; Drop off',
          }}
        />
        <Stack.Screen
          name="CreateFindFoodBeverageScreen"
          component={CreateFindFoodBeverageScreen}
          options={{
            title: 'Create & Find; Food / Beverage',
          }}
        />
        <Stack.Screen
          name="PinsprofileScreen"
          component={PinsprofileScreen}
          options={{
            title: 'Pins -profile',
          }}
        />
        <Stack.Screen
          name="CreateDropOff1privateDriverScreen"
          component={CreateDropOff1privateDriverScreen}
          options={{
            title: 'Create: Drop Off/ 1 private Driver',
          }}
        />
        <Stack.Screen
          name="CreateBuySellDD1FarmScreen"
          component={CreateBuySellDD1FarmScreen}
          options={{
            title: 'Create; Buy /Sell/  DD/ 1 Farm',
          }}
        />
        <Stack.Screen
          name="CreateDropOff4FreightdeliveryScreen"
          component={CreateDropOff4FreightdeliveryScreen}
          options={{
            title: 'Create: Drop Off/ 4 Freight delivery',
          }}
        />
        <Stack.Screen
          name="CreateDropOff3FooddeliveryScreen"
          component={CreateDropOff3FooddeliveryScreen}
          options={{
            title: 'Create: Drop Off/ 3 Food delivery',
          }}
        />
        <Stack.Screen
          name="CreateDropOff5RideShareScreen"
          component={CreateDropOff5RideShareScreen}
          options={{
            title: 'Create: Drop Off/ 5 Ride Share',
          }}
        />
        <Stack.Screen
          name="CreateDropOff6TransportationScreen"
          component={CreateDropOff6TransportationScreen}
          options={{
            title: 'Create: Drop Off/ 6 Transportation ',
          }}
        />
        <Stack.Screen
          name="CreateBuySell2AdvertsScreen"
          component={CreateBuySell2AdvertsScreen}
          options={{
            title: 'Create; Buy /Sell/ 2 Adverts',
          }}
        />
        <Stack.Screen
          name="CreateBuySellDD4MotorScreen"
          component={CreateBuySellDD4MotorScreen}
          options={{
            title: 'Create; Buy /Sell/ DD/ 4 Motor ',
          }}
        />
        <Stack.Screen
          name="CreateBuySellDD5PropertyScreen"
          component={CreateBuySellDD5PropertyScreen}
          options={{
            title: 'Create; Buy /Sell/ DD / 5 Property',
          }}
        />
        <Stack.Screen
          name="CreateAccommodation1RentProfessionalScreen_kg0e5hMg"
          component={CreateAccommodation1RentProfessionalScreen_kg0e5hMg}
          options={{
            title: 'Create; Accommodation/ 1 Rent Professional',
          }}
        />
        <Stack.Screen
          name="CreateWorkprofessionalScreen"
          component={CreateWorkprofessionalScreen}
          options={{
            title: 'Create; Work / professional',
          }}
        />
        <Stack.Screen
          name="CreateWork2ProfessionalScreen"
          component={CreateWork2ProfessionalScreen}
          options={{
            title: 'Create; Work 2 / Professional',
          }}
        />
        <Stack.Screen
          name="CreateWork2TaskScreen"
          component={CreateWork2TaskScreen}
          options={{
            title: 'Create; Work 2 / Task',
          }}
        />
        <Stack.Screen
          name="CreateFoodBeverageScreen"
          component={CreateFoodBeverageScreen}
          options={{
            title: 'Create; Food/ Beverage',
          }}
        />
        <Stack.Screen
          name="CreateFoodBeverageMakeorderScreen"
          component={CreateFoodBeverageMakeorderScreen}
          options={{
            title: 'Create; Food/ Beverage - Make order',
          }}
        />
        <Stack.Screen
          name="FindWorkProfoptCopyScreen"
          component={FindWorkProfoptCopyScreen}
          options={{
            title: 'Find; Work Prof opt Copy',
          }}
        />
        <Stack.Screen
          name="CreateBuySellITinputsScreen"
          component={CreateBuySellITinputsScreen}
          options={{
            title: 'Create; Buy /Sell IT inputs',
          }}
        />
        <Stack.Screen
          name="CreateBuySellConstructionScreen"
          component={CreateBuySellConstructionScreen}
          options={{
            title: 'Create; Buy /Sell Construction',
          }}
        />
        <Stack.Screen
          name="CreateBuySellHouseholdScreen"
          component={CreateBuySellHouseholdScreen}
          options={{
            title: 'Create; Buy /Sell Household',
          }}
        />
        <Stack.Screen
          name="CreateBuySellDD7OtherScreen"
          component={CreateBuySellDD7OtherScreen}
          options={{
            title: 'Create; Buy /Sell/  DD/ 7 Other',
          }}
        />
        <Stack.Screen
          name="CreateFoodTakeawayinputScreen"
          component={CreateFoodTakeawayinputScreen}
          options={{
            title: 'Create; Food/ Takeaway input',
          }}
        />
        <Stack.Screen
          name="CreateFood4BarScreen"
          component={CreateFood4BarScreen}
          options={{
            title: 'Create; Food/ 4 Bar',
          }}
        />
        <Stack.Screen
          name="CreateFoodBeverageInputScreen"
          component={CreateFoodBeverageInputScreen}
          options={{
            title: 'Create; Food/  Beverage Input',
          }}
        />
        <Stack.Screen
          name="CreateFood3ResturantScreen"
          component={CreateFood3ResturantScreen}
          options={{
            title: 'Create; Food/ 3 Resturant',
          }}
        />
        <Stack.Screen
          name="CreateFood5CafeScreen"
          component={CreateFood5CafeScreen}
          options={{
            title: 'Create; Food/ 5 Cafe',
          }}
        />
        <Stack.Screen
          name="CreateWorkprof1adminScreen"
          component={CreateWorkprof1adminScreen}
          options={{
            title: 'Create; Work prof; 1 admin',
          }}
        />
        <Stack.Screen
          name="CreateWorkprof2FarmingScreen"
          component={CreateWorkprof2FarmingScreen}
          options={{
            title: 'Create; Work prof; 2 Farming',
          }}
        />
        <Stack.Screen
          name="CreateWorkprof3BuildingScreen"
          component={CreateWorkprof3BuildingScreen}
          options={{
            title: 'Create; Work prof; 3 Building',
          }}
        />
        <Stack.Screen
          name="CreateWorkprof4CreativeScreen"
          component={CreateWorkprof4CreativeScreen}
          options={{
            title: 'Create; Work prof; 4 Creative',
          }}
        />
        <Stack.Screen
          name="CreateWorkprof5ITScreen"
          component={CreateWorkprof5ITScreen}
          options={{
            title: 'Create; Work prof; 5 IT',
          }}
        />
        <Stack.Screen
          name="CreateWorkprof7TransportScreen"
          component={CreateWorkprof7TransportScreen}
          options={{
            title: 'Create; Work prof; 7 Transport',
          }}
        />
        <Stack.Screen
          name="CreateWorkprof8OtherScreen"
          component={CreateWorkprof8OtherScreen}
          options={{
            title: 'Create; Work prof; 8 Other',
          }}
        />
        <Stack.Screen
          name="CreateWorkTask1AdminScreen"
          component={CreateWorkTask1AdminScreen}
          options={{
            title: 'Create; Work Task; 1 Admin',
          }}
        />
        <Stack.Screen
          name="CreateWorkTask2FarmingScreen"
          component={CreateWorkTask2FarmingScreen}
          options={{
            title: 'Create; Work Task; 2 Farming',
          }}
        />
        <Stack.Screen
          name="CreateWorkTask3BuildingScreen"
          component={CreateWorkTask3BuildingScreen}
          options={{
            title: 'Create; Work Task; 3 Building',
          }}
        />
        <Stack.Screen
          name="CreateWorkTask4CreativeScreen"
          component={CreateWorkTask4CreativeScreen}
          options={{
            title: 'Create; Work Task; 4 Creative',
          }}
        />
        <Stack.Screen
          name="CreateWorkTask5ITScreen"
          component={CreateWorkTask5ITScreen}
          options={{
            title: 'Create; Work Task; 5 IT',
          }}
        />
        <Stack.Screen
          name="CreateWorkTask6MechanicalScreen"
          component={CreateWorkTask6MechanicalScreen}
          options={{
            title: 'Create; Work Task; 6 Mechanical',
          }}
        />
        <Stack.Screen
          name="CreateWorkTask7TransportScreen"
          component={CreateWorkTask7TransportScreen}
          options={{
            title: 'Create; Work Task; 7 Transport',
          }}
        />
        <Stack.Screen
          name="CreateWorkTask8OtherScreen"
          component={CreateWorkTask8OtherScreen}
          options={{
            title: 'Create; Work Task; 8 Other',
          }}
        />
        <Stack.Screen
          name="CreateBookings1AdvertsScreen"
          component={CreateBookings1AdvertsScreen}
          options={{
            title: 'Create; Bookings; 1 Adverts',
          }}
        />
        <Stack.Screen
          name="CreateBookings2AppointmentsScreen"
          component={CreateBookings2AppointmentsScreen}
          options={{
            title: 'Create; Bookings; 2 Appointments',
          }}
        />
        <Stack.Screen
          name="CreateBookings3EventsScreen"
          component={CreateBookings3EventsScreen}
          options={{
            title: 'Create; Bookings; 3 Events',
          }}
        />
        <Stack.Screen
          name="CreateBookings4ServicesScreen"
          component={CreateBookings4ServicesScreen}
          options={{
            title: 'Create; Bookings; 4 Services',
          }}
        />
        <Stack.Screen
          name="CreateBookings5ProductsScreen"
          component={CreateBookings5ProductsScreen}
          options={{
            title: 'Create; Bookings; 5 Products',
          }}
        />
        <Stack.Screen
          name="CreateAccommodation2BNBScreen"
          component={CreateAccommodation2BNBScreen}
          options={{
            title: 'Create; Accommodation ; 2 BNB',
          }}
        />
        <Stack.Screen
          name="CreateFindAcc6HouseScreen"
          component={CreateFindAcc6HouseScreen}
          options={{
            title: 'Create & Find; Acc/ 6 House',
          }}
        />
        <Stack.Screen
          name="CreateFindAcc5RentaroomScreen"
          component={CreateFindAcc5RentaroomScreen}
          options={{
            title: 'Create & Find; Acc/ 5 Rent a room',
          }}
        />
        <Stack.Screen
          name="CreateAcc4CampingScreen"
          component={CreateAcc4CampingScreen}
          options={{
            title: 'Create; Acc/ 4 Camping ',
          }}
        />
        <Stack.Screen
          name="CreateScreen"
          component={CreateScreen}
          options={{
            title: 'Create; ---',
          }}
        />
        <Stack.Screen
          name="CreateOtherMissalionaousScreen"
          component={CreateOtherMissalionaousScreen}
          options={{
            title: 'Create; Other; Missalionaous',
          }}
        />
        <Stack.Screen
          name="FindAccommodationScreen"
          component={FindAccommodationScreen}
          options={{
            title: 'Find; Accommodation',
          }}
        />
        <Stack.Screen
          name="FindDropoffScreen"
          component={FindDropoffScreen}
          options={{
            title: 'Find; Drop off ',
          }}
        />
        <Stack.Screen
          name="FindWorktaskoptCopyScreen"
          component={FindWorktaskoptCopyScreen}
          options={{
            title: 'Find; Work task opt Copy',
          }}
        />
        <Stack.Screen
          name="CreateWorkTasksoptionsScreen"
          component={CreateWorkTasksoptionsScreen}
          options={{
            title: 'Create; Work Tasks options',
          }}
        />
        <Stack.Screen
          name="CreateMarketCopyScreen"
          component={CreateMarketCopyScreen}
          options={{
            title: 'Create ; Market Copy',
          }}
        />
        <Stack.Screen
          name="CreateUserCVScreen"
          component={CreateUserCVScreen}
          options={{
            title: 'Create; User CV',
          }}
        />
        <Stack.Screen
          name="FilterdistanceageScreen"
          component={FilterdistanceageScreen}
          options={{
            title: 'Filter-distance-age',
          }}
        />
        <Stack.Screen
          name="CreateAccommodationhotelScreen"
          component={CreateAccommodationhotelScreen}
          options={{
            title: 'Create; Accommodation - hotel',
          }}
        />
        <Stack.Screen
          name="CreateAccommodationbnbScreen"
          component={CreateAccommodationbnbScreen}
          options={{
            title: 'Create; Accommodation - bnb',
          }}
        />
        <Stack.Screen
          name="FeedCreatePinScreen"
          component={FeedCreatePinScreen}
          options={{
            title: 'Feed - Create Pin',
          }}
        />
        <Stack.Screen
          name="Step3PayPinitScreen"
          component={Step3PayPinitScreen}
          options={{
            title: 'Step 3: Pay & Pin it',
          }}
        />
        <Stack.Screen
          name="ChatdirectmessageScreen"
          component={ChatdirectmessageScreen}
          options={{
            title: 'Chat-direct  message',
          }}
        />
        <Stack.Screen
          name="FindMarketScreen"
          component={FindMarketScreen}
          options={{
            title: 'Find ; Market',
          }}
        />
        <Stack.Screen
          name="FeedFindPinScreen"
          component={FeedFindPinScreen}
          options={{
            title: 'Feed - Find Pin',
          }}
        />
        <Stack.Screen
          name="CreateFindAcc7ApartmentScreen"
          component={CreateFindAcc7ApartmentScreen}
          options={{
            title: 'Create & Find; Acc/ 7 Apartment ',
          }}
        />
        <Stack.Screen
          name="Locatepin2Screen"
          component={Locatepin2Screen}
          options={{
            title: 'Locate pin(2)',
          }}
        />
        <Stack.Screen
          name="Locatepin3Screen"
          component={Locatepin3Screen}
          options={{
            title: 'Locate pin(3)',
          }}
        />
        <Stack.Screen
          name="Step2LocatepinScreen"
          component={Step2LocatepinScreen}
          options={{
            title: 'Step 2: Locate pin',
          }}
        />
        <Stack.Screen
          name="CreateBuySellConstructionCopyScreen"
          component={CreateBuySellConstructionCopyScreen}
          options={{
            title: 'Create; Buy /Sell Construction Copy',
          }}
        />
        <Stack.Screen
          name="FindWorkScreen"
          component={FindWorkScreen}
          options={{
            title: 'Find; Work ',
          }}
        />
        <Stack.Screen
          name="CreateWorkprof6MechanicalScreen"
          component={CreateWorkprof6MechanicalScreen}
          options={{
            title: 'Create; Work prof; 6 Mechanical ',
          }}
        />
        <Stack.Screen
          name="CreateAccommodationairbnbScreen"
          component={CreateAccommodationairbnbScreen}
          options={{
            title: 'Create; Accommodation - airbnb ',
          }}
        />
        <Stack.Screen
          name="CreateFindWorkScreen"
          component={CreateFindWorkScreen}
          options={{
            title: 'Create & Find; Work',
          }}
        />
        <Stack.Screen
          name="CreateAccommodation2RentPrivateScreen"
          component={CreateAccommodation2RentPrivateScreen}
          options={{
            title: 'Create; Accommodation/ 2 Rent Private',
          }}
        />
        <Stack.Screen
          name="CreateDropOff2DeliveryScreen"
          component={CreateDropOff2DeliveryScreen}
          options={{
            title: 'Create: Drop Off/ 2 Delivery',
          }}
        />
        <Stack.Screen
          name="CreateFindWorktaskoptScreen"
          component={CreateFindWorktaskoptScreen}
          options={{
            title: 'Create & Find; Work task opt',
          }}
        />
        <Stack.Screen
          name="CreateBookings6OtherScreen"
          component={CreateBookings6OtherScreen}
          options={{
            title: 'Create; Bookings; 6 Other',
          }}
        />
        <Stack.Screen
          name="Step1URLTokenScreen"
          component={Step1URLTokenScreen}
          options={{
            title: 'Step 1: URL Token',
          }}
        />
        <Stack.Screen
          name="FindFoodBeverageScreen"
          component={FindFoodBeverageScreen}
          options={{
            title: 'Find; Food / Beverage',
          }}
        />
        <Stack.Screen
          name="FindBuySellScreen"
          component={FindBuySellScreen}
          options={{
            title: 'Find; Buy / Sell',
          }}
        />
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            title: 'Map',
          }}
        />
        <Stack.Screen
          name="CreateFindOtherMarketScreen"
          component={CreateFindOtherMarketScreen}
          options={{
            title: 'Create & Find; Other Market',
          }}
        />
        <Stack.Screen
          name="OpenTokenScreen"
          component={OpenTokenScreen}
          options={{
            title: 'Open Token',
          }}
        />
        <Stack.Screen
          name="CreateFindAcc5RentaroomCopyScreen"
          component={CreateFindAcc5RentaroomCopyScreen}
          options={{
            title: 'Create & Find; Acc/ 5 Rent a room Copy',
          }}
        />
        <Stack.Screen
          name="BlankScreen"
          component={BlankScreen}
          options={{
            title: 'Blank',
          }}
        />
        <Stack.Screen
          name="DropBitBoxScreen"
          component={DropBitBoxScreen}
          options={{
            title: 'DropBitBox',
          }}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
