class Case < ApplicationRecord
  has_many :shelves
  belongs_to :user
end
