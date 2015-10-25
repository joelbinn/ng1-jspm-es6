import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import angular from 'angular';
import {gitReposModule} from './gitrepos/module';

const main = angular.module('main', [gitReposModule.name]);

console.debug('main has started:',main);