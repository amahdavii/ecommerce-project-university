import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import ProductDetailPage from "./pages/productDetail";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import CartPage from "./pages/cart";
import ProductCategoryPage from "./pages/productCategory";
import BlogsPage from "./pages/blogs";
import Categories from "./pages/categories";
import Search from "./pages/search";
import BlogItemThree from "./pages/blogs/itemthree";
import BlogItemTwo from "./pages/blogs/itemtwo";
import BlogItemOne from "./pages/blogs/itemone";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product-detail" element={<ProductDetailPage />} />
      <Route path="/product-category" element={<ProductCategoryPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/search" element={<Search />} />
      <Route path="/blog/3" element={<BlogItemThree />} />
      <Route path="/blog/2" element={<BlogItemTwo />} />
      <Route path="/blog/1" element={<BlogItemOne />} />
    </Routes>
  );
}

export default App;
