
const path = require("path");
const fs = require("fs");
const request = require('request');
const parsePodcast = require('node-podcast-parser');

/**
 * 
 * @param {String} url Url to the RSS feed you want to download
 * @param {String} outputPath the location where the podcast should be downloaded to
 * @param {Object} limit limits the amount of episodes to download, if not defined it will download every episode 
 */
module.exports = async (url, outputPath, limit) => {

  
    return new Promise(async (resolve, reject) => {

        try {
            let rss = await getRSS(url);
            let downloadEpisodes = [];
            let episodes = limit == 0 ? rss.episodes : rss.episodes.slice(0, limit);
            for (const podcast of episodes) {
                await downloadPodcast(path.join(outputPath, podcast.title.replace(/[/\\?%*:|"<>&]/g, "-") + ".mp3"), podcast.enclosure.url);
                downloadEpisodes.push(podcast);
            }
            resolve(downloadEpisodes);
        } catch (error) {
            reject(error);
        }

    });
}




/**
 * 
 * @param {String} url to the rss feed  
 */
function getRSS(url) {
    return new Promise((resolve, reject) => {
        request(url, (err, res, data) => {
            if (err)
                reject('Network error', err);

            parsePodcast(data, (err, data) => {
                if (err)
                    reject('Parsing error', err);

                resolve(data);
            });
        });
    });
}

/**
 * 
 * @param {String} path and name where the download should be stored
 * @param {String} url to the podcast
 */
function downloadPodcast(path,url) {
    return new Promise((resolve, reject) => {
        request(url).pipe(fs.createWriteStream(path)).on('finish', function () {
            resolve(path)
        }).on('error', function (error) {
            reject(error);
        });
    });
}

