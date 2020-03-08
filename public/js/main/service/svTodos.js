let app2=angular.module("app.todos")

app2.factory("svTodos",["$http",($http)=>{
    return {
        get:()=>{
            return $http.get("/api/todos");
        },
        create:(todo)=>{
            return $http.post("/api/todo",todo);
        },
        update:(todo)=>{
            return $http.put("/api/todo/",todo);
        },
        delete:(id)=>{
            return $http.delete("/api/todo/"+id);
        }
    }
}]);
