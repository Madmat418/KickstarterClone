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
	'click #submit': 'createReward',
	'click #reward-modal': 'showModal'
  },
  
  showModal: function () {
    $("#myModal").show();
	$(".modal-backdrop").show();
  },
  
  createReward: function (event) {
	event.preventDefault();
	var data = this.$('#add-reward').serializeJSON();
	var view = new Kickstarter.Views.RewardItem( {model: data, counter: this.rewardCounter});
	this.rewardCounter++;
	this.$('#rewards').append(view.render().$el);
    $("#myModal").hide();
	$(".modal-backdrop").hide();
	$('#add-reward')[0].reset();
  },
  
  submit: function (event) {
    var that = this
    event.preventDefault();
    var data = this.$('#project-form').serializeJSON();
	var project = new Kickstarter.Models.Project(data);
	project.save({}, {
      success: function(project) {
	    console.log(project);
		console.log('success');
        that._navToShow(project);
      },
      error: function() {
        console.log('error')
      }
    })
  },

  _navToShow: function (project) {
    console.log('this is a test');
    console.log(project);

    Backbone.history.navigate("#/projects/" + project.id, {trigger: true });
  }
});