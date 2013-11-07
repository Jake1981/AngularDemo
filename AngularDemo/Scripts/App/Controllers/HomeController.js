
CM.Main.controller('HomeController', ['MockedQuestionApiSvc', '$scope', function (QuestionApiSvc, $scope) {

    $scope.Questions = QuestionApiSvc.get();

}]);
