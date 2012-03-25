class FixParentTypeColumn < ActiveRecord::Migration
  def change
		rename_column :somethings, :parent_class, :parent_type
  end
end
