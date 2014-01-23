Kickstarter.Routers.ProjectRouter = Backbone.Router.extend ( {
  initialize: function (projects, users, $rootEl) {
    var that = this
    this.users = users;
	this.categories = new Kickstarter.Collections.Categories();
	
	console.log(this.categories);
	console.log('watwatwat');
    this.projects = projects;
    this.$rootEl = $rootEl;
	console.log('router');
  },

  routes: {
    '': 'index',
    'projects/new': 'new',
    'projects/:id': 'show',
	'users/:id': 'profile', 
    'categories/:category_id/projects': 'category'
  },
  
  profile: function (id) {
  
    var profileView = new Kickstarter.Views.UserView ( {
	  model: this.users.get(id)
	});
	
	this._swapView(profileView);
  },
  
  category: function (id) {
    var projectIndex = new Kickstarter.Views.ProjectIndex ( {
      collection: new Kickstarter.Collections.Projects ( {
	    category_id: id
	  })
    });

    this._swapView(projectIndex);
  },

  index: function () {
    var that = this;
    this.categories.fetch({
	  success: function() {
	    var categoryIndex = new Kickstarter.Views.CategoriesIndex ( {
	      collection: that.categories
	    })	
	    that._swapView(categoryIndex);
      }
	});
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