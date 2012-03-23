class CreateSomethings < ActiveRecord::Migration
  def change
    create_table :somethings do |t|
      t.integer :parent_id
      t.string :parent_class
      t.string :content

      t.timestamps
    end
  end
end
