FactoryGirl.define do
  factory :user do
    name "April"
    sequence(:email) { |n| "countess@tamedlightning.com" }
    password "something"
  end
end
