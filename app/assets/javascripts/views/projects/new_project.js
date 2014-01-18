Kickstarter.Views.NewProject = Backbone.View.extend({
  template: JST['projects/new'],
  className: 'project-new',

  render: function() {
    var content = this.template;
    this.$el.html(content);
    return this;
  },

  events: {
    'click #create': 'submit'
  },

  submit: function (event) {
    var that = this
    event.preventDefault();
    console.log(this.$el);
    var data = this.$('#project-form').serializeJSON();
    console.log(data);
    this.collection.create(data, {
      success: function(project) {
        console.log('success');
        that._navToShow(project);
      },
      error: function() {
        console.log('error')
      }
  })
    // if(!this.model.id) {
//       this.collection.create(data, { success: this._navToShow });
//     } else {
//       this.model.save(data, { success: this._navToShow });
//     }
  },

  _navToShow: function (project) {
    console.log('this is a test');
    console.log(project);

    Backbone.history.navigate("#/projects/" + project.id, {trigger: true });
  }
});