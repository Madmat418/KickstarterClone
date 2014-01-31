Kickstarter.Views.ProjectShow = Backbone.View.extend({
  template: JST['projects/show'],
  className: 'project-show',
  
  initialize: function(options) {
    console.log('initializing');
    this.collection = new Kickstarter.Collections.Supports();
	this.collection.fetch();
	this.rewards = new Kickstarter.Collections.Rewards({project_id: this.model.id});
	this.rewards.fetch();
	this.model = options.model;
	this.model.fetch();
    this.listenTo(this.collection, 'all', this.render);	    
	this.listenTo(this.model, 'all', this.render);	

    this.model = options.model;	
  },
  
  events: {
    'click .add-support': 'addSupport'
  },

  render: function () {
    console.log(this);
    var content = this.template({ project: this.model, rewards: this.rewards });
    this.$el.html(content);
    return this
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
	  console.log('fetch');
	  that.collection.fetch();
	  that.model.fetch();
	}});
  }
  
  
})