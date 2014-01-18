Kickstarter.Routers.ProjectRouter = Backbone.Router.extend ( {
  initialize: function (projects, $rootEl) {
    this.projects = projects;
    this.$rootEl = $rootEl;
  },

  routes: {
    '': 'index',
    'projects/new': 'new',
    'projects/:id': 'show'

  },

  index: function () {
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