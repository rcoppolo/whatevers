class ApplicationController < ActionController::Base
  protect_from_forgery

	private

	def current_user
		return nil if @current_user === false
		@current_user || User.find_by_auth_token(cookies[:auth_token]) if cookies[:auth_token] || false
	end
	
	def current_somethings
		current_user.somethings
	end
	helper_method :current_user, :current_somethings

end
