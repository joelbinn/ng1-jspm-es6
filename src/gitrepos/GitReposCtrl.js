class GitReposCtrl {
  constructor($http) {
    $http.get(`https://api.github.com/users/joelbinn/repos`)
      .then(response => this.repos = response.data);
  }
}

GitReposCtrl.$inject = ['$http'];
export {GitReposCtrl};