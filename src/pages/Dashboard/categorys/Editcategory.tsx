import Navdashbord from "../../../components/Dashboard/Navdashbord";
import Footer from "../../../components/Dashboard/Footer";
import EditCate from "../../../components/Dashboard/category/Editcate";

export const Editcategory = () => {
	return (
		<div className=" px-10">
			<Navdashbord />
			<EditCate />
			<Footer />
		</div>
	);
};
