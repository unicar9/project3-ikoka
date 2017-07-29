Rails.application.routes.draw do

  root 'home#welcome'

  get '/login' => 'session#new'
  post '/login'  => 'session#create'
  delete '/login'  => 'session#destroy'


  mount ActionCable.server => '/cable'



  resources :messages
  resources :users
  resources :chatrooms

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
