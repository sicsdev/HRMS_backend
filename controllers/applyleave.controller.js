import applyleaveModel from "../models/applyleave.model";
import leavesModel from "../models/leaves.model";

const applyleaveController = {

    async apply(req, res) {

        const { userId, reason, date, type_of_day } = req.body;
        const leaves = req.body.leaves;

        let data;
        try {
            data = await applyleaveModel.create({
                userId: req.user.id,
                leaves: [...leaves],
                reason,
                date,
                type_of_day

            });
            console.log(data);
        }
        catch (err) {
            console.log(err);
        }
        res.status(201).json({
            success: true,
            data: data
        });

    },


    async getapply_leaves(req, res) {
        try {
            const records = await applyleaveModel.find({ userId: req.user.id });
            res.status(201).json(records);
        }
        catch (error) {
            console.log(error);
        }
    }
}
export default applyleaveController
