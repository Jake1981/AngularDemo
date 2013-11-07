
window.CM = window.CM || {};

CM.Main = angular.module('myApp', []);

CM.Main.config(function ($routeProvider, $locationProvider) {

        // Create a new question
        $routeProvider.when('/question/new', {
            templateUrl: '/scripts/app/templates/_newquestion.html',
            controller: 'QuestionController'
        });

        // Answer a question
        $routeProvider.when('/question/:questionId', {
            templateUrl: '/scripts/app/templates/_answers.html',
            controller : 'AnswerController'
        });

        // Catch all route
        $routeProvider.when('/', {
            templateUrl: '/scripts/app/templates/_questions.html',
            controller : 'HomeController'
        });

        $locationProvider.html5Mode(true);
});

