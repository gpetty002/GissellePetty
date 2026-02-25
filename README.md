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

1. Build the production bundle:

   ```bash
   npm run build
   ```

2. This creates a `/dist` folder with the compiled code

3. Deploy to AWS S3:
   ```bash
   aws s3 sync dist s3://www.pettyg.me
   ```
