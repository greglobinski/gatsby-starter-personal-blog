[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# PersonalBlog starter for Gatsby

[DEMO website](https://gatsby-starter-personal-blog.greglobinski.com/)

More details soon. For now a couple of annotations.

The starter is ready to play with. You should to know at least two things.

### Packages in beta

It uses two packages in beta stage: [gatsby-plugin-algolia](https://github.com/algolia/gatsby-plugin-algolia) and [material-ui-next](https://material-ui-next.com/)

### External services

The starter uses external services for some functions: contact form, comments, searching, analytics. To use them you have to secure some access data. No worries, all services are free or have generous free tiers big enough for a personal blog.

The starter needs an `.env` file like this in the root folder

```
GOOGLE_ANALYTICS_ID=...
ALGOLIA_APP_ID=...
ALGOLIA_SEARCH_ONLY_API_KEY=...
ALGOLIA_ADMIN_API_KEY=...
ALGOLIA_INDEX_NAME=...
FB_APP_ID=...
```

The contact form does not need any settings it should work out of the box if you deploy the website to [Netlify](https://www.netlify.com/)

### An educational project

This is an educational project. I'm going to write a series of articles describing what, how and why I did. I'm aiming at helping beginners to understand how the code works. If you are interested visit [Greg for Gatsby](https://forgatsby.greglobinski.com/gatsby-starter-personal-blog/). To be in touch follow me at [@greglobinski](https://twitter.com/greglobinski)

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

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
