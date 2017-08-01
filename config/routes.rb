Rails.application.routes.draw do

  get 'password_resets/new'

  root 'home#welcome'

  get '/login' => 'session#new'
  post '/login'  => 'session#create'
  delete '/login'  => 'session#destroy'


  mount ActionCable.server => '/cable'

  get '/users/search' => 'users#search'

  post '/chatrooms/:id' => 'chatrooms#add_user'

  resources :messages
  resources :users
  resources :chatrooms
  resources :password_resets

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
