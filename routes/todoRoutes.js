const router = require("express").Router();
const Todo = require("../models/Todo");

router.get("/", (req, res) => {
    Todo.find((err, result) => {
        if(err) throw new Error(err);
        res.json(result);
        // console.log(result);
    })
    //console.log("You are in the index page");
});

router.post("/", (req, res) => {
    Todo.create(req.body, (err,result) => {
        if(err) throw new Error(err);
        res.json(result);
        // console.log(result);
    });
});

router.put("/:id", (req, res) => {
    Todo.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, result) => {
        if(err) throw Error(err);
        res.json(result);
    })
})

router.delete("/:id", (req,res) => {
    Todo.findOneAndRemove({_id: req.params.id}, (err, result) => {
        if(err) throw new Error(err);
        res.end();
        // console.log(result);
    })
})

module.exports = router;