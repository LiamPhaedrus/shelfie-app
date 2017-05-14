class Api::V1::BooksController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :index]

  def index
    if user_signed_in?
      user = current_user
      books = user.books.order(:title)
      render json: { books: books }
    else
      render json: {
        errors: 'you do not have access to this page'
      }
    end
  end

  def show
    book = Placement.where({user: current_user, book_id: params[:id]})
    render json: book[0]
  end

  def create
    book = Book.new(new_book_params)
    if book.save
      book.users << current_user
      render json: {
        status: 201,
        message: ('Successfully added a book!'),
        book: book
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
    params.require(:book).permit(:title, :author, :isbn, :cover_photo)
  end
end
