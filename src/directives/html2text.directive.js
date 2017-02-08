import 'angular';
import html2textTemplate from '../templates/html2text.tpl.html';

export default directive;

directive.$inject = ['$sce'];
directive.NAME = 'html2text';

function directive($sce) {
  return {
    restrict: 'E',
    template: html2textTemplate,
    require: '?ngModel',
    link: ($scope, $element, $attrs, ngModel) => {
      ngModel.$render = function() {
        $element.html($sce.getTrustedHtml(ngModel.$viewValue || ''));
      };
    }
  };
}