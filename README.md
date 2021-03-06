# gatsby-plugin-transform-site-config-json

Transforms site config JSON from `config/site-config.json` to Gatsby data node.

## Installing

```bash
npm install --dev vanska/gatsby-plugin-transform-site-config-json
```

## Example site configuration

```js
// config/site-config.json
{
  "languages": ["en", "fi"],
  "pages": [
    {
      "name": "home",
      "component": "src/templates/Home.js",
      "namespaces": ["home"],
      "navigation": "hidden"
    },
    {
      "name": "services",
      "component": "src/templates/Services.js",
      "namespaces": ["services"],
      "children": [
        {
          "name": "design",
          "component": "src/templates/Design.js",
          "namespaces": ["design"]
        }
      ]
    },
    {
      "name": "articles",
      "component": "src/templates/Articles.js",
      "namespaces": ["articles"],
      "markdownParent": true
    },
    {
      "name": "404",
      "component": "src/templates/404.js",
      "namespaces": ["404"],
      "navigation": "hidden",
      "metaRobots": "noindex, nofollow"
    }
  ],
  "generateFirebaseHostingRules": true
}
```

## Query site-config from gatsby

```js
const { siteConfig } = useStaticQuery(
  graphql`
    query {
      siteConfig {
        languages
      }
    }
  `,
)
```
