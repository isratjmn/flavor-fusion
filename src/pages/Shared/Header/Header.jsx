import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
	const { user } = useContext(AuthContext);
	const [isNavOpen, setIsNavOpen] = useState(false);
	return (
		<nav className="bg-white border-gray-200 dark:bg-gray-900 items-end">

			<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					
						<Link to="/" className="flex items-center">
							<img
								src="https://i.ibb.co/wM5KgLt/hot-pot.png"
								className="h-12 mr-2"
								alt="Logo"
							/>
							<span className="self-center text-xl font-extrabold whitespace-nowrap dark:text-white">
								FlavorFusion
							</span>
						</Link>
						<div className="flex md:order-2">
							<p className="flex gap-3 items-center">
								{user.displayName}
							</p>
							<button
								type="button"
								className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-base px-9 py-3 text-center mr-2 mb-2 "
							>
								Login
							</button>

							<button
								data-collapse-toggle="navbar-sticky"
								type="button"
								className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
								aria-controls="navbar-sticky"
								aria-expanded="false"
							></button>
						</div>
					
					<div
						className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
						id="navbar-sticky"
					>
						<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<li>
								<NavLink
									to="/"
									title="Home"
									className={({ isActive }) =>
										isActive ? "active" : "default"
									}
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/blog"
									className={({ isActive }) =>
										isActive ? "active" : "default"
									}
								>
									Blog
								</NavLink>
							</li>
						</ul>
					</div>
				</div>

				{/* Mobile Navbar Section */}
				<div className="lg:hidden">
					{/* Dropdown open Button */}
					<button
						title="Open Menu"
						aria-label="open Menu"
						onClick={() => setIsNavOpen(true)}
					>
						<Bars3BottomRightIcon className="w-5 text-gray-600" />
					</button>
					{isNavOpen && (
						<div className="absolute top-0 left-0 w-full z-10">
							<div className="p-5 bg-white border rounded shadow-sm">
								{/* Logo & Button section */}
								<div className="flex items-center justify-between mb-4">
									<div>
										<Link
											to="/"
											className="inline-flex items-center"
										>
											<div className="flex flex-col">
												<figure>
													<img
														className="w-12 ms-9"
														src="https://i.ibb.co/wM5KgLt/hot-pot.png"
														alt="logo"
													/>
												</figure>
												<span className="ml-2 text-xl font-extrabold text-indigo-800 tracking-wide">
													FlavorFusion
												</span>
											</div>
										</Link>
									</div>
									{/* Dropdown Menu Close Button */}
									<div>
										<button
											aria-label="Close Menu"
											title="Close Menu"
											onClick={() => setIsNavOpen(false)}
										>
											<XMarkIcon className="w-5 text-gray-600" />
										</button>
									</div>
								</div>
								{/* Mobile Nav Items Section */}
								<nav>
									<ul className="space-y-4">
										<li>
											<Link to="/" className="default">
												Home
											</Link>
										</li>
										<li>
											<Link
												to="/blog"
												className="default"
											>
												Blog
											</Link>
										</li>
									</ul>
								</nav>
								<button
									type="button"
									className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-base px-9 py-3 text-center mr-2 mb-2 "
								>
									Login
								</button>
							</div>
						</div>
					)}
				</div>
			</nav>
		</nav>
	);
};

export default Header;
