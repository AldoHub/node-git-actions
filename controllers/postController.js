const postController = {
    getAllPosts: (req, res) => {
      console.log(req);  
      res.status(200).json({
        data: "this would be an array of posts!!"
      });  
    }
}

module.exports = postController;