require 'rails_helper'

RSpec.describe 'Articles Test', type: :system do
  describe 'index page' do
    it 'shows the right content' do
      visit root_path
      expect(page).to have_content('CNN') # checking for CNN if the rss feed, because that's the init seed
    end
  end
end
