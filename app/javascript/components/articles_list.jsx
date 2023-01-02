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
		p 
			| loading
	)
	const dataSection = loadedArticles.map((article, index) =>
		div
			table
				thead
					tr
						th Title
				tbody
					tr
						td {article.Title}
	)

	if(loading) {
		return loadingSection
	} else {
		return dataSection
	}
}


const root = ReactDOM.createRoot(document.getElementById("articles-list-container"));
root.render(<ArticlesList />)