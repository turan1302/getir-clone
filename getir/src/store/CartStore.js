import { action, makeAutoObservable, observable } from "mobx";
import { it } from "@jest/globals";

class CartStore {
  totalPrice = 0.00;
  cartData = [];

  constructor() {
    makeAutoObservable(this, {
      totalPrice: observable,
      cartData: observable,
      addToCart: action,
    });
  }

  addToCart = (item, qty) => {
    let newProduct = {
      prd_id : item.prd_id,
      prd_image: item.prd_image,
      prd_name: item.prd_name,
      prd_miktar: item.prd_miktar,
      prd_fiyatIndirimli: item.prd_fiyatIndirimli,
      prd_qty : qty
    };

    if (this.cartData.length > 0) {
      const updatedCart = this.cartData.map((data) => {
        if (data.prd_id === item.prd_id) {
          return { ...data, prd_qty: data.prd_qty + qty };
        }
        return data;
      });

      if (!updatedCart.some(data => data.prd_id === item.prd_id)) {
        updatedCart.push({ ...item, prd_qty: qty });
      }

      this.cartData = updatedCart;
    } else {
      this.cartData.push({ ...item, prd_qty: qty });
    }

    this.totalPrice += item.prd_fiyatIndirimli * qty;
  };

  incrementCartData = (item, qty) => {
    // Sepetteki toplam fiyatı sıfırla
    this.totalPrice = 0.00;

    // Sepet verilerini güncelle
    const updatedCart = this.cartData.map((data) => {
      if (data.prd_id === item.prd_id) {
        const newQty = data.prd_qty + qty;

        if (newQty <= 10) {
          const updatedItem = { ...data, prd_qty: newQty };

          this.totalPrice += item.prd_fiyatIndirimli * newQty;

          return updatedItem;
        } else {
          return data;
        }
      }
      return data;
    });

    this.totalPrice = updatedCart.reduce((total, item) => {
      return total + (item.prd_fiyatIndirimli * item.prd_qty);
    }, 0);

    this.cartData = updatedCart;
  };

  decrementCartData = (item, qty) => {
    this.totalPrice = 0.00;

    const updatedCart = this.cartData.map((data) => {
      if (data.prd_id === item.prd_id) {
        const newQty = data.prd_qty - qty;

        if (newQty <= 0) {
          return null;
        } else {
          const updatedItem = { ...data, prd_qty: newQty };

          this.totalPrice += item.prd_fiyatIndirimli * newQty;

          return updatedItem;
        }
      }
      return data;
    }).filter(item => item !== null); // null olan öğeleri filtrele

    this.totalPrice = updatedCart.reduce((total, item) => {
      return total + (item.prd_fiyatIndirimli * item.prd_qty);
    }, 0);

    this.cartData = updatedCart;
  };

  removeCartData = ()=>{
    this.cartData = [];
    this.totalPrice = 0.00;
  }
}

export default new CartStore();
