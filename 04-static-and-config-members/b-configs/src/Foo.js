export default class Foo {
  constructor(config) {
    Object.assign(this, config);
  }

  get foo() {
    return this._foo;
  }

  set foo(foo = []) {
    if (foo && !Array.isArray(foo)) {
      foo = [foo];
    }

    this._foo = foo;
    // react to foo change
  }
}