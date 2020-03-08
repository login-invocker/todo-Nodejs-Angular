var toDos= require(`../models/todoModel`);

module.exports=function(app){
    app.get("/api/setuptodo",(req,res)=>{

        var seedTodos=[
            {
                text:"hocj nod js",
                isDone:false
            },
            {
                text:"hoc ta",
                isDone:false
            },
            {
                text:"viet app hgoan chinh",
                isDone:false
            }
        ];
        toDos.create(seedTodos,(err,resuilt)=>{
            res.send(resuilt);
        })
    })
}