class SomethingsController < ApplicationController

  def create
		@something = Something.new(params[:something])
		@something.save
		respond_to do |format|
			format.html
			format.js
		end
  end

  def update
		@something = Something.find(params[:id])
		respond_to do |format|
			if @something.update_attributes(params[:something])
				format.html { redirect_to(@something) }
				format.js
			end
		end
  end

  def destroy
		@something = Something.find(params[:id])
		@something.destroy
		#redirect_to user_path(current_user)
  end

end
