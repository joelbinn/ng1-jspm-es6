import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import angular from 'angular';
import {AppDirective} from './AppDirective';
import {gitReposModule} from './gitrepos/module';

const main = angular
  .module('main', [gitReposModule.name])
  .directive(AppDirective.directiveName(), AppDirective.directiveFactory);

console.debug('main has started:', main);