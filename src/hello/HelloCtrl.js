class HelloCtrl {
  constructor($http) {
    $http.get(`https://api.github.com/users/joelbinn/repos`)
      .then(response => this.repos = response.data);
  }
}

HelloCtrl.$inject = ['$http'];
export {HelloCtrl};