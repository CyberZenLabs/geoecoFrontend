exports.getPosts = (req, res, next) => {
    res.status(200).json({posts: [{title: "First Post", content: "This is the first post"}]});
};

exports.createPost = (req,res,next) => {
    //Create post in db
    const title = req.body.title
    res.status(201).json({
        message: "Post Created succesfully",
        post: "asdad"
    })
}