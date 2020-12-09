import React from "react";
import Link from "next/link";

const Nav = () => (
	<div className="container mx-auto px-4" id="content">
		<nav className="flex flex-wrap items-center justify-between p-4">
			<div className="flex flex-shrink-0 mr-6">
				<Link href="/">
					<a className="text-xl text-indigo-500 font-semibold">Brand</a>
				</Link>
			</div>
			<div className="block lg:hidden">
				<button className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
					<svg
						className="fill-current h-3 w-3"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
					</svg>
				</button>
			</div>
			<div className="navbar-menu hidden lg:flex lg:flex-grow lg:items-center w-full lg:w-auto">
				<div className="lg:mr-auto">
					<Link href="/matlock">
						<a className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
							Matlock
						</a>
					</Link>
				</div>
				<div>
					<Link href="/login">
						<a className="inline-block py-3 px-5 mr-4 leading-none text-center text-blue-700 bg-indigo-100 hover:bg-indigo-200 rounded shadow">
							Sign in
						</a>
					</Link>

				</div>
			</div>
		</nav>
	</div>
);

export default Nav;
