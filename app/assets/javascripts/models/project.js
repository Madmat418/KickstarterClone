Kickstarter.Models.Project = Backbone.Model.extend({
  urlRoot: 'api/projects/',
  
  initialize: function(options) {
    this.category_id = options.category_id;
	this.description = options.description;
	this.end_time = options.end_time;
	this.goal = options.goal;
	this.name = options.name;
	this.rewards = options.rewards;
  }
})