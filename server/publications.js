Meteor.publish("tapahtumat",function(){
  return Titeenit.tapahtumat.find();
});