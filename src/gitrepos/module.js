// Inspired by http://www.sitepoint.com/writing-angularjs-apps-using-es6/
import angular from 'angular';

import {GitReposDirective} from './GitReposDirective';

const gitReposModule = angular.module('gitReposModule', [])
  .directive('gitRepos', GitReposDirective.directiveFactory);

console.debug('gitReposModule initialized', gitReposModule);

export { gitReposModule };