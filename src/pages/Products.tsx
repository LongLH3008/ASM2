import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import UsequeryCategory from "../hooks/categorys/UsequeryCategory";
import { getProductAdmin } from "../hooks/products/UseProductQuery";

const Products = () => {
	const { data: products } = getProductAdmin();
	const { data: categories } = UsequeryCategory();

	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

	const filteredProducts = selectedCategory
		? products?.filter((product: any) => product.category === selectedCategory)
		: products;

	return (
		<div>
			<Header />
			<div className="grid-cols-4 grid gap-10 my-10 px-32 *:w-[193px] *:h-[62px] *:bg-[#D2E8CD] *:border-[#D2E8CD]">
				{categories?.map((item: any) => (
					<div
						key={item.id}
						className="flex items-center border p-1 rounded border-solid cursor-pointer"
						onClick={() => setSelectedCategory(item.id)}
					>
						<img src={item.image} className="w-[55px] h-[45px]" alt="image1" />
						<p className="font-open-sans font-semibold text-[15px] leading-3 ml-2">
							{item.name}
						</p>
					</div>
				))}
			</div>
			<div className="px-20 pt-10">
				<div className="flex space-x-4">
					<div className="flex items-center space-x-2 border border-gray-300 rounded px-2">
						<span className="font-inter font-normal text-[18px] leading-6">Sort By :</span>
						<input
							type="text"
							placeholder="Newest"
							className="border-none focus:outline-none"
						/>
						<img src="../../image/down.png" alt="down arrow" className="w-4 h-4" />
					</div>
					<div className="flex items-center space-x-2 border border-gray-300 rounded px-2">
						<span className="font-inter font-normal text-[18px] leading-6">Show :</span>
						<input
							type="text"
							placeholder="Default"
							className="border-none focus:outline-none"
						/>
						<img src="../../image/down.png" alt="down arrow" className="w-4 h-4" />
					</div>
				</div>
				{/* sell */}
				<div className="flex">
					<div className="w-4/6 p-4">
						<div className="grid grid-cols-3 gap-4">
							{filteredProducts?.map((item: any) => (
								<div key={item.id} className="relative">
									<div className="w-[200px] m-auto">
										<img
											className="w-[200px] h-[200px] m-auto rounded"
											src={item.image}
											alt="Product"
										/>
										<p className="font-iner font-semibold text-[17px] leading-6">
											{item.name}
										</p>
										<p>
											<span className="">${item.price}</span>
											{/* <span className="line-through ml-2 opacity-45">$45.00</span> */}
										</p>
									</div>
									<div className="flex justify-center space-x-2 absolute inset-0 opacity-0 hover:opacity-100 items-center bg-white bg-opacity-5">
										<img
											src="../../image/GitDiff.png"
											alt="GitDiff"
											className="w-[35px] h-[30px] border bg-white p-1 rounded"
										/>
										<img
											src="../../image/Tote.png"
											alt="Tote"
											className="w-[35px] h-[30px] border p-1  bg-[#4E7C32] text-white rounded"
										/>
										<img
											src="../../image/Heart.png"
											alt="Heart"
											className="w-[35px] h-[30px] border bg-white p-1 rounded"
										/>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="w-2/6 p-4">
						<legend className="font-baloo font-normal text-2xl leading-10 mb-6">
							Kategorien
						</legend>
						{categories?.map((item: any, index: number) => (
							<div key={item.id} className="mb-4 ml-3 text-[13px]">
								<input
									onChange={() => setSelectedCategory(item.id)}
									type="radio"
									id={`option`}
									name="ôk"
									checked={selectedCategory == item.id}
									className="mr-2 w-[13px] h-[13px]"
								/>
								<label className="font-sans font-normal text-[15px]">{item.name}</label>
							</div>
						))}
						<div className="relative mt-6 w-[213px] h-[262px]">
							<img
								src="../../image/tải xuống.jpg"
								alt="Plant"
								className="w-[213px] h-[262px] object-cover opacity-50 rounded"
							/>
							<div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
								<p className="font-inter font-semibold text-[19px] leading-7 mb-20 text-center">
									Grow your own favourite plant
								</p>
								<button className="flex items-center text-white px-4 py-2 rounded">
									Shop Now
									<img
										src="../../image/ArrowCircleRight.png"
										alt="Arrow"
										className="ml-2 w-4 h-4"
									/>
								</button>
							</div>
						</div>
						<div>
							<p className="ml-2 mt-10 font-inter font-semibold text-[17px] leading-5">
								Filter By Price
							</p>
							<img src="../../image/price_renge.png" alt="" />
							<p className="font-inter font-normal text-[15px] leading-5 opacity-90 ml-2">
								From $0 to $800
							</p>
							<input
								type="range"
								className="w-[180px] h-1 bg-gray-300 rounded-full cursor-pointer"
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Products;
