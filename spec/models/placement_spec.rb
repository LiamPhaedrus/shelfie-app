require 'rails_helper'
require 'shoulda-matchers'

describe Placement, type: :model do
  it { should validate_presence_of(:user_id) }
  it { should validate_presence_of(:book_id) }
  it { should_not validate_presence_of(:shelf_id) }
  it { should validate_numericality_of(:spot).only_integer }
  it { should_not validate_presence_of(:spot) }
end
