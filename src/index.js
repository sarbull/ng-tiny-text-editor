import 'angular';
import html2textDirective from 'directives/html2text.directive';

angular
  .module('html2text', [])
  .directive(html2textDirective.NAME, html2textDirective);