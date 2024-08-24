import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default class ContiniueButton extends Component {
  render() {
    return (
      <View style={{paddingHorizontal: 15, paddingVertical: 20,flex : 1,justifyContent : "flex-end"}}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={{
            flex: 1,
            backgroundColor: "#5c3ebc",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 13,
            elevation: 2,
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
          }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Devam
            </Text>
          </TouchableOpacity>
          <View style={{
            justifyContent: "center",
            paddingHorizontal: 20,
            backgroundColor: "white",
            elevation: 2,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
          }}>
            <Text style={{ fontSize: 15, fontWeight: "700", color: "#5c3ebc" }}>₺ {this.props.totalPrice.toFixed(2)}</Text>
          </View>
        </View>
      </View>
    );
  }
}
