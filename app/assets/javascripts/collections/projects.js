Kickstarter.Collections.Projects = Backbone.Collection.extend({
  model: Kickstarter.Models.Project,
  initialize: function (options) {
    this.category_id = options.category_id;
  },


  url: function() {
    return 'api/categories/' + this.category_id + '/projects'
  }
});