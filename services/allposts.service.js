angular.module("instapic").factory("AllPostsRepository", function($http) {

    var repo = {};
    repo.getAllPosts = function() {
        return $http.get('http://0.0.0.0:3000');
    };

    repo.addNewPost=function(theNewPost){
      $http.post('http://0.0.0.0:3000/add', theNewPost).then(function(result) {
          console.log('New post', theNewPost);

      }, function(err) {
          //error
          console.error(err);
      });
    };

    return repo;

});
