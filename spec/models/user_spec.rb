require 'rails_helper'
require 'shoulda-matchers'

describe User, type: :model do
  subject { create(:user) }

  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:email) }
  it { should validate_uniqueness_of(:email) }
  it { should validate_length_of(:password) }
end
