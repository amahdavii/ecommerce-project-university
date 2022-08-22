import { createSlice } from "@reduxjs/toolkit";

// Slice
var initialState = {
  categories: [
    {
      name: "گوشی موبایل",
      id: 1,
      children: [
        {
          name: "گوشی آیفون ۱۳ پرو",
          price: "5400000",
          image: require("../../assets/images/iphone13.jpg"),
          id: 10,
          brand: "اپل",
        },
        {
          name: "گوشی xiaomi 11",
          price: "125000",
          image: require("../../assets/images/xiami11.jpg"),
          id: 11,
          brand: "شیائومی",
        },
        {
          name: "گوشی سامسونگ A73",
          price: "110000",
          image: require("../../assets/images/samsunga73.jpg"),
          id: 12,
          brand: "سامسونگ",
        },
        {
          name: "گوشی  شیائومی poco",
          price: "120000",
          image: require("../../assets/images/pocof4.jpg"),
          id: 13,
          brand: "شیائومی",
        },
        {
          name: "گوشی آیفون SE",
          price: "100000",
          image: require("../../assets/images/se.jpg"),
          id: 14,
          brand: "اپل",
        },
        {
          name: "گوشی شیائومی Poco x4",
          price: "90000",
          image: require("../../assets/images/pocox4.jpg"),
          id: 15,
          brand: "شیائومی",
        },
        {
          name: "گوشی سامسونگ A23",
          price: "692000",
          image: require("../../assets/images/samsungA23.jpg"),
          id: 16,
          brand: "سامسونگ",
        },
        {
          name: "گوشی سامسونگ A03",
          price: "200000",
          image: require("../../assets/images/A03.jpg"),
          id: 17,
          brand: "سامسونگ",
        },
        {
          name: "گوشی آیفون ۱۳",
          price: "4000000",
          image: require("../../assets/images/iphone13-normal.jpg"),
          id: 18,
          brand: "اپل",
        },
        {
          name: "گوشی شیائومی Redmi",
          price: "1250000",
          image: require("../../assets/images/redmi.jpg"),
          id: 19,
          brand: "شیائومی",
        },
      ],
    },
    {
      name: "لوازم جانبی گوشی",
      id: 2,
      children: [
        {
          name: "پاوربانک Remo 1000",
          price: "150000",
          image: require("../../assets/images/remo.jpg"),
          id: 20,
          brand: "Remo",
        },
        {
          name: "شارژر فندکی DOD",
          price: "95000",
          image: require("../../assets/images/fandaki.jpg"),
          id: 21,
          brand: "Dod",
        },
        {
          name: "شارژر بی سیم Anker",
          price: "415000",
          image: require("../../assets/images/anker.jpg"),
          id: 22,
          brand: "انکر",
        },
        {
          name: "هندزفری بی‌سیم Honor",
          price: "4500",
          image: require("../../assets/images/honor.jpg"),
          id: 23,
          brand: "Honor",
        },
        {
          name: "کاور آیفون xs",
          price: "5500",
          image: require("../../assets/images/xsiphone.jpeg"),
          id: 24,
          brand: "-",
        },
        {
          name: "کاور گوشی نوا",
          price: "6500",
          image: require("../../assets/images/nova.jpg"),
          id: 25,
          brand: "Nova",
        },
        {
          name: "ایرفون Remax",
          price: "31500",
          image: require("../../assets/images/remax.jpg"),
          id: 26,
          brand: "Remax",
        },
        {
          name: "شارژر سامسونگ 25w",
          price: "50000",
          image: require("../../assets/images/samsung25w.jpg"),
          id: 27,
          brand: "سامسونگ",
        },
        {
          name: "لنز کلیپسی موبایل",
          price: "7000",
          image: require("../../assets/images/clipsi.jpg"),
          id: 28,
          brand: "-",
        },
        {
          name: "پاوربانک انکر 2000",
          price: "39600",
          image: require("../../assets/images/pbanker.jpg"),
          id: 29,
          brand: "انکر",
        },
      ],
    },
  ],
};
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.categories = action.payload;
    },
  },
});
export default categorySlice.reducer;
