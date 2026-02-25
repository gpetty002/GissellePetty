# my_website

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## How to Build and Deploy to AWS

1. First do npm run build
2. This should create a folder called /dist
3. Then do aws s3 sync dist s3://www.pettyg.me
