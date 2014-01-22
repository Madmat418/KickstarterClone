Kickstarter.Views.NewProject = Backbone.View.extend({
  template: JST['projects/new'],
  className: 'project-new',
  

  render: function() {
    var content = this.template({rewards: this.rewards});
    this.$el.html(content);
    return this;
  },
  
  initialize: function() {
    this.rewardCounter = 1;
  },

  events: {
    'click #create': 'submit',
	'submit #add-reward': 'createReward'
  },
  
  createReward: function (event) {
    var that = this;
	event.preventDefault();
	var data = this.$('#add-reward').serializeJSON();
	var view = new Kickstarter.Views.RewardItem( {model: data, counter: this.rewardCounter})
	this.rewardCounter++;
	this.$('#rewards').append(view.render().$el)
	$("#modal").removeClass("is-active")
  
  },

  submit: function (event) {
    var that = this
    event.preventDefault();
    var data = this.$('#project-form').serializeJSON();
	console.log('here');
	console.log(data.project.rewards);
    this.collection.create(data, {
      success: function(project) {
        console.log('success');
        that._navToShow(project);
      },
      error: function() {
        console.log('error')
      }
  })
     if(!this.model.id) {
       this.collection.create(data, { success: this._navToShow });
     } else {
       this.model.save(data, { success: this._navToShow });
     }
  },

  _navToShow: function (project) {
    console.log('this is a test');
    console.log(project);

    Backbone.history.navigate("#/projects/" + project.id, {trigger: true });
  }
});