require 'rails_helper'
require 'shoulda-matchers'

describe Shelf, type: :model do
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:user_id) }
  it { should validate_numericality_of(:size) }
end
