let app=angular.module("app.todos",["xeditable"]);
app.controller("todosController",['$scope','svTodos',($scope,svTodos)=>{
    $scope.appName="node todos !!!";
    $scope.loading= true;

    $scope.formData={};
    $scope.todos=[];
   svTodos.get().then(function (response){
        $scope.todos=response.data;
        $scope.loading=false;
 });
    $scope.createTodo=()=>{
        $scope.loading= true;
        var todo={
            text:$scope.formData.text,
            isDone:false
        }
        svTodos.create(todo).then((data)=>{
            console.log(todo);
            $scope.todos=data.data;
            $scope.formData.text="";
            $scope.loading= false;
        });
    }
    $scope.updateTodo=(todo)=>{
        $scope.loading= true;
        svTodos.update(todo).then((data)=>{
            $scope.todos=data.data;
            $scope.loading= false;
        });
    }
    $scope.deleteTodo=(todo)=>{
        $scope.loading= true;
svTodos.delete(todo._id).then((data)=>{
    $scope.todos=data.data;
    $scope.loading= false;
});
    }
}]);