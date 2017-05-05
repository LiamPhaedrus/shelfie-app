class Api::V1::CasesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

  def index
    @cases = Case.where(user: current_user)
    render json: @cases
  end

  def create
    # bookcase = Case.new(name: new_case_params['name'], location: new_case_params['location'])
    # bookcase.user = current_user
    # if bookcase.save!
      # new_case_params['shelves'].each do |shelf|
      #   s = Shelf.new(name: shelf['name'], size: shelf['size']), user: current_user)
      #   if s.save!
      #
      #   else
      #     render json: {
      #       status: 400,
      #       error: shelf.errors
      #     }.to_json, status: :bad_request
      #   end
    #   end
    # else
    # end
  end

  private

  def new_case_params
    params.require(:bookcase).permit(:name, :location, :shelves)
  end
end
