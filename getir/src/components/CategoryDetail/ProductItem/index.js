import React, { Component } from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as NavigationService from "../../../NavigationService";
import { inject, observer } from "mobx-react";

@inject("CartStore")
@observer

export default class ProductItem extends Component {

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
    const {item} = this.props;

    return (
      <View style={[{paddingTop : 20},(position==="PORTRAIT") ? {width : width*0.30,height : height*0.30,paddingLeft : 6,marginHorizontal : 6} : {width : width*0.30,height : width*0.30,marginBottom : height * 0.30,paddingLeft : 12,marginHorizontal : 12}]}>
        <TouchableOpacity onPress={()=>this.props.CartStore.addToCart(item,1)} style={{position : "absolute",right : 0,top : 0,bottom : 0,marginVertical : 10,marginRight : -5,zIndex : 1}}>
          <View style={{backgroundColor : "#ffffff",padding : 9,elevation : 4,borderRadius : 10}}>
            <Icon name={"plus"} color={"#5c3ebc"} size={15}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>NavigationService.navigate("ProductDetail",{product : item.prd_id})}>
          <Image style={{width : width*0.28,height : width*0.28,borderRadius : 8,borderWidth : 1,borderColor : "#f0eff3"}} source={{ uri: item.prd_image }} />
          <View style={{flexDirection : "row",marginTop : 5,alignItems : "center"}}>
            <Text style={{textDecorationLine : "line-through",color : "#959595",fontWeight : "bold",fontSize : 13}}>₺{item.prd_fiyat}</Text>
            <Text style={{color : "#5c3ebc",fontWeight : "bold",fontSize : 15,marginLeft : 4}}>₺{item.prd_fiyatIndirimli}</Text>
          </View>
          <View style={{marginTop : 4}}>
            <Text style={{color : "black",fontWeight : "bold",fontSize : 14}}>{item.prd_name}</Text>
            <Text style={{color : "#959595",fontSize : 14}}>{item.prd_miktar}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
