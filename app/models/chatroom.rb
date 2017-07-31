class Chatroom < ApplicationRecord
  has_many :messages
  has_many :users, -> { uniq }, through: :messages
  validates :topic, presence: true
end
