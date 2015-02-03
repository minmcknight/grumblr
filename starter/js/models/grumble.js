var GrumbleModel = Backbone.Model.extend({
  defaults: {
    author: '',
    content: '', 
    avatar: '',
    title: '',

  }
})

var grumble = new GrumbleModel({
  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZNh8APXY6Kuvz2IMZRBGbslGumBAuV2W12gQrlhHPmgHoBbBN6D_muas',
  author: 'jesse',
  title: 'smelly cat',
  content: 'what are they feeding you'

})