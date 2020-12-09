import React from "react";

export default function Banner(props) {
	return (
		<div
			style={{
				backgroundSize: "cover",
				backgroundPosition: "center top",
				backgroundImage: "url(Matlock-banner.jpg)"
			}}
		>
			<div
				style={{
					backgroundSize: "cover",
					backgroundPosition: "center top",
					background:
						"linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2))"
				}}
				className="bg-cover bg-center py-40"
			>
				<div className="container mx-auto px-6">
					<h2 className="text-6xl font-bold mb-2 text-white">{props.name}</h2>
					<div>
						<div
							className="text-2xl mb-8 text-gray-200"
							dangerouslySetInnerHTML={{ __html: props.summary }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
