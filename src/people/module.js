import angular from 'angular';

import {PeopleDirective} from './PeopleDirective.js';

const peopleModule = angular.module('peopleModule', [])
  .directive(PeopleDirective.directiveName(), PeopleDirective.directiveFactory);

console.debug('peopleModule initialized', peopleModule);

export { peopleModule };