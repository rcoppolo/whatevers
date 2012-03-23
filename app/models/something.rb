class Something < ActiveRecord::Base
	belongs_to :parent, polymorphic: true
	has_many :somethings, as: :parent
end
