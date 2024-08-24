import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";

import { getFocusedRouteNameFromRoute, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { navigationRef } from "../../src/NavigationService";
import HomeNavigator from "./HomeNavigator";

const Tab = createBottomTabNavigator();


export default class Router extends Component {


  customTabBarButton = ({ focused, color, size }) => {
    return (
      <TouchableOpacity style={{
        backgroundColor: "#5c3ebc",
        width: 58,
        height: 58,
        borderRadius: 33,
        justifyContent: "center",
        alignItems: "center",
        marginTop : -8,
        borderWidth : 2,
        borderColor : "white"
      }}>
        <Entypo name={"list"} color={"#f7d102"} size={32} />
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Tab.Navigator initialRouteName={"HomeNavigator"} screenOptions={({route})=>({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#5c3ebc",
          tabBarInactiveTintColor: "#959595",
          headerShown: false,
          headerTitleAlign: "center",
          headerShadowVisible: false,
          tabBarStyle: {
            height: 55,
          }
        })}>
          <Tab.Screen name={"HomeNavigator"} component={HomeNavigator} options={({route})=>(
            {
              tabBarIcon: ({ focused, color, size }) => {
                return (
                  <Icon size={20} color={color} name={"home"} />
                );
              },
              tabBarStyle: ((route) => {
                const tabBarHidden = ["ProductDetail"];

                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                if (tabBarHidden.includes(routeName)) {
                  return { display: "none" }
                }
              })(route)
            }
          )}>
          </Tab.Screen>

          <Tab.Screen name={"Search"} component={HomeNavigator} options={{
            headerTitle: () => (
              <Image source={require("../assets/getirlogo.png")} style={{ width: 70, height: 30 }} />
            ),
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Icon size={20} color={color} name={"search"} />
              );
            },
          }}>
          </Tab.Screen>

          <Tab.Screen name={"Test"} component={HomeNavigator} options={{
            headerTitle: () => (
              <Image source={require("../assets/getirlogo.png")} style={{ width: 70, height: 30 }} />
            ),
            tabBarIcon: this.customTabBarButton,
          }}>
          </Tab.Screen>

          <Tab.Screen name={"User"} component={HomeNavigator} options={{
            headerTitle: () => (
              <Image source={require("../assets/getirlogo.png")} style={{ width: 70, height: 30 }} />
            ),
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Icon size={20} color={color} name={"user"} />
              );
            },
          }}>
          </Tab.Screen>

          <Tab.Screen name={"Gift"} component={HomeNavigator} options={{
            headerTitle: () => (
              <Image source={require("../assets/getirlogo.png")} style={{ width: 70, height: 30 }} />
            ),
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <MaterialCommunityIcons size={20} color={color} name={"gift"} />
              );
            },
          }}>
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
