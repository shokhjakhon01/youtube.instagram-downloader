const axios = require("axios");

async function downloadFromYoutube(videoIds) {
  try {
    const options = {
      method: "GET",
      url: "https://youtube-media-downloader.p.rapidapi.com/v2/video/details",
      params: {
        videoId: videoIds,
      },
      headers: {
        "X-RapidAPI-Key": "e9c2273450mshee1255227e1b2e3p1d0c01jsncf024a10f409",
        "X-RapidAPI-Host": "youtube-media-downloader.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);
    const result = {
      videoUrl: response.data.videos.items[0].url,
      caption: response.data.title,
    };
    return result;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  downloadFromYoutube,
};
