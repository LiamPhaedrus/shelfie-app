FactoryGirl.define do
  factory :book do
    sequence(:title) { |n| "Title #{n}"}
    author { "Firstname Lastname" }
    isbn { "1234567890" }
  end
end
