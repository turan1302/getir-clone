import React, { Component } from 'react'
import { Dimensions, ScrollView, Text, View } from "react-native";
import styles from "./styles"

export default class CategoryFilter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active : this.props.params,
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

  TypeFilter = (item,index,active)=>{
    return (
      <View key={index} style={[styles.item_area, (item.ct_id === active && styles.active_item)]}>
        <Text style={styles.text_color}>{item.ct_name}</Text>
      </View>
    );
  }

  render() {
    const { categories,active } = this.state;

    const { width, height } = this.state.windowDimensions;
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';


    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false} bounces
                  style={(position==="PORTRAIT") ? styles.categories_scroll_view(height) : styles.categories_scroll_view(width)}>
        {categories.map((item, index) => {
          return this.TypeFilter(item,index,active);
        })}
      </ScrollView>
    )
  }
}
