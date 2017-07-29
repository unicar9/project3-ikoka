class Chatroom < ApplicationRecord
  has_many :messages
  has_many :users, through: :messages
  validates :topic, presence: true
end
