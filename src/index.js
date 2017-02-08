import 'angular';
import 'angular-sanitize';

import html2textDirective from './directives/html2text.directive';

const MODULE_NAME = 'html2text';

angular
  .module(MODULE_NAME, ['ngSanitize'])
  .directive(html2textDirective.NAME, html2textDirective);

export default MODULE_NAME;