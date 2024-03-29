class User < ActiveRecord::Base
	attr_accessible :email, :password, :password_confirmation
	has_secure_password
	validates :password, presence: true, on: :create, length: {minimum: 6}
	validates :email, presence: true, on: :create
	before_create { generate_token(:auth_token) }

	has_many :somethings, as: :parent

	def generate_token(column)
		begin
			self[column] = SecureRandom.urlsafe_base64
		end while User.exists?(column => self[column])
	end
end
