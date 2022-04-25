// exports.getProducts = (req, res, next) => {

//     res.status(200).json({posts: [{title: "First Post", content: "This is the first post"}]});
// };

exports.createProduct = (req, res, next) => {
    const lastName = req.body.name

    res.status(201).json({posts: [{title: "First Post", content: lastName}]});
    
};

exports.createUser = (req,res,next) => {
    //Create post in db
  
    // const lastName = req.body.name
    // const name = req.body.name
    res.status(201).json({
        message: firstName,
        post: "asdad"
    })
}