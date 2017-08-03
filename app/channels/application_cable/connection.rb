module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      self.current_user = find_verified_user
    end

    private
    def find_verified_user
      # puts "TRYING TO FIND USER WITH ID: ", cookies.signed[:user_id]
      # this requires changes to app/controllers/session_controller to also
      # set cookie.signed[:user_id] on login, since sessions is not available
      # to us in ActionCable
     if verified_user = User.find_by(id: cookies.signed[:user_id])
       verified_user
     else
       reject_unauthorized_connection
     end
    end

  end
end
