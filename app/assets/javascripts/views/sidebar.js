Kickstarter.Views.Sidebar = Backbone.View.extend ( {
  template: JST['sidebar'],
  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }

})