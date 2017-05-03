class CreateShelves < ActiveRecord::Migration[5.0]
  def change
    create_table :shelves do |t|
      t.string :name, default: "shelf", null: false
      t.integer :size, default: 20, null: false

      t.belongs_to :user, null: false
      t.timestamps
    end
  end
end
