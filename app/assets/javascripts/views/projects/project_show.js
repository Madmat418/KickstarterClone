Kickstarter.Views.ProjectShow = Backbone.View.extend({
  template: JST['projects/show'],

  render: function () {
    var rewardArray = [];
    this.model.get('rewards').forEach(function(reward) {
      rewardArray.push(reward);
    })
    var content = this.template({ project: this.model, rewards: rewardArray });
    this.$el.html(content);
    return this
  }
})