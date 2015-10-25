import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import angular from 'angular';
import {AppDirective} from './AppDirective';
import {gitReposModule} from './gitrepos/module';
import {peopleModule} from './people/module';

const main = angular
  .module('main', [gitReposModule.name, peopleModule.name])
  .directive(AppDirective.directiveName(), AppDirective.directiveFactory);

console.debug('main has started:', main);