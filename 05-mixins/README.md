# 05 Mixins


This subdirectory contains apps already generated with create-react-app, as
described in the Mixinsblog post (link here).  The source code has been
modified to include the examples in the blog post so you can see it in action.

For each of the following examples, cd into the directory and run ```npm
install``` followeed by ```npm run```

* a-floatingbox - simple example illustrating hoc for floating box (see src/box.js and src/App.css)
* b-configs - simple example illustrating static members (examine output in Chrome developer tools)

b-configs is a broken example.  It seems you cannot use decorators with create-react-app.  As well,
doing ```npm install --save-dev babel-plugin-transform-decorators-legacy``` removes some pacakges 
from node_modules that further breaks the created app. 
