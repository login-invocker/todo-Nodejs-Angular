var todos = require(`../models/todoModel`);
function getTodos(res){
    todos.find((err,todos)=>{
        if(err){
            res.status(500).json(err);
        }else{
            res.json(todos);
        }
    });

}

module.exports=function(app){
    app.get("/api/todos/",(req,res)=>{
        getTodos(res);
    });
    app.get("api/todo/:id",(req,res)=>{todos.findById({_id:req.params.id},(err,todo)=>{
        if(err){
            throw err;
        }else{
            res.json(todo);
        }
    });
});
    app.post("/api/todo",(req,res)=>{
        var todo = {
            text:req.body.text,
            isDone:req.body.isDone
        };

        todos.create(todo,(err,todo)=>{
            if(err){
                throw err;
            }else{
                getTodos(res);
            }
        });
    });
//update
    app.put("/api/todo",(req,res)=>{
        if(!req.body._id){
            return res.status(500).send("id is required");
        }
        else{
            todos.update({
                _id:req.body._id,

            },{
                text:req.body.text,
                isDone:req.body.isDone
            },(err,todo)=>{
                if(err){
                    return res.status(500).json(err);
                }else{
                    getTodos(res);
                }
            })
        }
    });
    //delete to do 
    app.delete("/api/todo/:id",(req,res)=>{
    todos.remove({
        _id:req.params.id
    },(err,todo)=>{
        if(err){
            return res.status(500).json(err);
        }else{
            getTodos(res);
        }
    })
    });
}