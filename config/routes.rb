Rails.application.routes.draw do
  devise_for :users
  root 'static_pages#index'
  # get '*path', to 'static_pages#index'
  get '/books', to: 'static_pages#index'
  get '/books/*path', to: 'static_pages#index'
  get '/shelves', to: 'static_pages#index'
  get '/cases/*path', to: 'static_pages#index'
  get '/cases', to: 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :books, only: [:index, :create]
      resources :shelves, only: [:index, :show]
      resources :placements, only: [:update]
      resources :cases, only: [:index, :create]
    end
  end
end
