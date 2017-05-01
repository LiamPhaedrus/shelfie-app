class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :confirmable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :collections
  has_many :books, through: :collections

  validates :name, presence: true
end
