import React from "react";

export default function Bar(props) {
	return (
		<div className="shadow-md">
			<div className="container mx-auto px-6">
				<div className="flex">
					<div className="py-4 mr-6">
						<span className="font-semibold text-gray-800">
							Average Rating:{" "}
						</span>
						<span className="text-gray-600">{props.rating}</span>
					</div>
					<div className="py-4 mr-6">
						<span className="font-semibold text-gray-800">Premiered: </span>
						<span className="text-gray-600">{props.premiered}</span>
					</div>
					<div className="py-4 mr-6">
						<span className="font-semibold text-gray-800">Network: </span>
						<span className="text-gray-600">{props.network}</span>
					</div>
					<div className="py-4 mr-6">
						<span className="font-semibold text-gray-800">Country: </span>
						<span className="text-gray-600">{props.country}</span>
					</div>
				</div>
			</div>
		</div>
	);
}
