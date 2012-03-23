Whatevers::Application.routes.draw do
  get "somethings/create"

  get "somethings/update"

  get "somethings/destroy"

	resources :users, :sessions, :somethings
	match '/signin' => 'sessions#new'
	match '/signout' => 'sessions#destroy'
	match '/signup' => 'users#new'

	root :to => 'pages#home'
end
