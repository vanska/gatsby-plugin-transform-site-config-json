exports.onPreBootstrap = async ({
  actions: { createNode },
  createNodeId,
  createContentDigest,
}) => {
  const path = require('path')
  const fs = require('fs')

  const siteConfigJsonPath = path.resolve('./config/site-config.json')
  const siteConfig = JSON.parse(fs.readFileSync(siteConfigJsonPath))

  let newNode = {
    id: createNodeId(`siteConfigId`),
    children: [],
    ...siteConfig,
    siteConfigString: JSON.stringify(siteConfig),
    internal: {
      contentDigest: createContentDigest(siteConfig),
      type: 'SiteConfig',
    },
  }
  createNode(newNode)
  return
}
