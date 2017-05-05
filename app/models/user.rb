class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :confirmable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :shelves
  has_many :cases
  has_many :placements
  has_many :books, through: :placements

  validates :name, presence: true
end
