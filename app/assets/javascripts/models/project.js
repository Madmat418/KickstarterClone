Kickstarter.Models.Project = Backbone.Model.extend({
  initialize: function (options) {
    this.category = options.category;
    this.name = options.name;
    this.goal = options.goal;
  }
})