# ytplaylist-dl [![Build Status](https://travis-ci.org/jufabeck2202/ytplaylist-dl.svg?branch=master)](https://travis-ci.org/jufabeck2202/ytplaylist-dl)

> download Podcasts from a RSS feed


## Install

```
$ npm install podcast-downloader
```


## Usage
```js
const podcast = require('podcast-downloader');

(async () => {
    let podcast = await podcast("<Podcast RSS url...>", "Desktop/");

    await podcast("https://collegeinfogeek.com/podcast", "Desktop/",10);
    // downloads the first 10 episodes from college info geek

})();
```


## API

### podcast(url, output)

Downloads all episodes from the RSS feed, saves them inside the output folder
Returns a `Promise` that holds an Array with all downloaded episodes and additional information.

### podcast(url, output, limit)

Downloads episodes from the RSS feed until the limit is reached, saves them inside the output folder
Returns a `Promise` that holds an Array with all downloaded episodes and additional information.

#### url

Type: `string`

Url to the podcast rss feed
- https://collegeinfogeek.com/podcast


#### output

Type: `string`

Where to save the videos.

#### limit 

Type: `integer`

limits the podcast downloads, if not defined, every episode in the feed will be downloaded

## Related

- [node-podcast-parser](https://github.com/akupila/node-podcast-parser) - Node module to parse a podcast's RSS feed .



## License

MIT © [Julian Beck](https://github.com/jufabeck2202)