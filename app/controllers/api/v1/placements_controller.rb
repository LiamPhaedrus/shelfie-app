class Api::V1::PlacementsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:update]

  def update
    if current_user

      place = Placement.find(update_params['id'])
      new_spot = update_params['spot']
      shelf = nil
      if update_params['shelf_id']
        shelf = Shelf.find(update_params['shelf_id'])
      end

      if update_params['shelf_id'].nil?
        place.update!(spot: update_params['spot'], shelf_id: update_params['shelf_id'])
        render json: {
          status: 201,
          message: ("You moved the book"),
          shelves: shelves_info(current_user.id),
          books: book_info(current_user.id)
        }.to_json
      elsif shelf.placements.pluck(:spot).include?(new_spot)
        filtered_p = shelf.placements.where(spot: [new_spot..shelf.size])
        sorted_p = filtered_p.order(:spot)

        increment = new_spot

        sorted_p.each do |placement|
          if placement.spot == increment && placement != place
            increment += 1
            placement.update(spot: increment)
          else
            break
          end
        end
        place.update!(spot: update_params['spot'], shelf_id: update_params['shelf_id'])
        render json: {
          status: 201,
          message: ("BLARGH"),
          shelves: shelves_info(current_user.id),
          books: book_info(current_user.id)
          # books: @places
        }.to_json
      else
        place.update!(spot: update_params['spot'], shelf_id: update_params['shelf_id'])
        # @places = Placement.where(user: current_user)
        render json: {
          status: 201,
          message: ("You moved the book"),
          shelves: shelves_info(current_user.id),
          books: book_info(current_user.id)
          # books: @places
        }.to_json
      end
    end
  end

  private

  def update_params
    params.require(:placement).permit(:id, :spot, :shelf_id)
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
      hash[:title] = placed.book.title
      hash[:author] = placed.book.author
      hash[:bookId] = placed.book.id
      hash[:spot] = placed.spot
      hash[:cover] = placed.book.cover_photo
      hash[:shelfId] = placed.shelf_id
      books << hash
    end
    books
  end
end
