import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Listcategory from "./pages/Dashboard/categorys/Listcategory";
import { Listproducts } from "./pages/Dashboard/products/Listproducts";
import { Addproduct } from "./pages/Dashboard/products/Addproduct";
import { Editcategory } from "./pages/Dashboard/categorys/Editcategory";
import { Updates } from "./pages/Dashboard/products/Updates";
import Addcategory from "./pages/Dashboard/categorys/Addcategory";
import Category from "./pages/Category";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/products" element={<Products />} />
			<Route path="/product/:id" element={<ProductDetails />} />
			<Route path="/category/:id" element={<Category />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />

			{/* admin */}
			<Route path="/admin/category" element={<Listcategory />} />
			<Route path="/admin/product" element={<Listproducts />} />
			<Route path="/admin/category/add" element={<Addcategory />} />
			<Route path="/admin/product/add" element={<Addproduct />} />
			<Route path="/admin/category/update/:id" element={<Editcategory />} />
			<Route path="/admin/product/update/:id" element={<Updates />} />
		</Routes>
	);
}

export default App;
