import React, { Component } from 'react'
import { Dimensions, Image, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "./styles";

export default class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
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
    const { width, height } = this.state.windowDimensions;
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';


    return (
      <View style={(position==="LANDSCAPE") ? styles.header(width) : styles.header(height)}>
        <View style={styles.header_left_area}>
          <View style={styles.header_left_item_area}>
            <Image style={styles.header_left_image} source={{uri : "https://cdn.getir.com/misc/emoji/house.png"}}/>
            <View style={styles.header_left_address}>
              <Text style={styles.header_left_address_title}>Ev</Text>
              <Text style={styles.header_left_address_desc}>Odasına tıkılmış bir developer... </Text>
            </View>
          </View>
          <View>
            <Icon name={"chevron-right"} size={15} color={"#5D3EBD"}/>
          </View>
        </View>
        <View style={styles.header_right_area}>
          <Text style={styles.header_right_first_item}>TVS</Text>
          <Text style={styles.header_right_second_item}>25 dk</Text>
        </View>
      </View>
    )
  }
}
