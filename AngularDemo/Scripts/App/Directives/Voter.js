


CM.Main.directive('voter', function () {

    return {
        restrict: 'EA',
        scope: { count: '=' },
        replace: true,
        templateUrl: '/scripts/app/templates/_voter.html',
        link : function (scope, element, attribute) {
            
            scope.upVote = function () {
                scope.count++;
            };
            
            scope.downVote = function () {
                scope.count--;
            };
        }
    };

});