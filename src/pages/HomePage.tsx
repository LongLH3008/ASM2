import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { IProduct } from "../interfaces/Iproduct";
import { ICategory } from "../interfaces/Icategory";
import UsequeryCategory from "../hooks/categorys/UsequeryCategory";
import { getProductAdmin } from "../hooks/products/UseProductQuery";

const HomePage = () => {
	const { data: products } = getProductAdmin();
	const { data: categories } = UsequeryCategory();

	const categoryMap = categories?.reduce((acc: Record<string, string>, category: ICategory) => {
		acc[category.id as string] = category.name;
		return acc;
	}, {});
	return (
		<div className="min-w-full">
			<Header />
			<main className="w-full h-[80vh] bg-cover bg-[#B5DCB0] bg-[url('/assets/banner.svg')]">
				<div className=" *:ml-24 pt-10 *:my-4">
					<p className="w-[50%] text-[#505F4E] text-6xl font-bold">
						Wir kümmern uns um Ihre schöner Garten und Haus
					</p>
					<p className="w-[30%]">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
						Ipsum has been the industry's standard dummy text ever since the 1500s,
					</p>
					<button className="w-[12%] border-[#505F4E] border-2 text-[#505F4E] px-4 py-2">
						Lern mehr
					</button>
				</div>
			</main>
			<section>
				<div className="my-10">
					<p className="text-2xl font-bold text-[#505F4E] mx-20 my-10">Best sellers</p>
					<div className="grid grid-cols-4 gap-20 mx-20">
						{products?.map((item: IProduct) => (
							<div className="flex flex-col" key={item.id}>
								<img className="h-60" src={item.image} alt={item.name} />
								<Link to={`/product/${item.id}`} className="font-bold">
									{item.name}
								</Link>
								<div className="flex justify-between items-center">
									<p>{categoryMap?.[item.category as string]}</p>
									<p>${item.price}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<div className=" flex items-center justify-center h-[88vh] bg-[#f7f4f0]">
				<div className="grid grid-cols-4 grid-rows-2 gap-4 w-full max-w-screen-lg p-4 mt-2 h-[80vh]">
					<div className="col-span-2 row-span-2 bg-red-500 bg-[url('/assets/sell1.svg')] bg-cover">
						<p className="bg-white opacity-50 text-xl p-3 mt-5 font-bold">Garten Spaten</p>
					</div>
					<div className="col-span-1 row-span-1 bg-green-500 bg-cover bg-[url('/assets/sell2.svg')]">
						<p className="bg-white opacity-50 text-xl p-3 mt-2 font-bold">Garten Spaten</p>
					</div>
					<div className="col-span-1 row-span-1 bg-blue-500 bg-cover bg-[url('/assets/sell3.svg')]">
						<p className="bg-white opacity-50 text-xl p-3 mt-2 font-bold">Garten Spaten</p>
					</div>
					<div className="col-span-1 row-span-1 bg-yellow-500 bg-cover bg-[url('/assets/sell4.svg')]">
						<p className="bg-white opacity-50 text-xl p-3 mt-2 font-bold">Garten Spaten</p>
					</div>
					<div className="col-span-1 row-span-1 bg-purple-500 bg-cover bg-[url('/assets/sell5.svg')]">
						<p className="bg-white opacity-50 text-xl p-3 mt-2 font-bold">Garten Spaten</p>
					</div>
				</div>
			</div>

			<section className="">
				<div className="bg-[#f7f4f0] flex items-center justify-center h-[88vh]">
					<div className="grid grid-cols-4 grid-rows-2 gap-4 w-full max-w-screen-lg mt-2  *:col-span-1 *:row-span-1 *:h-80">
						{categories?.map((item: ICategory) => (
							<a
								href={`/category/${item.id}`}
								key={item.id}
								className={`bg-[url('${item.image}')] bg-cover justify-end flex items-start`}
							>
								<div>
									<p className="text-white text-md p-1 mt-1 font-bold">
										{item.name}
									</p>
									<p className="text-white text-sm pl-1">
										{
											products?.filter(
												(prod: IProduct) => prod.category == item.id
											)?.length
										}{" "}
										items
									</p>
								</div>
							</a>
						))}
					</div>
				</div>
			</section>

			<div className="p-6 mt-20 max-w-4xl mx-auto my-10 ">
				<div className="mb-8 ">
					<legend className="text-[40px] font-baloo font-semibold leading-10 text-[#505f4e]">
						Etwas abonnieren*
					</legend>
					<legend className="text-[40px] font-baloo font-semibold leading-10 text-[#505f4e]">
						_ Unser Newsletter
					</legend>
				</div>
				<div className="flex flex-col md:flex-row gap-8 items-center">
					<div className="flex-1 text-center md:text-left">
						<p className="text-gray-600">
							Get weekly updates about our product in your email. No spam guaranteed—we
							promise ✌️
						</p>
					</div>
					<div className="flex items-center gap-4">
						<div className="relative flex items-center">
							<img
								src="../../image/email.png"
								alt="Email Icon"
								className="absolute left-3"
							/>
							<input
								type="text"
								placeholder="youremail123@gmail.com"
								className="pl-12 py-2 border border-gray-300 rounded w-full md:w-auto"
							/>
						</div>
						<button className="bg-[#656C66] text-white px-4 py-2 rounded">Abonnieren</button>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default HomePage;
