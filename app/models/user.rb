# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string(255)      not null
#  password_digest :string(255)      not null
#  session_token   :string(255)      not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  attr_accessible :password, :username
  attr_accessor :password

  after_initialize :assign_session_token

  validates :username, :password_digest, :presence => true
  validates :password, :length => {minimum: 6}, :on => :create

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def assign_session_token
    self.session_token = generate_session_token
  end

  def reset_session_token!
    assign_session_token
    self.save!
    self.session_token
  end

  def self.find_by_credentials(params_hash)
    user = User.find_by_username(params_hash[:username])
    user.is_password?(params_hash[:password]) ? user : nil
  end





end
