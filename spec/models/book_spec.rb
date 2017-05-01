require 'rails_helper'
require 'shoulda-matchers'

describe Book, type: :model do
  subject { create(:book) }

  it { should validate_presence_of(:title) }
  it { should validate_length_of(:isbn) }
end
