class CaseSerializer < ActiveModel::Serializer
  attributes :id, :name, :location

  has_many :shelves
end
