import React from "react";
import Link from "next/link";

export default function SeasonList(props) {
	return (
		<div className="shadow-md bg-gray-100 py-6">
			<div className="container mx-auto px-6">
				<h2 className="text-3xl ">Seasons</h2>
				<div className="flex flex-wrap -mx-1 lg:-mx-4">
					{props.runningSeasons.map(season => (
						<div
							key={season.id}
							className="my-1 px-1 w-1/2 sm:w-1/2 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/4"
						>
							<Link
									href="/matlock/season/[id]"
									as={`/matlock/season/${season.number}`}
									
								>
							<div className="shadow-lg bg-white p-4" style={{cursor:"pointer"}}>
								
									<a className="font-semibold text-gray-800">
										Season {season.number}
									</a>
								
								<p className="text-gray-500">
									{season.premiereDate} - {season.endDate}
								</p>
							</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
