# PersonalBlog

A [GatsbyJS](https://www.gatsbyjs.org/) personal blog starter. <br /><br />

[![GitHub tag](https://img.shields.io/github/tag/greglobinski/gatsby-starter-personal-blog.svg)](https://github.com/greglobinski/gatsby-starter-personal-blog)
[![GitHub stars](https://img.shields.io/github/stars/greglobinski/gatsby-starter-personal-blog.svg)](https://github.com/greglobinski/gatsby-starter-personal-blog/stargazers)
[![GitHub license](https://img.shields.io/github/license/greglobinski/gatsby-starter-personal-blog.svg)](https://github.com/greglobinski/gatsby-starter-personal-blog/blob/master/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![GitHub contributors](https://img.shields.io/github/contributors/greglobinski/gatsby-starter-personal-blog.svg)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/greglobinski/gatsby-starter-personal-blog.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fgreglobinski%2Fgatsby-starter-personal-blog)

  <br />

![](static/screens/gatsby-starter-personal-blog.gif) <br />

  <br />

See the starter in action » [demo website](https://gatsby-starter-personal-blog.greglobinski.com/) <br />For more information visit » [dev.greglobinski.com/gatsby-starter-personal-blog](https://dev.greglobinski.com/gatsby-starter-personal-blog/)

## Description

A ready to use, easy to customize [GatsbyJS](https://github.com/gatsbyjs/gatsby) personal blog starter with 'like app' layout transitions.

## Features:

* Customizable
* Easy editable content in Markdown files (posts, pages and parts)
* Easily restyled through theme object
* Styling with JSS
* Comments (Facebook)
* Post categories
* Post list filtering
* Full text searching (Algolia)
* Contact form (Netlify form handling)
* Material UI (@next)
* RSS feed
* Full screen mode
* User adjustable articles’ body copy font size
* Social sharing (Twitter, Facebook, Google, LinkedIn)
* PWA (manifes.json, offline support, favicons)
* Google Analytics
* Favicons generator (node script)
* Components leazy loading with AsyncComponent (social sharing, info box)
* ESLint (google config)
* Prettier code styling
* Custom webpack CommonsChunkPlugin settings
* Webpack BundleAnalyzerPlugin

## Prerequisites

If you do not have Gatsby Cli installed yet, do it first.

```text
npm install --global gatsby-cli
```

More information on [GatsbyJS.org](https://www.gatsbyjs.org/tutorial/part-one)

## Getting started

Install the starter using Gatsby Cli `gatsby new` command.

```text
gatsby new [NEW_SITE_DIRECTORY_FOR_YOUR_BLOG] https://github.com/greglobinski/gatsby-starter-personal-blog.git
```

Go into the newly created directory and run

```text
gatsby develop
```

to hot-serve your website on http://localhost:8000 or

```text
gatsby build
```

to create static site ready to host (/public).

##### External services

The starter uses external services for some functions: comments, searching, analytics. To use them you have to secure some access data. All services are free to use or have generous free tiers big enough for a personal blog.

Create an `.env` file like below in the root folder. Change `...` placeholders with real data.

```text
GOOGLE_ANALYTICS_ID=...
ALGOLIA_APP_ID=...
ALGOLIA_SEARCH_ONLY_API_KEY=...
ALGOLIA_ADMIN_API_KEY=...
ALGOLIA_INDEX_NAME=...
FB_APP_ID=...
```

##### Packages in beta stage

The starter uses two third party packages still in beta stage: [gatsby-plugin-algolia](https://github.com/algolia/gatsby-plugin-algolia) and [material-ui-next](https://material-ui-next.com/)

### Instructions & tutorials

* [How to install, setup and add new content to the personalBlog starter](https://dev.greglobinski.com/install-personal-blog-starter/)
* [How to customize the personalBlog starter's appearance](https://dev.greglobinski.com/customize-personal-blog-starter/)
* [Setup Algolia account for your GatsbyJS blog](https://dev.greglobinski.com/setup-algolia-account/)
* [more](https://dev.greglobinski.com/install-personal-blog-starter/)

## Authors

* Greg Lobinski [@greglobinski](https://github.com/greglobinski)

See also the list of [contributors](https://github.com/greglobinski/gatsby-starter-personal-blog/graphs/contributors) who participated in this project.

## Contributing

* Fork the repo
* Create your feature branch (git checkout -b feature/fooBar)
* Commit your changes (git commit -am 'Add some fooBar')
* Push to the branch (git push origin feature/fooBar)
* Create a new Pull Request

## Licence

MIT License

Copyright (c) 2017 gatsbyjs <br />Copyright (c) 2018 greg lobinski

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
