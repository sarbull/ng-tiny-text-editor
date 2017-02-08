import 'angular';
import html2textTemplate from '../templates/html2text.tpl.html';

export default directive;

directive.NAME = 'html2text';

function directive() {
  return {
    restrict: 'E',
    templateUrl: html2textTemplate,
    link: ($scope, $element, $attrs) => {
    }
  };
}