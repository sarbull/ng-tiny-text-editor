import 'angular';

export default directive;

directive.NAME = 'contenteditable';

function directive() {
  return {
    require: 'ngModel',
    link: function ($scope, $element, $attrs, ngModel) {
      // view -> model
      $element.bind('blur', function () {
        $scope.$apply(function () {
          ngModel.$setViewValue($element.html());
        });
      });

      // model -> view
      ngModel.$render = function () {
        $element.html(ngModel.$viewValue);
      };
    }
  };
}