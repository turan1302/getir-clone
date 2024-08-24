import React, { Component } from "react";
import { ActivityIndicator, Alert, Dimensions, ScrollView, Text, TouchableOpacity, View } from "react-native";
import CategoryFilter from "../../components/CategoryDetail/CategoryFilter";
import TypeFilter from "../../components/CategoryDetail/TypeFilter";
import ProductItem from "../../components/CategoryDetail/ProductItem";
import ProductsGetir from "../../assets/productsGetir";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import { inject, observer } from "mobx-react";

@inject("CartStore")

export default class CategoryDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading : true,
      category : {},
      categories : [],
      products : [],
      windowDimensions: Dimensions.get('window'),
    };

    this.getCategory();
  }

  componentDidMount() {
    this.dimensionsSubscription = Dimensions.addEventListener('change', this.handleResize);
  }

  componentWillUnmount() {
    if (this.dimensionsSubscription) {
      this.dimensionsSubscription.remove();
    }
  }

  handleResize = ({ window }) => {
    this.setState({ windowDimensions: window });
  };

  getCategory = ()=>{
    const {route : {params},navigation} = this.props;


    RestClient.getRequest(AppUrl.category_detail+`/${params.category}`).then((res)=>{
      const status = res.status;
      const result = res.data;

      if (status===200){
        this.setState({
          isLoading : false,
          category : result.data.category,
          categories : result.data.categories,
          products : result.data.products
        },()=>{
          navigation.setOptions({
            headerTitle : this.state.category.ct_name
          })
        });
      }else{
        Alert.alert(result.title,result.message,[
          {text : "Tamam"}
        ]);
        navigation.navigate("Home");
      }

    }).catch((err)=>{
      console.log(err);
     alert()
    })
  }

  render() {
    const { route: { params } } = this.props;
    const { width, height } = this.state.windowDimensions;
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';

    const {isLoading,categories,products} = this.state;

    if (isLoading){
      return (
        <ActivityIndicator size={30} color={"#5c3ebc"} style={{flex : 1,justifyContent : "center"}}/>
      )
    }

    return (
     <ScrollView style={{flex : 1}} showsVerticalScrollIndicator={false}>
      <CategoryFilter categories={categories} params={params.category}/>
      <TypeFilter/>

       <View>
         <View style={[{flexDirection : "row",backgroundColor : "white",flexWrap : "wrap"},(position==="PORTRAIT") ? {height : height*0.30} : {height:  width * 0.42}]}>
           {products.slice(0,2).map((item,index)=>{
             return <ProductItem key={index} item={item}/>
           })}
         </View>

         <Text style={{color : "gray",fontSize : 14,fontWeight : "bold",padding : 14}}>Çubuk</Text>

         <View style={[{flexDirection : "row",backgroundColor : "white",flexWrap : "wrap",paddingTop : 5,paddingBottom : 15},(position==="LANDSCAPE") ? {height:  width * 2.20} : {}]}>
           {products.slice(2).map((item,index)=>{
             return <ProductItem key={index} item={item}/>
           })}
         </View>

       </View>

     </ScrollView>
    );
  }
}
