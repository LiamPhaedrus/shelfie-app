class Shelf < ApplicationRecord
  validates :name, presence: true
  validates :size, numericality: { only_integer: true }
  validates :user_id, presence: true

  belongs_to :user
  has_many :placements
  has_many :books, through: :placements
end
