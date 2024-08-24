import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  category_area: (height)=>({
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: height * 0.023,
  }),
  category_button: (width,position)=>({
    justifyContent: "space-between",
    alignItems: "center",
    width: width * 0.25,
    height: (position==="PORTRAIT") ? width * 0.25 : width * 0.215,
    marginVertical: 8,
  }),
  category_image: (width)=>({ borderRadius: 8, width: width * 0.18, height: width * 0.18 }),
  catrgory_text: { fontSize: 12, color: "#616161"},
});

export default styles;
