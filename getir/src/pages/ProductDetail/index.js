import React, { Component } from "react";
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { it } from "@jest/globals";
import ImageCarousel from "../../components/ProductDetail/ImageCarousel";
import DetailBox from "../../components/ProductDetail/DetailBox";
import DetailProperty from "../../components/ProductDetail/DetailProperty";
import CardButton from "../../components/ProductDetail/CardButton";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import * as NavigationService from "../../NavigationService";

export default class ProductDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      product: {},
      images : [],
      isLoading : true
    };
  }

  componentDidMount() {
    const { navigation } = this.props;

    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity>
            <Entypo size={24} name={"heart"} color={"#32177a"} />
          </TouchableOpacity>
        );
      },
    });

   this.getProduct();
  }

  getProduct = ()=>{
    const {route : {params},navigation} = this.props;

    RestClient.getRequest(AppUrl.product_detail+`/${params.product}`).then((res)=>{
      const status = res.status;
      const result = res.data;

      if (status===200){
        this.setState({
          product : result.data.product,
          images : result.data.images,
          isLoading : false
        },()=>{
          navigation.setOptions({
            headerTitle : result.data.product.prd_name
          })
        });
      }else{
        Alert.alert(result.title,result.message,[
          {text : "Tamam"}
        ]);
        NavigationService.back();
      }

    }).catch((err)=>{
      console.log(err);
      alert("Bir Hata Oluştu. Lütfen daha sonra tekrar deneyiniz");
    })
  }

  render() {
    const { product,images, isLoading } = this.state;

    if (isLoading) {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size={30} color={"#5c3ebc"} />
        </View>
      );
    }

    return (
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <ImageCarousel images={images} />
            <DetailBox product={product} />
            <Text style={{
              paddingHorizontal: 10,
              paddingVertical: 12,
              fontSize: 15,
              fontWeight: "600",
              color: "#808b99",
            }}>Detaylar</Text>
            <DetailProperty product={product} />
          </View>
        </ScrollView>
        <CardButton product={product}/>
      </View>

    );
  }
}
