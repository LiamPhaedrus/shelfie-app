class Api::V1::ShelvesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:index, :update]

  def index
    if current_user
      render json: {
        shelves: shelves_info(current_user.id),
        books: book_info(current_user.id),
        bookcases: case_info(current_user.id)
      }
    else
      render json: {
        errors: 'you do not have access to this page'
      }
    end
  end

  def update
    if current_user
      shelf = Shelf.find(empty_shelf_params['id'])
      books_to_remove = shelf.placements
      books_to_remove.update_all(spot: nil, shelf_id: nil)
      render json: {
        shelves: shelves_info(current_user.id),
        books: book_info(current_user.id)
      }
    end
  end

  private

  def empty_shelf_params
    params.require(:shelf_to_empty).permit(:id)
  end

  def shelves_info(id)
    shelves = []
    Shelf.where(user_id: id).each do |shelf|
      hash = {}
      hash[:bookcaseId] = shelf.case.id
      hash[:id] = shelf.id
      hash[:name] = shelf.name
      hash[:size] = shelf.size
      hash[:bookIds] = shelf.placements.pluck(:id)
      shelves << hash
    end
    shelves
  end

  def book_info(id)
    books = []
    Placement.where(user_id: id).each do |placed|
      hash = {}
      hash[:id] = placed.id
      hash[:bookId] = placed.book.id
      hash[:title] = placed.book.title
      hash[:author] = placed.book.author
      hash[:cover] = placed.book.cover_photo
      hash[:spot] = placed.spot
      hash[:shelfId] = placed.shelf_id
      if placed.shelf
        hash[:location] = "#{placed.shelf.case.name} at #{placed.shelf.case.location} - #{placed.shelf.name}"
      else
        hash[:location] = ''
      end
      books << hash
    end
    books
  end

  def case_info(id)
    bookcases = []
    Case.where(user_id: id).each do |bookcase|
      hash = {}
      hash[:id] = bookcase.id
      hash[:name] = bookcase.name
      hash[:location] = bookcase.location
      hash[:caseShelves] = bookcase.shelves
      bookcases << hash
    end
    bookcases
  end
end
