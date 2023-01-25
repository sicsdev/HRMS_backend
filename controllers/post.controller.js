import postModel from "../models/post.model";
import leavesModel from "../models/leaves.model";
import multer from "multer";


const storage = multer.diskStorage({

    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    },

});

const handleMultipartData = multer({ storage, limit: { filesize: 1000000 * 5 } }).single('image');

const postController = {

    async add_post(req, res) {
        const current_date = new Date();

        console.log(current_date);

        handleMultipartData(req, res, async (err) => {

            const filePath = req.file ? req.file.path : '';
            const { description, title } = req.body;
            let post_data;
            try {
                post_data = await postModel.create({
                    title,
                    description,
                    post_date: current_date,
                    image: filePath
                });
                console.log(post_data);
            }
            catch (err) {
                return next(err);
            }
            res.status(201).json({
                success: true,
                data: post_data
            });
        });
    },

    async allpost(req, res) {
        const all = await postModel.find();
        res.status(201).json(all);
    },

    async deletepost(req, res) {
        let all;
        try {
            all = await postModel.findOneAndDelete({ _id: req.params.id });
        }
        catch (error) {
            console.log(error);
        }


        res.status(201).json(all);
    },




    async add_leaves(req, res) {

        const { name, leave_type } = req.body;
        let data;
        try {
            data = await leavesModel.create(
                {
                    name,
                    leave_type

                });
            console.log(data);
        }
        catch (err) {
            return next(err);
        }
        res.status(201).json({
            success: true,
            data: data
        });

    },

    async allleave(req, res) {
        const leave = await leavesModel.find();
        res.status(201).json(leave);
    },




}
export default postController;
