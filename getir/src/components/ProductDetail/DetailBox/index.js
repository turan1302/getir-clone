import React, { Component } from 'react'
import { Dimensions, Text, View } from "react-native";

export default class DetailBox extends Component {

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
    const {product} = this.props;
    const { width, height } = this.state.windowDimensions;
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';

    return (
      <View style={[{alignItems : "center",backgroundColor : "white",justifyContent : "center"},(position==="PORTRAIT") ? {height : height * 0.12} : {height : width * 0.12,paddingBottom : 20}]}>
        <Text style={{color : "#5c3ebc",fontWeight : "bold",fontSize : 20,marginLeft : 4}}>₺{product.prd_fiyatIndirimli}</Text>
        <Text style={{marginTop : 4,fontSize : 15,fontWeight : "bold",color : "black"}}>{product.prd_name}</Text>
        <Text style={{marginTop : 2,color : "gray"}}>{product.prd_miktar}</Text>
      </View>
    )
  }
}
