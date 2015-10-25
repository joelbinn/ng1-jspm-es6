class PeopleCtrl {
  constructor($http) {
    $http.get(`http://localhost:8080/people`)
      .then(response => this.people = response.data._embedded.people);
  }
}

PeopleCtrl.$inject = ['$http'];

const htmlTemplate = `
<ul>
  <li ng-repeat="person in viewModel.people">
    <p>{{person._links.self.href}}: {{person.firstName}} {{person.lastName}}</p>
  </li>
</ul>
`;


class PeopleDirective {
  constructor() {
    this.scope = {};
    this.restrict = 'E';
    this.template = htmlTemplate;
    this.controller = PeopleCtrl;
    this.controllerAs = 'viewModel';
  }

  static directiveFactory($http) {
    return new PeopleDirective($http);
  }

  static directiveName(){
    return 'people';
  }
}

PeopleDirective.directiveFactory.$inject = ['$http'];

export {PeopleDirective};