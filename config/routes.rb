Kickstarter::Application.routes.draw do

  resources :users, :only => [:new, :create, :show]
  resource :session, :only => [:new, :create, :destroy]
  resources :projects, :only => [:new, :create, :show, :index] do
    resources :support, :only => [:create]
    resources :rewards, :only => [:new, :create]
  end
end
