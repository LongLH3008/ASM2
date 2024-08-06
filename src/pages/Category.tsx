import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getProductAdmin } from "../hooks/products/UseProductQuery";
import UsequeryCategory from "../hooks/categorys/UsequeryCategory";
import { useParams } from "react-router-dom";
import { IProduct } from "../interfaces/Iproduct";

type Props = {};

const Category = (props: Props) => {
	const { id } = useParams();
	const { data: products } = getProductAdmin();
	const { data: categories } = UsequeryCategory(id);

	return (
		<div>
			<Header />
			<h2 className="px-20 text-3xl my-5 font-semibold">{categories?.name}</h2>
			<p className="px-20">{products?.filter((item: IProduct) => item.category == id)?.length} products</p>
			<div className="px-20 pt-10">
				<div className="flex">
					<div className="w-4/6 p-4">
						<div className="grid grid-cols-3 gap-4">
							{products
								?.filter((item: IProduct) => item.category == id)
								.map((item: any) => (
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
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Category;
