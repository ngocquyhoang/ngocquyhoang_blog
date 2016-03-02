class CreateContactMessages < ActiveRecord::Migration
  def change
    create_table :contact_messages do |t|
      t.text :name
      t.text :email
      t.text :subject
      t.text :message

      t.timestamps null: false
    end
  end
end
