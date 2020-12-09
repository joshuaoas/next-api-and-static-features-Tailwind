import React from "react";

export default function Summary(props) {
	return (
		<div className="bg-gray-100 py-6">
			<div className="container mx-auto px-6">
				<div>
					<div
						className="text-2xl text-gray-900 font-thin"
						dangerouslySetInnerHTML={{ __html: props.summary }}
					/>
				</div>
			</div>
		</div>
	);
}
