import 'angular';
import 'angular-sanitize';

import ngTinyTextEditorDirective from './directives/ng-tiny-text-editor.directive';
import contenteditableDirective from './directives/contenteditable.directive';

const MODULE_NAME = 'ngTinyTextEditor';

angular
  .module(MODULE_NAME, ['ngSanitize'])
  .directive(ngTinyTextEditorDirective.NAME, ngTinyTextEditorDirective)
  .directive(contenteditableDirective.NAME, contenteditableDirective);

export default MODULE_NAME;