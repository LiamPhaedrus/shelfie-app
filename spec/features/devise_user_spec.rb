require 'rails_helper'

feature 'sign-in' do
  let(:user) { create :user }
  scenario 'if user is not signed in, will be redirected to sign in page' do
    visit root_path
    expect(page).to have_content('Log In')
    expect(page).to have_content('Sign up')
    expect(page).to have_content('Forgot your password')
  end
  scenario 'user can successfully sign in' do
    visit root_path

    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Log In'

    expect(page).to_not have_content('Log In')
    expect(page).to have_css('div#react')
  end
end
