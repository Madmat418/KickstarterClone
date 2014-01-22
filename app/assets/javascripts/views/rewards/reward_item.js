Kickstarter.Views.RewardItem = Backbone.View.extend({
  tagName: 'li',
  template: JST['rewards/reward_item'],
  
  initialize: function(options) {
    this.counter = options.counter;
  },
  
  render: function() {
    console.log(this.model);
	console.log('rendering');
    var content = this.template({reward: this.model.reward, counter: this.counter});
	this.$el.html(content);
	return this;
  }
});