import React from "react";
import Layout from "../../components/Layout";
// import characters from '../../data/characters.json'
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Banner from "../../components/Banner";
import Bar from "../../components/Bar";
import Summary from "../../components/Summary";
import Cast from "../../components/Cast";
import SeasonList from "../../components/SeasonList";

const Matlock = ({ seasons, info, cast }) => (
	<Layout>
		<div>
			<Banner name={info.name} />
			<Bar
				rating={info.rating.average}
				premiered={info.premiered}
				network={info.network.name}
				country={info.network.country.name}
			/>
			<Summary summary={info.summary} />
			<Cast cast={cast} />
		</div>
		<SeasonList runningSeasons={seasons} />
	</Layout>
);

//export async function getStaticProps(context) {
export async function getStaticProps() {
	//Matlock.getStaticProps = async context => {
	//Matlock.getInitialProps = async () => {
	const response = await fetch("http://localhost:3000/api/matlock/cast");
	const cast = await response.json();

	const response2 = await fetch("http://localhost:3000/api/matlock/seasons");
	const seasons = await response2.json();

	const response3 = await fetch("http://localhost:3000/api/matlock");
	const info = await response3.json();
	return { props: { seasons, info, cast } };
}

export default Matlock;
