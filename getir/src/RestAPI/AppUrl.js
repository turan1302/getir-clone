class AppUrl{
  static baseURL = "http://127.0.0.1:8000";
  static apiURL = this.baseURL+"/api";

  // home
  static home = this.apiURL+"/home";

  // category detail
  static category_detail = this.apiURL+"/category";  // ek olarak parametre gönderilecek (id)

  // product detail
  static product_detail = this.apiURL+"/product";  // ek olarak parametre gönderilecek (id)

  // cart
  static cart_related_products = this.apiURL+"/cart";
}

export default AppUrl;
