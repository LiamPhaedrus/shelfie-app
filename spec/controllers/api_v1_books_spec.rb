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
      Placement.create(user: @user, book: @book)
      Placement.create(user: @user, book: @book_two)
      sign_in(@user)
      get :index

      expect(response.status).to eq 200

      expect(json_parsed_response["books"]).to have_content(@book.author)
      expect(json_parsed_response["books"]).to have_content(@book_two.title)
    end
  end

  describe "GET #show" do
    before(:each) do
      @user = FactoryGirl.create(:user)
      @book = FactoryGirl.create(:book)
      @book_two = FactoryGirl.create(:book)
    end

    it "it returns only one book's data to a signed in user" do
      Placement.create(user: @user, book: @book)
      Placement.create(user: @user, book: @book_two)
      sign_in(@user)
      get :show, params: { id: @book.id }

      expect(response.status).to eq 200

      expect(json_parsed_response).to have_content(@book.title)
      expect(json_parsed_response).to_not have_content(@book_two.title)
    end
  end


  describe "POST #create" do
    let(:user) {create :user}

    let(:correct_book_params) { { title: 'Feed', author: 'Mira Grant', isbn: '9780316081054' } }
    let(:bad_params) { { title: '', isbn: '10' } }

    it "user can successfully add a book and gets back JSON" do
      sign_in(user)
      expect { post :create, params: { book: correct_book_params} }.to change{ user.books.count }.by 1
    end

    it "returns an error when payload is incorrect" do
      sign_in(user)
      post :create, params: { book: bad_params }

      expect(response.status).to eq 400
      expect(json_parsed_response.keys).to have_content('error')
      expect(json_parsed_response['error']).to have_content({
        "title"=>["can't be blank"],
        "isbn"=>["is too short (minimum is 10 characters)"]
      })
    end
  end
end
