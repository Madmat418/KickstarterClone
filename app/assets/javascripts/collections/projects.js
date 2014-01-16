Kickstarter.Collections.Projects = Backbone.Collection.extend({
  model: Kickstarter.Models.Project

  initialize: function (category) {
    if (category === 'all') {
      this.category = '';
    } else {
      this.category = '/' + category;
    }
  },

  url: function() {
    return '/projects' + this.category;
  }
});