var mongoose = require(`mongoose`);

var schema = mongoose.Schema;

var todoSchema= new schema({
    text:String,
    isDone:Boolean
});

var toDos = mongoose.model("Todos",todoSchema);

module.exports= toDos;