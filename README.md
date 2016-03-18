# eslint-config-cusxio

> ESLint [shareable configs](http://eslint.org/docs/developer-guide/shareable-config) for cusxio

## Install

```bash
$ npm install --save-dev eslint-config-cusxio
```

## Usage

In `.eslintrc` add the following:

```json
{
    "extends": "cusxio"
}
```

To enable browser environment:

```json
{
    "extends": ["cusxio", "cusxio/browser"]
}
```

To enable mocha variables support:

```json
{
    "extends": ["cusxio", "cusxio/mocha"]
}
```

## React

- [eslint-config-cusxio-react](https://cusxio/eslint-config-cusxio-react)

## License

MIT © Jonathan Chan
