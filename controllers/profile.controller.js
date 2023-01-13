import registerModel from "../models/register.model";
const profileController = {

    async profile(req, res){
        let records;
        try{
           records= await registerModel.findById(req.user.id);
          }
        catch(err){
           res.status(500).json({ error: err.message });
          }
          return res.json(records); 
        },
}
export default profileController;