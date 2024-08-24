import React, { Component } from "react";
import { Dimensions, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import productsGetir from "../../../assets/productsGetir";
import Icon from "react-native-vector-icons/FontAwesome5";
import ContiniueButton from "../ContiniueButton";
import ProductItem from "../../CategoryDetail/ProductItem";
import { inject, observer } from "mobx-react";
import RestClient from "../../../RestAPI/RestClient";
import AppUrl from "../../../RestAPI/AppUrl";

@inject("CartStore")
@observer

export default class ItemList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      related : [],
      windowDimensions: Dimensions.get("window"),
    };
  }

  componentDidMount() {
    this.dimensionsSubscription = Dimensions.addEventListener("change", this.handleResize);
    this.relatedProducts();
  }

  componentWillUnmount() {
    if (this.dimensionsSubscription) {
      this.dimensionsSubscription.remove();
    }
  }

  handleResize = ({ window }) => {
    this.setState({ windowDimensions: window });
  };

  relatedProducts = ()=>{
    RestClient.getRequest(AppUrl.cart_related_products).then((res)=>{
      const status = res.status;
      const result = res.data;

      if (status===200){
        this.setState({
          related : result.data.related
        });
      }

    }).catch((err)=>{
      console.log(err);
    })
  }


  render() {
    const { width, height } = this.state.windowDimensions;
    const position = width > height ? "LANDSCAPE" : "PORTRAIT";
    const {related} = this.state;

    return (
      <FlatList ListFooterComponent={() => {
        return (
          <View style={{ flex: 1 }}>
            <Text
              style={{
                paddingVertical: 10,
                paddingHorizontal: 15,
                color: "#5c3ebc",
                fontSize: 15,
                fontWeight: "bold",
              }}>
              Önerilen Ürünler
            </Text>

            <ScrollView bounces={true} showsHorizontalScrollIndicator={false} horizontal
                        style={{ backgroundColor: "white" }}>
              {related.slice(0, 5).map((item, index) => {
                return <ProductItem key={index} item={item} />;
              })}
            </ScrollView>

            <ContiniueButton totalPrice={this.props.CartStore.totalPrice} />
          </View>
        );
      }} showsVerticalScrollIndicator={false} data={this.props.CartStore.cartData} renderItem={({ item, index }) => {
        return (
          <View key={index} style={{
            paddingHorizontal: 15,
            paddingTop: 10,
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 20,
            borderBottomWidth: (index === productsGetir.slice(3, 5).length - 1) ? 0 : 0.25,
            borderColor: "#eaeaea",
          }}>
            <View style={{ flexDirection: "row", flex: 1 }}>
              <Image style={{
                width: (position==="PORTRAIT") ? width * 0.20 : height*0.40,
                height: (position==="PORTRAIT") ? width * 0.20 : height*0.40,
                borderWidth: 1,
                borderColor: "#f0eff3",
                borderRadius: 8,
              }} source={{ uri: item.prd_image }} />
              <View style={{ marginLeft: 10, paddingVertical: 8, justifyContent: "space-around" }}>
                <View>
                  <Text style={{ fontWeight: "600", color: "black", fontSize: 14 }}>{item.prd_name}</Text>
                  <Text style={{ color: "#959595" }}>{item.prd_miktar}</Text>
                </View>
                <View>
                  <Text style={{ color: "#5c3ebc", fontWeight: "bold", fontSize: 15 }}>₺{item.prd_fiyatIndirimli}</Text>
                </View>
              </View>
            </View>
            <View style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 5,
              marginRight: 5,
            }}>
              <TouchableOpacity onPress={()=>this.props.CartStore.incrementCartData(item,1)} style={{
                padding: 10,
                backgroundColor: "white",
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
                elevation: 3,
              }}>
                <Icon name={"plus"} color={"#5c3ebc"} size={10} />
              </TouchableOpacity>
              <View style={{ backgroundColor: "#5c3ebc", padding: 6.5, alignItems: "center" }}>
                <Text style={{ color: "white", fontWeight: "bold" }}>{item.prd_qty}</Text>
              </View>
              <TouchableOpacity onPress={()=>this.props.CartStore.decrementCartData(item,1)} style={{
                padding: 10,
                backgroundColor: "white",
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
                elevation: 3,
              }}>
                <Icon name={"minus"} color={"#5c3ebc"} size={10} />
              </TouchableOpacity>
            </View>
          </View>
        );
      }}
      />
    );
  }
}
