import angular from 'angular';

import {GitReposCtrl} from './GitReposCtrl';

const gitReposModule = angular.module('gitReposModule', [])
  .controller('GitReposCtrl', GitReposCtrl);

console.debug('gitReposModule initialized', gitReposModule);

export { gitReposModule };