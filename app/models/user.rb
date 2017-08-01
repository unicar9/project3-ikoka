class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: true, length: {minimum: 5}
  validates :name, presence: true

  has_many :messages
  has_many :chatrooms, -> { uniq }, through: :messages

  before_create { generate_token(:auth_token) }

  def generate_token(column)
    begin
      self[column] = SecureRandom.urlsafe_base64
    end while User.exists?(column => self[column])
  end

  def send_password_reset
    generate_token(:password_reset_token)
    self.password_reset_sent_at = Time.zone.now
    save!
    UserMailer.password_reset(self).deliver
  end
end
