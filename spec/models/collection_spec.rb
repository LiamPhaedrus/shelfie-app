require 'rails_helper'
require 'shoulda-matchers'

describe Collection, type: :model do
  it { expect(:user_id).not_to be(nil) }
  it { expect(:book_id).not_to be(nil) }
end
