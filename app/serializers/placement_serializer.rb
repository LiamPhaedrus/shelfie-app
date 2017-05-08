class PlacementSerializer < ActiveModel::Serializer
  attributes :id, :spot, :title, :author, :isbn, :shelf_id, :location_info, :cover_photo

  def title
    object.book.title
  end

  def author
    object.book.author
  end

  def isbn
    object.book.isbn
  end

  def cover_photo
    object.book.cover_photo
  end

  def location_info
    if object.shelf
      {
        shelf_name: object.shelf.name,
        case_name: object.shelf.case.name,
        case_location: object.shelf.case.location
      }
    else
      ''
    end
  end
end
