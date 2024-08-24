import React, { Component } from 'react'
import { Dimensions, FlatList, Image, Text, View } from "react-native";

export default class ImageCarousel extends Component {

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
    const {images} = this.props;

    const { width, height } = this.state.windowDimensions;
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';

    return (
      <View style={{
        backgroundColor: "white",
        width: "100%",
        height: (position==="PORTRAIT") ? height * 0.25 : width * 0.35,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <View style={[{justifyContent : "center",alignItems : "center"},(position==="PORTRAIT") ? {width: width * 0.50, height: width * 0.50} : {width: width * 0.30, height: width * 0.30}]}>
          <FlatList snapToAlignment={"center"} showsHorizontalScrollIndicator={false} snapToInterval={(position==="PORTRAIT") ? width *0.50 : width * 0.30} decelerationRate={"fast"} horizontal
                    data={images} renderItem={({ item, index }) => {
            return (
              <View>
                <Image  style={[{ resizeMode: "stretch" },(position==="PORTRAIT") ? {width: width * 0.50, height: width * 0.50} : {width: width * 0.30, height: width * 0.30}]} source={{ uri: item.pi_image }} />
              </View>
            );
          }} />
        </View>
      </View>
    )
  }
}
