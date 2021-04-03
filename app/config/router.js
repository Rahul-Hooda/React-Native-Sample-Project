import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import NewContact from '../screens/NewContact';
import Me from '../screens/Me';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

function ContactsStack() {
  return (
      <Stack.Navigator initialRouteName = "Contacts" screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="Contacts" component={Contacts} options={{title:'Contacts'}} />
        <Stack.Screen name="Details" component={Details} options={{title:'Details'}} />
      </Stack.Navigator>
  );
}

function NewContactStack() {
  return (
      <Stack.Navigator initialRouteName = "New Contact" screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="New Contact" component={NewContact} options={{title:'New Contact'}} />
      </Stack.Navigator>
  );
}

function MeStack() {
  return (
      <Stack.Navigator initialRouteName = "Me" screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="Me" component={Me} options={{title:'Me'}} />
      </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigation(){
  return (
  <NavigationContainer>
    <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Contacts') {
              iconName = 'ios-list';
            } else if (route.name === 'New Contact') {
              iconName = 'ios-add';
            } else if (route.name === 'Me') {
              iconName = 'ios-information-circle';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}>
      <Tab.Screen name="Contacts" component={ContactsStack} />
      <Tab.Screen name="New Contact" component={NewContactStack} />
      <Tab.Screen name="Me" component={MeStack}/>
    </Tab.Navigator>
  </NavigationContainer>
);
}

export default TabNavigation;
