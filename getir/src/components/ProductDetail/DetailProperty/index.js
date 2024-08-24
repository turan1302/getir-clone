import React, { Component } from "react";
import { Text, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

export default class DetailProperty extends Component {

  constructor(props) {
    super(props);

    this.state = {
      details: [this.props.product.prd_desc,
        "İçindekiler",
        "Besin Değerleri",
        "Kullanım",
        "Ek Bilgiler",
      ],
    };
  }

  TextRender = (details, index) => {
    return (
      <View key={index} style={{
        paddingVertical: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: (index===this.state.details.length-1) ? 0 :  0.25,
        borderBottomColor: "lightgray",
      }}>
        <Text style={{ color: (index === 0) ? "black" : "#808b99", fontWeight: "500" }}>{details}</Text>
        {(index !== 0) &&
          <Entypo color={"gray"} name={"chevron-thin-down"} size={15} />
        }
      </View>
    );
  };

  render() {
    const { details } = this.state;

    return (
      <View style={{ backgroundColor: "white", paddingHorizontal: 16}}>
        {details.map((item, index) => {
          return this.TextRender(item, index);
        })}
      </View>
    );
  }
}
