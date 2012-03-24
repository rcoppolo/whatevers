Whatevers::Application.routes.draw do

	resources :users, :sessions, :somethings

	match '/signin' => 'sessions#new'
	match '/signout' => 'sessions#destroy'
	match '/signup' => 'users#new'

	root :to => 'users#home'

end
