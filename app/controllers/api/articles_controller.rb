module Api
	class ArticlesController < ApplicationController

		def index
			@articles = RssService.call()["Items"]
			@articles = filter_by(params["search_term"])

			render(json: {articles: @articles.sort{|a, b| DateTime.parse(b["PublishDate"]) <=> DateTime.parse(a["PublishDate"]) }})
		end

		def create
		end

		def filter_by(search_term)
			if search_term.blank?
				return @articles
			end
			return @articles.select {|x| x["Title"].downcase.include? search_term.downcase or x["Feed"].downcase.include? search_term.downcase or x["PublishDate"].include? search_term}
		end
	end
end