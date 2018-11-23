const express=require('express');
const router=express.Router();
var servePost=require('./Modal/postModal');


router.get('/',(req,res)=>{
  res.json({
    name: "route url                                method",
    getPost: "/getPost                              [get]",
    savePost: "/postIt                              [post]",
    searchPOst: "/getPost/:head                     [get]",
    getSpecifiedPOstData: "/editPost/get/:id        [get]",
    updateThePost: "/editPost/update/:id            [post]",
    deleteThePost: "/deletePost/:id                 [get]",
    saveContact: "/contact                          [post]"
  });
});

// Retrive All the Posts details From the DataBase
router.get("/getPost", (req, res) => {
  servePost.post.find((err, data) => {
    if (err) res.status(404).json({
      message:"Cannot Find The Post",
      error:err
    });
    console.log(data);
    res.status(200).json(data);
  });
});


// Save New Posts to the DataBase
router.post("/postIt", (req, res) => {
  var postData = new servePost.post(req.body);
  postData.save();
  res.status(200).json({ postData });
});


// Search A Post in the DataBase and return Complete details of the post
router.get('/getPost/:head', (req,res) => {
  servePost.post.find({ postHead: new RegExp(req.params.head) }, (err, data) => {
    if (err) res.status(404).json({
      message: "Cannot Connect To the DataBase",
      error: err
    });
    res.json(data);
    console.log(data);
  });
});


//get specified Post Data
router.get("/editPost/get/:id", (req, res) => {
  const ID=req.params.id;
  servePost.post.findById(ID,(err,data)=>{
    if (err) res.status(404).json({
      message: "Cannot Find The Post ",
      error: err,
      postId:ID
    });
    res.status(200).json(data);
  });
});


// Update all the Modified Details of the Post and save to the database
router.post("/editPost/update/:id", (req, res) => {
  const ID = req.params.id;
  console.log(ID);
  servePost.post.findById(ID,(err, data) => {
    if (err) res.status(404).json({
      message: "Cannot Find The Post ",
      error: err,
      postId: ID
    });
    console.log(data.name);
    data.email=req.body.email;
    data.name=req.body.name;
    data.postHead = req.body.postHead;
    data.postTime = req.body.postTime;
    data.postMessage = req.body.postMessage;
    data.save();
    console.log(data);
    res.status(200).json(data);
});
});

// Delete A post from the DataBase and update the server
router.get("/deletePost/:id", (req, res) => {
  const ID = req.params.id;
  servePost.post.findByIdAndDelete({_id:ID},(err)=>{
    if (err) res.status(404).json({
      message: "Cannot Find The Post ",
      error: err,
      postId: ID
    });
    res.status(200).json({
      message:"Post Deleted"
    });
  });
});

router.post('/contact',(req,res)=>{
  var contact = new servePost.contact(req.body);
  contact.save();
  res.status(200).json({
    message:"Contacted",
    userMessage:"We will Contact you Shortly"
  });
});
module.exports=router;
