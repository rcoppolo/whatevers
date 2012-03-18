Whatevers::Application.routes.draw do
	resources :users, :sessions
	match '/signin' => 'sessions#new'
	match '/signout' => 'sessions#destroy'
	match '/signup' => 'users#new'
	root :to => 'pages#home'
end
