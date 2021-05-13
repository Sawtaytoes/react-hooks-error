# React Hooks Error
This is the regular React Hooks error about having multiple versions of react and affects Lerna and Yarn Workspaces **(Yarn v1)**.

Other than the use of a different React version, `appA` and `appB` are identical.

## Install dependencies
```sh
npx lerna bootstrap
```


## Working
```sh
yarn appA
```

## Hooks Error
```sh
yarn appB
```
