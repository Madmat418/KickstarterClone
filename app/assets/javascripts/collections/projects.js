Kickstarter.Collections.Projects = Backbone.Collection.extend({
  model: Kickstarter.Models.Project,
  initialize: function (options) {
    this.category_id = options.category_id;
  },


  url: function() {
    console.log(this.category_id)
    return 'api/categories/' + this.category_id + '/projects'
  }
});