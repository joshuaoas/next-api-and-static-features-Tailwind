import React from "react";
import Layout from "../../../components/Layout";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import PageHead from "../../../components/PageHead";

import { useRouter } from "next/router";
//import characters from "../../data/matlock/characters.json";

const Season = ({ episodes }) => {
	const router = useRouter();
	//const character = characters[router.query.id];
	return (
		<Layout>
			<div>
				<PageHead title={'Season ' + episodes[0].season} />
				<div className="container mx-auto px-6 py-6">
				<ul>
					{episodes.map(episode => (
						<li key={episode.id} style={{marginBottom: "30px"}}>
							<h3 className="text-lg leading-6 font-medium text-gray-900">{episode.name}</h3>
							<p>Air date: {episode.airdate}</p>
							<p>Runtime: {episode.runtime}</p>
							{episode.summary ? (
								<div dangerouslySetInnerHTML={{ __html: episode.summary }} />
							) : null}
						</li>
					))}
				</ul>
				</div>
			</div>
		</Layout>
	);
};

//export async function getStaticProps({ params }) {
Season.getInitialProps = async ({ query }) => {
	const { id } = query;

	const response = await fetch(
		`http://localhost:3000/api/matlock/season/${id}`
	);

	const episodes = await response.json();

	console.log(episodes);

	//return { props: { episodes } };
	return { episodes };
};

export default Season;
