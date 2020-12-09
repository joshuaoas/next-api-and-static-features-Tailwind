import React from "react";
import Link from "next/link";

export default function Cast(props) {
	return (
		<div className="container mx-auto px-6 py-6">
			<h2 className="text-3xl py-5">The Cast</h2>
			<ul className="flex flex-wrap -mx-1 lg:-mx-4">
				{props.cast.map(char => (
					<li
						key={char.person.id}
						className="my-1 px-1 w-1/2 sm:w-1/2 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/4"
					>
						<Link
									href="/matlock/cast/[id]"
									as={`/matlock/cast/${char.character.id}`}
								>
						<div className="bg-white rounded-sm shadow-xl overflow-hidden" style={{cursor:"pointer"}}>
							
							<img
								className="w-full object-cover"
								src={(char.person.image || {}).medium}
							/>
							
							<div className="p-4">
								<p className="font-semibold">{char.person.name}</p>
								<p>
									as{" "}
									<span className="text-gray-700">{char.character.name}</span>
								</p>
							</div>
						</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
