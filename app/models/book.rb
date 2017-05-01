class Book < ApplicationRecord
  validates :title, presence: true
  validates :isbn,
    length: { in: 10..13 },
    numericality: { only_integer: true },
    allow_nil: true

  has_many :collections
  has_many :users, through: :collections
end
