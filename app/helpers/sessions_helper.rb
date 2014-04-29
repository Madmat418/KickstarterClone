module SessionsHelper
  def log_in(user)
    puts 'here I am'
    session[:token] = user.reset_session_token!
  end

  def current_user
    if User.find_by_session_token(session[:token])
      return User.find_by_session_token(session[:token])
	else
	  return User.find_by_id(1)
	end
  end

  def logged_in?
    !!current_user
  end

  def log_out
    current_user.reset_session_token!
    session[:token] = nil
  end

  def require_current_user!
    redirect_to new_session_url if !logged_in?
  end

  def require_no_current_user!
    redirect_to root_url if logged_in?
  end
end
