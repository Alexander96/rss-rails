module Api
	class ArticlesController < ApplicationController
		def index
			articles = [{
				Title: "test title",
				Link: "https://www.cnn.com/travel/article/indonesia-criminal-code-tourists-intl-hnk/index.html",
				GUID: "testguid",
				PublishDate: "2022-12-07T10:59:15Z",
				Description: "test desc"
			},
			{
				Title: "test title",
				Link: "https://www.cnn.com/travel/article/indonesia-criminal-code-tourists-intl-hnk/index.html",
				GUID: "testguid",
				PublishDate: "2022-12-07T10:59:15Z",
				Description: "test desc"
			}]

			render(json: {articles: articles})
		end
	end
end