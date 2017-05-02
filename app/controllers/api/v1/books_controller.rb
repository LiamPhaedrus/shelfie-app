class Api::V1::BooksController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :index]

  def index
    user = current_user
    books = user.books
    render json: { user: user.name, books: books }
  end

  def create
    book = Book.new(new_book_params)
    binding.pry
    if book.save
      book.users << current_user
      render json: {
        status: 201,
        message: ('Successfully added a book!')
      }.to_json
    else
      flash[:notice] = 'Review failed to save'
      render json: {
        status: 400,
        error: book.errors
      }.to_json, status: :bad_request
    end
  end

  private

  def new_book_params
    params.require(:book).permit(:title, :author, :isbn)
  end
end