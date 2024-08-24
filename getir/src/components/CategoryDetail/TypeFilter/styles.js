import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  type_filter_scroll_view : (height)=>({
    width : "100%",
    maxHeight : height * 0.070,
    backgroundColor :"white",
    elevation : 4,
    paddingLeft : 5,
  }),
  button_area : {justifyContent : "center",paddingHorizontal : 6,paddingVertical : 6,alignItems : "flex-start"},
  view_area : {backgroundColor : "white",paddingHorizontal : 12,paddingVertical : 9,borderWidth : 1,borderColor : "#f0eff3",borderRadius : 10},
  active_view_area : {backgroundColor : "#5c3ebc"},
  text_area : {color : "#5c3ebc",fontSize : 13,fontWeight : "bold"},
  active_text_area : {color : "white"}
});

export default styles;
