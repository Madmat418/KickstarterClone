Kickstarter::Application.routes.draw do

  resources :users, :only => [:new, :create]
  resource :user, :only => [:show]
  resource :session, :only => [:new, :create, :destroy]
  resources :projects, :only => [:new, :create, :show, :index] do
    resources :rewards, :only => [:new, :create]
  end

  resources :rewards, :only => [] do
    resources :supports, :only => [:create]
  end
end
