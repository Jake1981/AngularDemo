
CM.Main.controller('AnswerController', ['MockedQuestionApiSvc', '$scope', '$routeParams', function (QuestionApiSvc, $scope, $routeParams) {

    $scope.question = QuestionApiSvc.get($routeParams.questionId);
    
}]);

