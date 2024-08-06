import Navdashbord from "../../../components/Dashboard/Navdashbord";
import Footer from "../../../components/Dashboard/Footer";
import Listproductsss from "../../../components/Dashboard/product/ListProducts";

export const Listproducts = () => {
	return (
		<div className=" px-10">
			<Navdashbord />
			<Listproductsss />
			<Footer />
		</div>
	);
};
