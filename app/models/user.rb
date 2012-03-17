class User < ActiveRecord::Base
	attr_accessible :email, :password, :password_confirmation
	has_secure_password
	validates :password, presence: true, on: :create
	validates :email, presence: true, on: :create
	before_create { generate_token(:auth_token) }

	def generate_token(column)
		begin
			self[column] = SecureRandom.urlsafe_base64
		end while User.exists?(column => self[column])
	end
end
