var GrumblrView = Backbone.View.extend({
  initialize : function(){
    this.render()
  },
  render: function(){
    console.log( this.collection.models )
    $("#grumble-list").html('');
    _.each(grumbles.models, function(
      model){
      $('#grumble-list').append("<div class='grumble'>" +
       "<img src='" + model.get('avatar') + "'>" +
       "<h5>" + model.get('title')+ " | " + model.get('author') + 
       "</h5>" + "<p>" + model.get('content') + "</p>"+ "<span class='destroy' data-id='"+model.cid +"'>Delete</span>" + "<span class='edit' data-id='"+model.cid +"'>Edit</span>" + '</div>');
    })
  },
  el: '#grumble-form',
  events: {
    "click .new-grumble" : "add" ,
    "click .edit" : "edit",
    "click .destroy" : "delete"
  },

  add: function( event){
    var grumble = new GrumbleModel({
      title: $("[name='title']").val(),
      author:$("[name='author']").val(),
      avatar:$("[name='avatar']").val(),
      content:$("[name='content']").val()
    })
    this.collection.add(grumble)
    this.render()
  },
  //event.currentTarget is the DOM element that was clicked on. cid is store in the dat-id attribute
  delete:function(event){
    var cid = $(event.currentTarget).attr('data-id');
    this.collection.remove(cid);
    this.render();
    console.log(cid);
  },
  //grab the values out of the current cid, then repopulates it intothe form
  edit: function(event){
    var cid = $(event.currentTarget).attr('data-id');
    var grumble = this.collection.get(cid);
      $("[name='title']").val(grumble.get("title"));
      $("[name='author']").val(grumble.get("author"));
      $("[name='avatar']").val(grumble.get("avatar"));
      $("[name='content']").val(grumble.get("content"));
     this.delete(event);
     //hacky edit: it deletes, and then adds
  } 
  }); 

var grumbleView = new GrumblrView({
  collection: grumbles
})