import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import ItemList from "../../components/Cart/ItemList";
import ContiniueButton from "../../components/Cart/ContiniueButton";

export default class Cart extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ItemList />
      </View>
    );
  }
}
