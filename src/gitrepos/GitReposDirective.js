class GitReposCtrl {
  constructor($http) {
    $http.get(`https://api.github.com/users/joelbinn/repos`)
      .then(response => this.repos = response.data);
  }
}

GitReposCtrl.$inject = ['$http'];

const htmlTemplate =  `
<ul>
  <li ng-repeat="repo in viewModel.repos">
    <h3>{{repo.name}}</h3>
    <p>{{repo.description}}</p>
  </li>
</ul>
`;

class GitReposDirective {
  constructor() {
    this.scope = {};
    this.restrict = 'E';
    this.template = htmlTemplate;
    this.controller = GitReposCtrl;
    this.controllerAs = 'viewModel';
  }

  static directiveFactory($http) {
    return new GitReposDirective($http);
  }
}

GitReposDirective.directiveFactory.$inject = ['$http'];

export { GitReposDirective };
