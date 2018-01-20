# Reference Server for GraphQL in Node

Quick reference for getting a GraphQL server up in Node.js

## Babel

While developing the `src/` folder in monitored and fed into babel-node (the
babel CLI).  This is not suitable for production though, so a `build` and
`serve` script are included as well.

## Express & GraphQL

Express is attached to the GraphQL middleware to offer both a GraphQL endpoint
and the GraphiQL test interface at `host:port/graphql`.  A very basic schema is
available to serve you data for `hello`.  Try querying:

```
{
  hello
}
```

And you should get back:

```
{
  "data": {
    "hello": "Hello world!"
  }
}
```

## Heroku

The `package.json` declares a script called `postinstall` which will be run after
the npm install to build the server in the `dist/` folder.  This will then be
ready to serve using `npm run serve` which you'll see specified in the Procfile.

This is all Heroku needs to fire up the project: all other dependencies are inferred
and built from the `package.json` file.

Check out the deployed reference app at: [reference-graphql.herokuapp.com](http://reference-graphql.herokuapp.com/graphql?query=%23%20Welcome%20to%20GraphiQL%0A%23%0A%23%20GraphiQL%20is%20an%20in-browser%20tool%20for%20writing%2C%20validating%2C%20and%0A%23%20testing%20GraphQL%20queries.%0A%23%0A%23%20Type%20queries%20into%20this%20side%20of%20the%20screen%2C%20and%20you%20will%20see%20intelligent%0A%23%20typeaheads%20aware%20of%20the%20current%20GraphQL%20type%20schema%20and%20live%20syntax%20and%0A%23%20validation%20errors%20highlighted%20within%20the%20text.%0A%23%0A%23%20GraphQL%20queries%20typically%20start%20with%20a%20%22%7B%22%20character.%20Lines%20that%20starts%0A%23%20with%20a%20%23%20are%20ignored.%0A%23%0A%23%20An%20example%20GraphQL%20query%20might%20look%20like%3A%0A%23%0A%23%20%20%20%20%20%7B%0A%23%20%20%20%20%20%20%20field(arg%3A%20%22value%22)%20%7B%0A%23%20%20%20%20%20%20%20%20%20subField%0A%23%20%20%20%20%20%20%20%7D%0A%23%20%20%20%20%20%7D%0A%23%0A%23%20Keyboard%20shortcuts%3A%0A%23%0A%23%20%20%20%20%20%20%20Run%20Query%3A%20%20Ctrl-Enter%20(or%20press%20the%20play%20button%20above)%0A%23%0A%23%20%20%20Auto%20Complete%3A%20%20Ctrl-Space%20(or%20just%20start%20typing)%0A%23%0A%0A%7B%20hello%20%7D%0A)
