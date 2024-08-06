import Navdashbord from "../../../components/Dashboard/Navdashbord";
import Footer from "../../../components/Dashboard/Footer";
import EditProducts from "../../../components/Dashboard/product/EditProducts";

export const Updates = () => {
	return (
		<div className=" px-10">
			<Navdashbord />
			<EditProducts />
			<Footer />
		</div>
	);
};
