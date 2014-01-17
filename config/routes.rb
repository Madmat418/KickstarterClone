Kickstarter::Application.routes.draw do
  root to: "root#root"
  resources :users, :only => [:new, :create]
  resource :user, :only => [:show]
  resource :session, :only => [:new, :create, :destroy]
  namespace :api, :defaults => { :format => :json } do
    resources :projects, :only => [:new, :create, :show, :index] do
      resources :rewards, :only => [:new, :create]
    end

    resources :rewards, :only => [] do
      resources :supports, :only => [:create]
    end
  end
end
