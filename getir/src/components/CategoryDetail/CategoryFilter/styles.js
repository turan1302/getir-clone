const styles = {
  item_area: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  active_item: { borderBottomWidth: 2.5, borderBottomColor: "yellow" },
  text_color : { fontSize: 14, color: "white" },
  categories_scroll_view : (height)=>({ backgroundColor: "#7849f7", width: "100%", height: height * 0.065 }),
};

export default styles;
