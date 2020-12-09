import React from "react";
import Layout from "../../../components/Layout";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import PageHead from "../../../components/PageHead";

import { useRouter } from "next/router";
//import characters from "../../data/matlock/characters.json";

const Cast = ({ character }) => {
	const router = useRouter();
	//const character = characters[router.query.id];
	return (
		<Layout>
			<div>
				<PageHead title={character.person.name} />
				<div className="container mx-auto px-6 py-6">
				
				<img src={character.person.image.original} /> 
				<h3 className="text-lg leading-6 font-medium text-gray-900">Role: {character.character.name}</h3>
				<p>Birthdate: {character.person.birthday}</p>
				<p>Death: {character.person.deathday}</p>
				</div>
			</div>
		</Layout>
	);
};

//export async function getStaticProps({ params }) {
Cast.getInitialProps = async ({ query }) => {
	const { id } = query;

	const response = await fetch(
		`http://localhost:3000/api/characters/${id}`
	);

	const character = await response.json();

	console.log(character);

	//return { props: { episodes } };
	return { character };
};

export default Cast;
