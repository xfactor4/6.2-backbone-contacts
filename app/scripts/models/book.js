var Book = Backbone.Model.extend({
  defaults: function(){
    return {
      name: "",
      email: "",
      phone: "",
      twitter: "",

    }
  },

  validate: function(attributes) {
    var errors = {};
    if(_.isEmpty(attributes.name)){
      errors.name = "Must have a valid title";
    }
    if(_.isEmpty(attributes.email)){
      errors.email = "Must have a valid author";
    }
    return _.keys(errors).length ? errors : undefined;
  }
});

export default Book;
