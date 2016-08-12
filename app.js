var instapic=angular.module("instapic", ['ui.router']);

instapic.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
        .state('default', {
            url: "/",
            templateUrl: "./templates/firstpage.html"
        })
        .state('upload', {
            url: "/upload",
            templateUrl: "./templates/upload.html"
        })
        .state('allposts', {
            url: "/allposts",
            templateUrl: "./templates/allposts.html"
        });
      });
