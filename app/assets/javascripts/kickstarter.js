window.Kickstarter = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    var $rootEl = $('#main');
    var projects = new Kickstarter.Collections.Projects('all');

    console.log('help');

    projects.fetch({
      success: function () {
        console.log('meh');
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