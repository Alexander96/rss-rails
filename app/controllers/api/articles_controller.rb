module Api
	class ArticlesController < ApplicationController
		ARTICLES = [{
				Title: "test title",
				Link: "https://www.cnn.com/travel/article/indonesia-criminal-code-tourists-intl-hnk/index.html",
				GUID: "testguid",
				PublishDate: "2022-12-07T10:59:15Z",
				Feed: "test feed1",
				Description: "International travelers have been flocking back to the popular resort island of Bali as the Covid pandemic subsides, prompting hopes that Indonesia's battered tourism industry is on the road to recovery."
			},
			{
				Title: "test title",
				Link: "https://www.cnn.com/travel/article/indonesia-criminal-code-tourists-intl-hnk/index.html",
				GUID: "testguid",
				Feed: "test feed8",
				PublishDate: "2022-12-07T10:32:15Z",
				Description: "test desc"
			}]
		def index
			puts params["search_term"]
			articles = filter_by(params["search_term"])
			puts articles

			render(json: {articles: articles})
		end

		def filter_by(search_term)
			if search_term.blank?
				return ARTICLES
			end
			return ARTICLES.select {|x| x[:Title].include? search_term or x[:Feed].include? search_term or x[:PublishDate].include? search_term}
		end
	end
end