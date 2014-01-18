window.Kickstarter = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    var $rootEl = $('#main');
    var projects = new Kickstarter.Collections.Projects('all');
    var view = new Kickstarter.Views.Sidebar();
    $('#sidebar').html(view.render().$el);

    projects.fetch({
      success: function () {
        new Kickstarter.Routers.ProjectRouter(projects, $rootEl);
        Backbone.history.start();
      },
      error: function () {
        console.log('Experienced an error in fetching data');
      }
    });
  }
};

$(Kickstarter.initialize);