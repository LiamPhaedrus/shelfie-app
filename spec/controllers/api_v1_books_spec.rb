require 'rails_helper'

describe Api::V1::BooksController, type: :controller do
  let(:json_parsed_response) { JSON.parse(response.body) }

  describe "GET #index" do
    before(:each) do
      @user = FactoryGirl.create(:user)
      @book = FactoryGirl.create(:book)
      @book_two = FactoryGirl.create(:book)
    end

    it 'it returns data to a signed in user' do
      Collection.create(user: @user, book: @book)
      Collection.create(user: @user, book: @book_two)
      sign_in(@user)
      get :index

      expect(response.status).to eq 200

      expect(json_parsed_response["user"]).to eq(@user.name)
      expect(json_parsed_response["books"]).to have_content(@book.author)
      expect(json_parsed_response["books"]).to have_content(@book_two.title)
    end
  end
end
