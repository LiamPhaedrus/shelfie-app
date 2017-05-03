class Placement < ApplicationRecord
  belongs_to :book
  belongs_to :user
  belongs_to :shelf, optional: true

  validates :spot, numericality: { only_integer: true }, allow_nil: true
  validates :user_id, presence: true
  validates :book_id, presence: true
end
