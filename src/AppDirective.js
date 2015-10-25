const htmlTemplate =  `
<h1>NG1+JSPM+ES6</h1>
<h2>Mina github-repos</h2>
<git-repos></git-repos>
`;

class AppDirective {
  constructor() {
    this.restrict = 'E';
    this.template = htmlTemplate;
  }

  static directiveFactory($http) {
    return new AppDirective($http);
  }
}

export { AppDirective };
