const paperDto=require("../model/paperDto");

const savePaper=(req,resp)=>{

        const paper= new paperDto({
            name :req.body.name,
            type :req.body.type,
            noOfQue :req.body.noOfQue,
            noOfAns :req.body.noOfAns,
            quection :req.body.quection,
        }) ;
         console.log(paper.ge);
         paper.save().then(res=>{
            resp.status(200).json({isSaved:true});
        }).catch(err=>{
            resp.status(500).json(err);
        })
};

const check=(req,resp)=>{
    resp.status(200).json({isSaved:true});
};

module.exports = {
    savePaper,
    check
};
