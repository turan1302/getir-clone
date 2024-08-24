import React, { Component } from "react";
import { Dimensions, FlatList, Text, View, Image } from "react-native";
import styles from "./styles";

export default class Banner extends Component {

  constructor(props) {
    super(props);

    this.state = {
      banners: this.props.banners,
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

  renderItem = ({item,index})=>{
    const { width, height } = this.state.windowDimensions;
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';

    return (
       <Image key={index} style={(position==="PORTRAIT") ? styles.image(width,height*0.25) : styles.image(width,height)} resizeMode={"stretch"}
              source={{ uri: item.bn_link }} />
    )
  }

  render() {
    const { banners } = this.state;
    const { width, height } = this.state.windowDimensions;

    return (
      <FlatList showsHorizontalScrollIndicator={false} horizontal data={banners}
                keyExtractor={( item, index ) => index}
                snapToInterval={width}
                snapToAlignment={"center"}
                decelerationRate={"fast"}
                renderItem={this.renderItem} />
    );
  }
}
