import React, { Component } from "react";
import { ActivityIndicator, Dimensions, FlatList, Image, ScrollView, StatusBar, Text, View } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import Banner from "../../components/Home/Banner";
import Categories from "../../components/Home/Categories";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading : true,
      banners : []
    }
  }

  componentDidMount() {
    this.getHome();
  }

  getHome = ()=>{
    RestClient.getRequest(AppUrl.home).then((res)=>{
      const status = res.status;
      const result = res.data;

      if (status===200){
        this.setState({
          isLoading : false,
          banners : result.data.banners,
          categories : result.data.categories
        })
      }

    }).catch((err)=>{
      console.log(err);
      alert("Bir Hata Oluştu. Lütfen daha sonra tekrar deneyiniz");
    })
  }

  render() {
    const {isLoading,banners,categories} = this.state;

    if (isLoading){
      return (
        <ActivityIndicator size={30} color={"#5c3ebc"} style={{flex : 1,justifyContent : "center"}}/>
      )
    }

    return (
      <ScrollView stickyHeaderIndices={[1]} style={styles.welcome_area} showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor={"#5c3ebc"} />
        <Header />
        <Banner banners={banners}/>
        <Categories categories={categories}/>
      </ScrollView>
    );
  }
}
