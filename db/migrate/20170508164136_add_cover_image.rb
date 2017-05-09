class AddCoverImage < ActiveRecord::Migration[5.0]
  def change
    add_column :books, :cover_photo, :string
  end
end
