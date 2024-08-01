import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import ListScreen from './screens/ListScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import EditScreen from './screens/EditScreen';

type TabBarIconProps = {
  color: string;
  size: number;
};

const AddButton = () => null;
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#424242',
        tabBarInactiveTintColor: '#9E9E9E',
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopColor: '#BDBDBD',
          backgroundColor: '#FFFF',
        },
      }}>
      <Tab.Screen
        name="List"
        component={ListScreen}
        options={{
          tabBarIcon: (props: TabBarIconProps) => (
            <Icon name="list" size={props.size} color={props.color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="AddButton"
        component={AddButton}
        options={{
          tabBarIcon: () => (
            <Icon name="add-circle" size={36} color="#DA5746" />
          ),
          headerShown: false,
        }}
        listeners={({navigation}) => ({
          tabPress: event => {
            event.preventDefault();
            navigation.navigate('Edit');
          },
        })}
      />
      <Tab.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{
          tabBarIcon: (props: TabBarIconProps) => (
            <Icon name="heart" size={props.size} color={props.color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
