import React, { Component } from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

import * as NavigationService from "../../../NavigationService";

export default class Categories extends Component {

  constructor(props) {
    super(props);

    this.state = {
      categories: this.props.categories,
      windowDimensions: Dimensions.get('window'),
    };
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

  render() {
    const {categories} = this.state;
    const { width, height } = this.state.windowDimensions;
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';

    return (
      <View style={styles.category_area(height)}>
        {categories.map((item,index)=>{
          return (
            <TouchableOpacity onPress={()=>NavigationService.navigate("CategoryDetail",{category : item.ct_id})} key={index} style={styles.category_button(width,position)}>
              <Image style={styles.category_image(width)} source={{uri : item.ct_image}}/>
              <Text style={[styles.catrgory_text]}>{item.ct_name}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
    );
  }
}

