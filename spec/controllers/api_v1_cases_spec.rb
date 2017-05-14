require 'rails_helper'

describe Api::V1::CasesController, type: :controller do
  let(:json_parsed_response) { JSON.parse(response.body) }

  describe "GET #index" do
    before(:each) do
      @user = FactoryGirl.create(:user)
    end

    it 'it returns nothing if not signed in' do
      get :index
      expect(json_parsed_response).to have_content("you do not have access to this page")
    end

    it 'it returns data to a signed in user' do
      case_bob = Case.create(user: @user, name: 'case bob', location: 'underhill')
      shelf_one = Shelf.create(name: 'top', size: 15, case: case_bob, user: @user)
      shelf_two = Shelf.create(name: 'bottom', size: 22, case: case_bob, user: @user)
      sign_in(@user)
      get :index

      expect(response.status).to eq 200

      expect(json_parsed_response).to have_content(case_bob.name)
      expect(json_parsed_response).to have_content(case_bob.location)
      expect(json_parsed_response[0]["shelves"]).to have_content(shelf_one.name)
      expect(json_parsed_response[0]["shelves"]).to have_content(shelf_two.size)
    end
  end
end
