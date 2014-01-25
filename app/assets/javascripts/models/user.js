Kickstarter.Models.User = Backbone.Model.extend({
  parse: function(data) {
    if (data.supported_projects) {
	  this.supported_projects = new Kickstarter.Collections.Projects(data.supported_projects)
	}
	if (data.created_projects) {
	  this.created_projects = new Kickstarter.Collections.Projects(data.created_projects)
	}
	return data
  }
})