angular.module('instapic')
    .controller('AllPostController', ['$scope','$http','AllPostsRepository', function($scope, $http, AllPostsRepository) {

        AllPostsRepository.getAllPosts().then(function(result) {

            //success

            console.log('All Posts', result.data);
            $scope.allPosts = result.data;
        }, function(err) {
            //error
            console.error(err);
        });

    }]);
