import angular from 'angular';

import {HelloCtrl} from './HelloCtrl';

const helloModule = angular.module('helloModule', [])
  .controller('HelloCtrl', HelloCtrl);

console.debug('helloModule initialized', helloModule);

export { helloModule };