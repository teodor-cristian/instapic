angular.module('instapic')
.controller('UploadPostController', ['$scope','$http','AllPostsRepository', function($scope,$http,AllPostsRepository) {
  $scope.pictures = ["assets/images/img_01.jpg", "assets/images/img_02.jpg", "assets/images/img_03.jpg","assets/images/img_04.jpg"];
  $scope.ceva="asa trebuie";

  $scope.new_post={};
  $scope.new_post.USERNAME="";
  $scope.new_post.DESCRIPTION="";
  $scope.chosen_picture=function(ind)
  {
    $scope.picture_no=ind;
    $scope.new_post.PICTURE_SRC=ind;
  }

  $scope.postThis=function(theNewPost)
  {
    console.log(theNewPost);
    AllPostsRepository.addNewPost(theNewPost);
    console.log('It works!');
  }




}]);
