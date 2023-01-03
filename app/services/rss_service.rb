require 'net/http'
require 'uri'
require 'httparty'

class RssService < ApplicationService
  attr_accessor :urls

  def initialize()
    @urls = [
        "http://rss.cnn.com/rss/edition.rss",
        "http://rss.cnn.com/rss/edition_world.rss",
        "http://rss.cnn.com/rss/edition_asia.rss",
        "http://rss.cnn.com/rss/edition_travel.rss",
        "http://rss.cnn.com/rss/cnn_latest.rss"
    ]
    @login_uri = URI("http://localhost:8080/login")
    @rss_uri = URI("http://localhost:8080/rss")
    @token = ""

    Net::HTTP.start(@login_uri.host, @login_uri.port,
      :use_ssl => false, 
      :verify_mode => OpenSSL::SSL::VERIFY_NONE) do |http|

      request = Net::HTTP::Get.new @login_uri.request_uri
      request.basic_auth 'admin', 'admin'

      response = http.request request

      puts response
      puts response.body
      @token = response.header["token"]
    end
  end

  def call
    HTTParty.get(@rss_uri, body: { urls: @urls }.to_json, headers: {token: @token, "Content-Type" => "application/json"})
  end
end