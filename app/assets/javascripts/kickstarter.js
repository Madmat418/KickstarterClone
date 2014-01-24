window.Kickstarter = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    var $rootEl = $('#main');
    var projects = new Kickstarter.Collections.Projects({
	  category_id: 0 });
	var users = new Kickstarter.Collections.Users();
    var categories = new Kickstarter.Collections.Categories();
    users.fetch();
    categories.fetch({ success: function() {
	  var view = new Kickstarter.Views.Sidebar( {collection: categories});
	  $('#sidebar').html(view.render().$el);
      projects.fetch({
        success: function () {
          new Kickstarter.Routers.ProjectRouter(projects, users, categories, $rootEl);
          Backbone.history.start();
        },
        error: function () {
          console.log('Experienced an error in fetching data');
        }
      });
	}});
  }
};

$(Kickstarter.initialize);