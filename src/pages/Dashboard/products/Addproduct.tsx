import Navdashbord from "../../../components/Dashboard/Navdashbord";
import Footer from "../../../components/Dashboard/Footer";
import AddProducts from "../../../components/Dashboard/product/AddProducts";

export const Addproduct = () => {
	return (
		<div className=" px-10">
			<Navdashbord />
			<AddProducts />
			<Footer />
		</div>
	);
};
