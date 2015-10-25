import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import angular from 'angular';
import {AppDirective} from './AppDirective';
import {gitReposModule} from './gitrepos/module';

const main = angular
  .module('main', [gitReposModule.name])
  .directive('app', AppDirective.directiveFactory);

console.debug('main has started:', main);