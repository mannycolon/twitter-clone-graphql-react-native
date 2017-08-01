# Episode 1

cross-env: Allows node environment variable in windows.
nodemon: Restarts server on any changes saved for the server codebase.

### Es6/Es7 in node: (devDependencies)

babel-cli: runs babel.
babel-preset-env:
babel-plugin-transform-object-rest-spread: allows spread operator.

`.babelrc`

```
{
  "presets": [
    [
      "env",
      {
        "targets": {
          "node": "6.10"
        }
      }
    ]
  ],
  "plugins": [
    [
      "transform-object-rest-spread",
      {
        "useBuiltIns": true
      }
    ]
  ]
}
```

### Other packages

faker: fakes usernames, passwords and names.