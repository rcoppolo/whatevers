Whatevers::Application.routes.draw do
	resources :users, :sessions
	match '/login' => 'sessions#new'
	match '/logout' => 'sessions#destroy'
	match '/signup' => 'users#new'
	root :to => 'pages#home'
end
