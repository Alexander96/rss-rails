import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";


function ArticlesList() {
  const [loadedArticles, setLoadedArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchTextChange = (e) => {
    setSearchTerm(e.target.value);
  }

  useEffect(() => {
    // hit server and get articles
    const apiEndpoint = `/api/articles?search_term=${searchTerm}`

    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setLoadedArticles(data["articles"]);
      })
  },[searchTerm])

  function dataSection(onSearchTextChange) {
    return (
    <div>
      <div className="p-4">
      <label className="sr-only">Search</label>
      <div className="relative mt-2">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              ></path>
          </svg>
        </div>
        <input onChange={onSearchTextChange} type="text" id="table-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5   " placeholder="Search for items"></input>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-200 border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Title
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Published Date
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Feed
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loadedArticles.map((article, index) =>{ return (
                  <tr key={index} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {article.Title}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {article.PublishDate}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {article.Feed}
                    </td>
                  </tr>
                  )})}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  }

  return dataSection(onSearchTextChange)
}

const root = ReactDOM.createRoot(document.getElementById("articles-list-container"));
root.render(<ArticlesList />)