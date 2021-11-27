import express from 'express';
import mongoose from 'mongoose';

import { AdminData, PostData,TeachersData } from '../model/postsData.js';

const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const postsData = await PostData.find();
                
        res.status(200).json(postsData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostData.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//gallery
export const createPost = async (req, res) => {
    const { category, selectedFile } = req.body;

    const newPostData = new PostData({ category, selectedFile })

    try {
        await newPostData.save();

        res.status(201).json(newPostData );
    } catch (error) {
        res.status(409).json({ message: error.message });
        console.log(error)
    }
}

// add teacher
export const createTeacher = async (req, res) => {
    const { name,designation, email, phone, selectedFile } = req.body;

    const newTeacherData = new TeachersData({ name, designation, email, phone, selectedFile })

    try {
        await newTeacherData.save();

        res.status(201).json(newTeacherData );
    } catch (error) {
        res.status(409).json({ message: error.message });
        console.log(error)
    }
}

// get teachers
export const getTeachers = async (req, res) => { 
    try {
        const teachersData = await TeachersData.find();
                
        res.status(200).json(teachersData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// post admin
export const createAdmin = async (req, res) => {
    const { name, email, } = req.body;
    const newAdminData = new AdminData({ name, email, })
    try {
        await newAdminData.save();

        res.status(201).json(newAdminData );
    } catch (error) {
        res.status(409).json({ message: error.message });
        console.log(error)
    }
}

//get admin data

export const getAdmin = async (req, res) => { 
    try {
        const adminData = await AdminData.find();
                
        res.status(200).json(adminData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
 
// export const queryAdmin = async (req, res) => {
//     try {
//         const email = req.body.email;
//         const isAdminData = await AdminData.find({email:email});
//         res.status(200).send(isAdminData.length > 0);
//         // console.log(isAdminData.length > 0);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }

// export const queryAdmin = async (req, res) => {
//     const email = req.body.email;
//     const newAdminData = new AdminData({email:email })
//     console.log(newAdminData)
//     try {
//         await newAdminData.save();
//         res.status(201).send(newAdminData > 0 );
//     } catch (error) {
//         res.status(409).json({ message: error.message });
//         console.log(error)
//     }
// }
export const queryAdmin = async (req, res) => {
    const email = req.body.email;
   const newData = await AdminData.find({ email: email })
            res.send(newData.length > 0);
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostData.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostData.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostData.findById(id);

    const updatedPost = await PostData.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);
}


export default router;