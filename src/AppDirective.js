const htmlTemplate = `
<div class="container">
  <h1>NG1+JSPM+ES6</h1>
  <h2>Mina github-repos</h2>
  <git-repos></git-repos>
</div>
`;

class AppDirective {
  constructor() {
    this.restrict = 'E';
    this.template = htmlTemplate;
  }

  static directiveFactory() {
    return new AppDirective();
  }

  static directiveName() {
    return 'app';
  }
}

export { AppDirective };
