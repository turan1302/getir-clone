import { Dimensions, StyleSheet } from "react-native";


const styles = StyleSheet.create({
  header: (height) => ({
    height: height * 0.064,
    backgroundColor: '#f7d102',
    flexDirection: 'row',
  }),
  header_left_area: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "3%",
    justifyContent: "space-between",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  header_left_item_area: { flexDirection: "row", alignItems: "center" },
  header_left_image: {
    width: 30,
    height: 30,
  },
  header_left_address: {
    flexDirection: "row",
    alignItems: "center",
    borderLeftWidth: 1,
    borderLeftColor: "#f2f2fdr",
    paddingLeft: 8,
    marginLeft: 8,
  },
  header_left_address_title: { color: "black", fontWeight: "600", fontSize: 16 },
  header_left_address_desc: { color: "#6e7480", fontWeight: "500", fontSize: 11.5, marginLeft: 6 },
  header_right_area  :{justifyContent : "center",alignItems : "center",paddingHorizontal : 10},
  header_right_first_item : {color : "#5c3ebc",fontSize : 10,fontWeight : "bold"},
  header_right_second_item : {color : "#5c3ebc",fontSize : 20,fontWeight : "bold"}
});

export default styles;
