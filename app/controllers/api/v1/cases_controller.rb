class Api::V1::CasesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

  def index
    if user_signed_in?
      @cases = Case.where(user: current_user)
      render json: @cases
    else
      render json: {
        errors: 'you do not have access to this page'
      }
    end
  end

  def create
    bookcase = Case.new(name: params['bookcase']['name'], location: params['bookcase']['location'])
    bookcase.user = current_user
    if bookcase.save!
      params['shelves'].each do |shelf|
        new_shelf = Shelf.new(name: shelf['name'], size: shelf['size'], user: current_user, case: Case.last)
        if new_shelf.save!
        else
          render json: {
            status: 400,
            error: new_shelf.errors
          }.to_json, status: :bad_request
          break
        end
      end
      render json: {
        status: 201,
        message: 'success!'
      }.to_json
    else
      render json: {
        status: 400,
        error: bookcase.errors
      }.to_json, status: :bad_request
    end
  end

  private
end
