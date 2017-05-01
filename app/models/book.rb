class Book < ApplicationRecord
  validates :title, presence: true
  validates :isbn,
    length: { in: 10..13 }
    numericality: { only_integer: true },
    allow_nil: true
end
