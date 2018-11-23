var mongoose =require('mongoose');
var postSchema=mongoose.Schema;

var post = new postSchema({
name:String,
email:String,
postHead:String,
postMessage:String
},
{
  collection:'postDetails'
});
var contact = new postSchema({
  email:String,
  name:String,
  message:String
},
{
  collection:'contactDetails'
});
var postData = mongoose.model('postDetails', post);
var con= mongoose.model('contactDetails',contact);
module.exports={
  post:postData,
  contact: con
}
