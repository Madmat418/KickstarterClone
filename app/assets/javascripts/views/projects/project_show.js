Kickstarter.Views.ProjectShow = Backbone.View.extend({
  template: JST['projects/show'],
  
  initialize: function() {
    var collection = new Kickstarter.Collections.Supports();
	collection.fetch();
    this.listenTo(collection, 'add', this.render);	  
  },
  
  events: {
    'click .add-support': 'addSupport'
  },

  render: function () {
    var rewardArray = [];
	console.log('rendering');
    this.model.get('rewards').forEach(function(reward) {
      rewardArray.push(reward);
    })
    var content = this.template({ project: this.model, rewards: rewardArray });
    this.$el.html(content);
    return this
  },
  
  addSupport: function (event) {
    var that = this;
    event.preventDefault;
	console.log('adding support');
	var id = event.currentTarget.id;
	var supports = new Kickstarter.Collections.Supports({
	  reward_id: id
	});
	supports.create()
  }
  
  
})