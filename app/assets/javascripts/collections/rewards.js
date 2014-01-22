Kickstarter.Collections.Rewards = Backbone.Collection.extend ({
  model: Kickstarter.Models.Reward,
  url: function(){
    var url = 'api/' + this.project_id + '/rewards';
	return url;
  }
})