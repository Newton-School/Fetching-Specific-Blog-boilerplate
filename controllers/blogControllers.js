const Blog   = require("../models/blog.js");


const getAllBlog =async (req, res) => {

    const allBlog = await Blog.find({});
    res.status(200).json({
        status: "success",
        data: allBlog
    })
   
}


const createBlog = async (req, res) => {

    try{
        const blog = await Blog.create(req.body);
        res.status(200).json({
            message: 'Blog added successfully',
            blog_id: blog._id,
            status: 'success'
        });
    }catch(err){
        res.status(500).json({
            status: 'fail',
            message: err.message
        });
    }
}


const deleteBlog = async (req, res) => {

    const id = req.params.id;

    const blog = await Blog.findById(id);
    if(!blog)
    {
        res.status(404).json({
            status: 'fail',
            message: "Given Blog doesn't exist"
        })
    }

    try{
        await Blog.findByIdAndDelete(id);
        res.status(200).json({
            status: 'success',
            message: 'Blog deleted successfully'
        });
    }catch(err){
        res.status(500).json({
            status: 'fail',
            message: err.message
        })
    }
}

const updateBlog = async (req, res) => {

    const id = req.params.id;

    const blog = await Blog.findById(id);
    if(!blog)
    {
        res.status(404).json({
            status: 'fail',
            message: "Given Blog doesn't exist"
        })
    }

    try{
        await Blog.findByIdAndUpdate(id, req.body);
        res.status(200).json({
            status: 'success',
            message: 'Blog updated successfully'
        })
    }catch(err){
        res.status(500).json({
            status: 'fail',
            message: err.message
        })
    };

}

/*

getblog Controller


1. get the blog with given id in req.params.

Response --> 

1. Success

200 Status code
json = {
  status: 'success',
  data: {
    heading,
    body,
    creator_id,
    tags
  }
}

2. Blog Doesnot exist

404 Status Code
json = {
    status,
    message
}

*/

const getBlog = async (req, res) => {

    //Write your code here.

}

module.exports = { getAllBlog, getBlog, createBlog, deleteBlog, updateBlog };