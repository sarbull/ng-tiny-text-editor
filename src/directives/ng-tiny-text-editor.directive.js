import 'angular';
import ngTinyTextEditorTemplate from '../templates/ng-tiny-text-editor.tpl.html';

export default directive;

directive.$inject = ['$sce'];
directive.NAME = 'ngTinyTextEditor';

function directive($sce) {
  return {
    restrict: 'E',
    template: ngTinyTextEditorTemplate,
    scope: {
      ngModel: '=ngModel'
    }
  };
}