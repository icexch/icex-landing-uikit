
# Icex-landing-uikit

Components kit for building ICEX landing pages

### Install

```bash
npm install icex-landing-uikit --save
```

### How to use
#### For ssr (nuxt.js)
Create plugin `plugins/uiKit.js` file.

```javascript
import Vue from 'vue';
import uiKit from 'icex-landing-uikit';

Vue.use(uiKit);
```
Init plugin in  `nuxt.config.js` file and add other plugins
```javascript
head: {
  // uiSocials.vue use Socicon font
  link: [
  { 
    rel: 'stylesheet', 
    href: 'https://s3.amazonaws.com/icomoon.io/114779/Socicon/style.css?u8vidh',
  },
  ],
},
css: [
  //ui kit based on bootstrap 4
  { 
    src: 'node_modules/bootstrap/scss/bootstrap.scss',
    lang: 'sass',
  },
],
build: {
  vendor: [
    'v-click-outside',
  ],
  // fix external error when build page
  extend (config, { isServer }) {
    if (isServer) {
      config.externals = [
        nodeExternals({
          whitelist: [/\.(?!(?:js|json)$).{1,5}$/i, /^icex-landing-uikit/]
        })
      ]
    }
  },
},
plugins: [
  ...
  { src: '~/plugins/uiKit.js', ssr: true },
  // uiHeader.vue use v-click-outside plugin
  { src: '~/plugins/clickOutside.js', ssr: false },
  ...
],
```

#### For vue.js project
open  `main.js` file.

```javascript
import Vue from 'vue';
import uiKit from 'icex-landing-uikit';

Vue.use(uiKit);
//Add link to Socicon font
//install v-click-outside plugin
```

### Colors
Include code below to page styles
```scss
  $font-family-base: 'Montserrat' // or any custom font
  // reinit default bootstrap variables
  $primary: #021032 
  $secondary: #0b50cd
  $info: #e7e9f1

  @import "~bootstrap/scss/bootstrap.scss";
  // add uiKit styles
  @import "~icex-landing-uikit/index.sass";
```