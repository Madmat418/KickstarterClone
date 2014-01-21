Kickstarter.Routers.ProjectRouter = Backbone.Router.extend ( {
  initialize: function (projects, users, $rootEl) {
    this.users = users;
    this.projects = projects;
    this.$rootEl = $rootEl;
	console.log('router');
  },

  routes: {
    '': 'index',
    'projects/new': 'new',
    'projects/:id': 'show',
	'users/:id': 'profile'  

  },
  
  profile: function (id) {
  console.log(this.users);
  console.log(this.users.get(id));
    var profileView = new Kickstarter.Views.UserView ( {
	  model: this.users.get(id)
	});
	
	this._swapView(profileView);
  },

  index: function () {
  console.log(this.users);
  console.log(this.projects);
    var projectIndex = new Kickstarter.Views.ProjectIndex ( {
      collection: this.projects,
    });

    this._swapView(projectIndex);
  },

  show: function (id) {
    var projectShow = new Kickstarter.Views.ProjectShow ( {
      model: this.projects.get(id)
    });

    this._swapView(projectShow);
  },

  new: function () {
    var newProject = new Kickstarter.Views.NewProject({
      collection: this.projects,
      model: new Kickstarter.Models.Project()
    });

    this._swapView(newProject);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});