import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";


function ArticlesList() {
	const [loading, setLoading] = useState(true);
	const [loadedArticles, setLoadedArticles] = useState([]);

	useEffect(() => {
		// hit server and get articles
		const apiEndpoint = "/api/articles"

		fetch(apiEndpoint)
			.then(response => response.json())
			.then(data => {
				console.log(data)
				setLoadedArticles(data["articles"]);
				setLoading(false);
			})
	},[])

	const loadingSection = (
		<div>loading</div>
	)
	const dataSection = (loadedArticles.map((article, index) =>{
		return (
			<a href="#" key={index} className="flex justify-center my-5">
				<div className=" rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0">
					<div className="w-full flex justify-between p-3">
					  <div className="flex">
						<span className="pt-1 ml-2 font-bold text-sm">{article.Title}</span>
					  </div>
					  <span className="px-2 hover:bg-gray-300 cursor-pointer rounded"><i className="fas fa-ellipsis-h pt-2 text-lg"></i></span>
					</div>
					<img className="w-full bg-cover"></img>
					<div className="px-3 pb-2">
					  <div className="pt-1">
						<div className="mb-2 text-sm">
						  <span className="font-medium mr-2">Description:</span>{article.Description}
						</div>
					  </div>
					  <div className="mb-2">
						<div className="mb-2 text-sm">
						  <span className="font-medium mr-2">PublishDate:</span>{article.PublishDate}
						</div>
					  </div>
					</div>
				  </div>
			  </a>
		)
	}))

	if(loading) {
		return loadingSection
	} else {
		return dataSection
	}
}


const root = ReactDOM.createRoot(document.getElementById("articles-list-container"));
root.render(<ArticlesList />)