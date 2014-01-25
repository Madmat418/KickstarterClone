Kickstarter.Views.ProjectShow = Backbone.View.extend({
  template: JST['projects/show'],
  className: 'project-show',
  
  initialize: function(options) {
    this.collection = new Kickstarter.Collections.Supports();
	this.collection.fetch();
    this.listenTo(this.collection, 'all', this.render);	    
	this.listenTo(this.model, 'all', this.render);	

    this.model = options.model;	
  },
  
  events: {
    'click .add-support': 'addSupport'
  },

  render: function () {
    console.log('rendering');
	console.log(this.model);
	console.log(this.model.rewards);
    var rewardArray = [];
    this.model.get('rewards').forEach(function(reward) {
      rewardArray.push(reward);
    })
    var content = this.template({ project: this.model, rewards: rewardArray });
    this.$el.html(content);
    return this
  },
  
  supportRender: function () {
	var view = new Kickstarter.Views.ProjectShow({ model: this.model });
    $('.project-show').html(view.render().$el)
  },
  
  addSupport: function (event) {
    var that = this;
    event.preventDefault;
	var id = event.currentTarget.id;
	this.collection.reward_id = id
    new Kickstarter.Collections.Supports({
	  reward_id: id
	});

	this.collection.create({}, {success: function() {
	  that.model.fetch();
	}});
  }
  
  
})