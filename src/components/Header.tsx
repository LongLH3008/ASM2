import React, { useState } from "react";
import Filter from "./Filter";

const Header = () => {
	const [search, setSearch] = useState<string | boolean>(false);
	const [isLogin, setIsLogin] = useState<boolean>(false);

	const user = localStorage.getItem("user");

	return (
		<nav className="max-w-full flex flex-wrap flex-col border-gray-200 bg-gradient-to-r from-[#4E7C32] to-[#4e7c3287]">
			<div className="max-w-screen-xl flex flex-wrap  mx-auto p-4">
				<div className="flex">
					<div
						className="relative  md:block"
						id="dropdownDefaultButton"
						data-dropdown-toggle="dropdown"
					>
						<input
							onChange={(e) => setSearch(e.target.value)}
							type="text"
							id="search-navbar"
							className="block w-[35rem] p-2  text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
							placeholder="Suchen Sie nach Produkten, Marken und mehr"
						/>
						<div className="absolute inset-y-0 end-0 flex items-center pr-3 pointer-events-none">
							<span className="sr-only">Search icon</span>
							<svg
								className="w-4 h-4 text-gray-500 dark:text-gray-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 20 20"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
								/>
							</svg>
						</div>
					</div>
					{/* {search &&} */}
					<div
						id="dropdown"
						className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-1/3"
					>
						<ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
							<Filter keyword={search} />
						</ul>
					</div>
				</div>
				<button
					data-collapse-toggle="navbar-default"
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-default"
					aria-expanded="false"
				>
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
				<div className="hidden w-full md:block md:absolute md:end-0 md:w-auto mr-32">
					<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
						<li>
							<a
								href="#"
								className="block py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0  "
							>
								En
							</a>
						</li>
						{isLogin ? (
							<li>
								<a
									href="/login"
									className="block py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0  "
								>
									Login / Register
								</a>
							</li>
						) : (
							<li>
								<a
									href="/login"
									className="block py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0  "
								>
									Login / Register
								</a>
							</li>
						)}

						<li>
							<a
								href="#"
								className="block py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 "
							>
								Cart
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="w-full">
				<ul className="w-[90%] ml-[5%] font-medium flex flex-wrap justify-center items-center p-2 my-4 border-t-2 border-white">
					<li>
						<a
							href="#"
							className="block py-2 px-6 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0  "
						>
							Beleuchtung
						</a>
					</li>
					<li>
						<a
							href="#"
							className="block py-2 px-6 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0  "
						>
							Growbox
						</a>
					</li>
					<li>
						<a
							href="#"
							className="block py-2 px-6 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 "
						>
							Dünger
						</a>
					</li>
					<li>
						<a
							href="#"
							className="block py-2 px-6 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0  "
						>
							Erde & Substrate
						</a>
					</li>
					<li>
						<a
							href="#"
							className="block py-2 px-6 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0  "
						>
							Töpfe & Behälter
						</a>
					</li>
					<li>
						<a
							href="#"
							className="block py-2 px-6 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 "
						>
							Bewässerung{" "}
						</a>
					</li>
					<li>
						<a
							href="#"
							className="block py-2 px-6 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0  "
						>
							Pflanzen & Gärtnern
						</a>
					</li>
					<li>
						<a
							href="#"
							className="block py-2 px-6 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0  "
						>
							Lüftung & Klimaanlage
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
