class Api::V1::BooksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    user = current_user
    books = user.books
    render json: { user: user.name, books: books }
  end
end
