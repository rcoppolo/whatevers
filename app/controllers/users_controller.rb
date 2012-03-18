class UsersController < ApplicationController

	def new
		@user = User.new
	end

	def create
		@user = User.new(params[:user])
		if @user.save
			cookies.permanent[:auth_token] = @user.auth_token
			redirect_to root_url, :success => 'Signed up!'
		else
			flash[:alert] = "Something went wrong."
			render 'new'
		end
	end
end
