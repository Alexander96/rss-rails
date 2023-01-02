import React from "react";
import ReactDOM from "react-dom/client";

class ArticlesList extends React.Component {
	render() {
		return (
			<div>articles list react</div>
		)
	}
}


const root = ReactDOM.createRoot(document.getElementById("articles-list-container"));
root.render(<ArticlesList />)