import React from "react";
import Layout from "../components/Layout";

const Login = () => (
	<Layout>
		<div className="container mx-auto px-4 mt-40">
			<section className="py-8">
				<div className="w-full max-w-sm mx-auto">
					<form>
						<div className="mb-4">
							<input
								className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
								type="text"
								placeholder="Email"
							/>
						</div>
						<div className="mb-4">
							<input
								className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
								type="password"
								placeholder="Password"
							/>
						</div>

						<div className="mb-4">
							<button className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow">
								Sign in
							</button>
						</div>
					</form>
				</div>
			</section>
		</div>
	</Layout>
);

export default Login;
