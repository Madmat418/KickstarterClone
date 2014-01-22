Kickstarter.Collections.Supports = Backbone.Collection.extend ({
  model: Kickstarter.Models.Support,
  initialize: function (options) {
    if (!options) {
	  this.reward_id = 0;
	} else {
      this.reward_id = options.reward_id;
	};
  },
  url: function() {
    var url = 'api/rewards/' + this.reward_id + '/supports';
	return url}
});