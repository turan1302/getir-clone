import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { inject, observer } from "mobx-react";

@inject("CartStore")
@observer

export default class CardButton extends Component {

  constructor(props) {
    super(props);
  }

  addToCart = (item,qty)=>{
    this.props.CartStore.addToCart(item,qty);
  }

  render() {
    const {product} = this.props;

    return (
      <View style={{
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "white",
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginTop: 10,
        elevation: 4,
      }}>
        <TouchableOpacity
          onPress={()=>this.addToCart(product,1)}
          style={{
            backgroundColor: "#5c3ebc",
            width: "100%",
            alignItems: "center",
            paddingVertical: 10,
            borderRadius: 6,
          }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
