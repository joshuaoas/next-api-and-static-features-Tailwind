import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Router from 'next/router'


function Home () {

	useEffect(() => {
		const {pathname} = Router
		if(pathname == '/' ){
		   Router.push('/matlock')
		}
	}, [])
	
	return(
		<Layout>
			
		</Layout>
	)
}

export default Home;
