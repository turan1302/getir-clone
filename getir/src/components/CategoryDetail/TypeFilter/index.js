import React, { Component } from 'react'
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default class TypeFilter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active : "Birlikte İyi Gider",
      categories: [
        {
          id: "1",
          name: "İndirimler",
          src: "https://cdn.getir.com/cat/5fd8c58f3bdc2389a56e0fb0_2b1a70ca-4a4a-4477-adf1-7414a476aff8.jpeg",
          subCategories: ["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar","Çikolata"],

        }
        , {
          id: "2",
          name: "Su & İçecek",
          src: "https://cdn.getir.com/cat/551430043427d5010a3a5c5e_1619242669958_1619242670038.jpeg",
          subCategories: ["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"],

        },
        {
          id: "3",
          name: "Meyve & Sebze",
          src: "https://cdn.getir.com/cat/5928113e616cab00041ec6de_1619242870968_1619242871055.jpeg",
          subCategories: ["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"],

        },
        {
          id: "4",
          name: "Fırından",
          src: "https://cdn.getir.com/cat/566eeb85f9facb0f00b1cb16_1619242817768_1619242817849.jpeg",
          subCategories: ["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"],

        },
        {
          id: "5",
          name: "Temel Gıda",
          src: "https://cdn.getir.com/cat/56dfcfba86004203000a870d_1619242834654_1619242834734.jpeg",
          subCategories: ["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"],

        },
        {
          id: "6",
          name: "Atıştırmalık",
          src: "https://cdn.getir.com/cat/56dfe03cf82055030022cdc0_1619242841966_1619242842053.jpeg",
        },
        {
          id: "7",
          name: "Dondurma",
          src: "https://cdn.getir.com/cat/55bca8484dcda90c00e3aa80_1619242741382_1619242741482.jpeg",
          subCategories: ["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"],
        },
        {
          id: "8",
          name: "Süt Ürünleri",
          src: "https://cdn.getir.com/cat/5cfe685e25d48100016b7ea6_b05535e0-a936-4c79-8d89-10db178a928c.jpeg",
          subCategories: ["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"],

        },
        {
          id: "9",
          name: "Kahvaltılık",
          src: "https://cdn.getir.com/cat/61a78ebbdea800061135fd19_1ae7279d-6ab8-4ee1-b58b-9a29695ad314.jpeg",
          subCategories: ["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"],

        },
        {
          id: "10",
          name: "Yiyecek",
          src: "https://cdn.getir.com/cat/551430043427d5010a3a5c5d_1619242660025_1619242660107.jpeg",
          subCategories: ["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"],

        },
        {
          id: "11",
          name: "Fit & Form",
          src: "https://cdn.getir.com/cat/57e2996551f3ee030027e28b_1619242858559_1619242858642.jpeg",
          subCategories: ["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"],

        },
        {
          id: "12",
          name: "Kişisel Bakım",
          src: "https://cdn.getir.com/cat/551430043427d5010a3a5c5c_1619242651249_1619242651335.jpeg",
          subCategories: ["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"],

        },
        {
          id: "13",
          name: "Evcil Hayvan",
          src: "https://cdn.getir.com/cat/551430043427d5010a3a5c63_1619242711604_1619242711687.jpeg",
          subCategories: ["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"],

        },
        {
          id: "14",
          name: "Bebek",
          src: "https://cdn.getir.com/cat/551430043427d5010a3a5c5b_1619242620186_1619242620271.jpeg",
          subCategories: ["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"],

        },
        {
          id: "15",
          name: "Cinsel Sağlık",
          src: "https://cdn.getir.com/cat/559c07b093be370c0063dd29_a16cbca7-4f5a-46fc-8f45-45d8e899f57d.jpeg",
          subCategories: ["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"],

        },
        {
          id: "16",
          name: "Ev Bakım",
          src: "https://cdn.getir.com/cat/55449fdf02632e11003c2da8_1619242719523_1619242719602.jpeg",
          subCategories: ["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"],

        },
        {
          id: "17",
          name: "Teknoloji",
          src: "https://cdn.getir.com/cat/551430043427d5010a3a5c62_1619242697597_1619242697702.jpeg",
          subCategories: ["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"],

        },
        {
          id: "18",
          name: "Ev & Yaşam",
          src: "https://cdn.getir.com/cat/5b06b056b883b700044e3e4c_1619242916956_1619242917048.jpeg",
          subCategories: ["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"],
        },
      ],
      windowDimensions: Dimensions.get('window'),
    }
  }

  TypeFilterRender = (active,item,index)=>{
    return (
      <TouchableOpacity onPress={()=>{
        this.setState({
          active : item
        })
      }} key={index} style={styles.button_area}>
        <View style={[styles.view_area,(active===item) && styles.active_view_area]}>
          <Text style={[styles.text_area,(active===item) && styles.active_text_area]}>{item}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const {active,categories} = this.state;

    const { width, height } = this.state.windowDimensions;
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';

    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false} bounces style={(position==="PORTRAIT") ? styles.type_filter_scroll_view(height) : styles.type_filter_scroll_view(width)}>
        {categories[0].subCategories.map((item,index)=>{
          return this.TypeFilterRender(active,item,index);
        })}
      </ScrollView>
    )
  }
}
