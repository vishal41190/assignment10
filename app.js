var app = angular.module("chatSystem",[]);

app.controller("chat",function($scope){

    $scope.test="vishal";
    $scope.commentList=["This is the first commnet","Here's the second comment","And this is one More","Here is another one"]; 

    $scope.addComment = function(){
        if($scope.chatInput== null){
            window.alert("Comment can't be empty");
        }else{
            $scope.commentList.push($scope.chatInput);
        }
    }
});


