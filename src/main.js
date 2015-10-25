import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import angular from 'angular';
import {helloModule} from './hello/module';

const main = angular.module('main', [helloModule.name]);

console.debug('main has started:',main);