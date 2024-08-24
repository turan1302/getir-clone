import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, View } from "react-native";

import Home from "../pages/Home";
import CategoryDetail from "../pages/CategoryDetail";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";


import * as NavigationService from "../../src/NavigationService";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { inject,observer } from "mobx-react";


const Stack = createNativeStackNavigator();

@inject("CartStore")
@observer
export default class HomeNavigator extends Component {



  render() {
    const {totalPrice} = this.props.CartStore;

    return (
      <Stack.Navigator screenOptions={{
        headerShadowVisible : false
      }}>
        <Stack.Screen name={"Home"} component={Home} options={{
          headerTitleAlign  :"center",
          headerStyle : {
            backgroundColor : "#5c3ebc"
          },
          headerTitle: () => (
            <Image source={require("../assets/getirlogo.png")} style={{ width: 70, height: 30 }} />
          ),
        }}>
        </Stack.Screen>

        <Stack.Screen name={"CategoryDetail"} component={CategoryDetail} options={{
          headerTitleAlign  :"center",
          headerStyle : {
            backgroundColor : "#5c3ebc",
          },
          headerTitle: "Ürünler",
          headerTitleStyle : {
            color : "white",
            fontWeight : "bold",
            fontSize : 15
          },
          headerBackVisible : false,
          headerLeft : ()=>{
            return (
              <TouchableOpacity onPress={()=>NavigationService.back()}>
                <Icon name={"chevron-left"} color={"white"} size={22}/>
              </TouchableOpacity>
            )
          },
          headerRight : ()=>{
            return (
              <TouchableOpacity onPress={()=>NavigationService.navigate("Cart")} style={{flexDirection : "row",borderRadius : 5,alignItems : "center"}}>
               <View style={{}}>
                 <Image style={{width : 30,height : 30,resizeMode : "stretch",borderTopLeftRadius : 9,borderBottomLeftRadius : 9}} source={require("../assets/cart.png")}/>
               </View>
                <View style={{paddingHorizontal : 5.4,paddingVertical : 5.4,backgroundColor : "#f3effe",borderTopRightRadius : 9,borderBottomRightRadius : 9}}>
                  <Text style={{fontWeight : "bold",color : "#5d3ebd",fontSize : 14}}>₺{totalPrice.toFixed(2)}</Text>
                </View>
              </TouchableOpacity>
            )
          }
        }}>
        </Stack.Screen>
        <Stack.Screen name={"ProductDetail"} component={ProductDetail} options={{
          headerTitleAlign  :"center",
          headerStyle : {
            backgroundColor : "#5c3ebc",
          },
          headerTitle: "Ürünler",
          headerTitleStyle : {
            color : "white",
            fontWeight : "bold",
            fontSize : 15
          },
          headerBackVisible : false,
          headerLeft : ()=>{
            return (
              <TouchableOpacity onPress={()=>NavigationService.back()}>
                <Icon name={"times"} color={"white"} size={22}/>
              </TouchableOpacity>
            )
          }
        }}>
        </Stack.Screen>
        <Stack.Screen name={"Cart"} component={Cart} options={{
          headerTitleAlign  :"center",
          headerStyle : {
            backgroundColor : "#5c3ebc",
          },
          headerTitle: "Sepetim",
          headerTitleStyle : {
            color : "white",
            fontWeight : "bold",
            fontSize : 15
          },
          headerBackVisible : false,
          headerLeft : ()=>{
            return (
              <TouchableOpacity onPress={()=>NavigationService.back()}>
                <Icon name={"times"} color={"white"} size={22}/>
              </TouchableOpacity>
            )
          },
          headerRight : ()=>{
            return (
              <TouchableOpacity onPress={()=>this.props.CartStore.removeCartData()}>
                <Ionicons name={"trash"} color={"white"} size={22}/>
              </TouchableOpacity>
            )
          }
        }}>
        </Stack.Screen>
      </Stack.Navigator>
    )
  }
}
