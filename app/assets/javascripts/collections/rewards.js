Kickstarter.Collections.Rewards = Backbone.Collection.extend ({
  model: Kickstarter.Models.Reward,
  initialize: function (options) {
    this.project_id = options.project_id
  },
  url: function(){
    var url = 'api/projects/' + this.project_id + '/rewards';
	return url;
  }
})