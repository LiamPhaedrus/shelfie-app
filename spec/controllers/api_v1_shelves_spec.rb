require 'rails_helper'

describe Api::V1::ShelvesController, type: :controller do
  let(:json_parsed_response) { JSON.parse(response.body) }

  describe "GET #index" do
    before(:each) do
      @user = FactoryGirl.create(:user)
    end

    it 'it returns nothing if not signed in' do
      get :index

      expect(json_parsed_response).to have_content("you do not have access to this page")
    end
  end
end
