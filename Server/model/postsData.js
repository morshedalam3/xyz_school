import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    category: String,
    selectedFile: String,
})

export const PostData = mongoose.model('PostData', postSchema);

const postTeacher = mongoose.Schema({
    name: String,
    designation: String,
    email: String,
    phone: Number,
    selectedFile: String,
})

export const TeachersData = mongoose.model('TeachersData', postTeacher);

const postAdmin = mongoose.Schema({
    name: String,
    email: String
})

export const AdminData = mongoose.model('AdminData', postAdmin);

// export default PostData;