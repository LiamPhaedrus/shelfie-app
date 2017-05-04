class Case < ApplicationRecord
  validates :units, numericality { only_integer: true, greater_than: 0 }

  has_many :shelves
  belongs_to :user
end
