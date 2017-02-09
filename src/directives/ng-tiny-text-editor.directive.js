import 'angular';
import html2textTemplate from '../templates/html2text.tpl.html';

export default directive;

directive.$inject = ['$sce'];
directive.NAME = 'ngTinyTextEditor';

function directive($sce) {
  return {
    restrict: 'E',
    template: html2textTemplate,
    scope: {
      ngModel: '=ngModel'
    }
  };
}