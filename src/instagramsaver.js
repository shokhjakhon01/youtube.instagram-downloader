const axios = require("axios");

async function downloadMethod(url) {
  try {
    const options = {
      method: "GET",
      url: "https://instagram-media-downloader.p.rapidapi.com/rapid/post.php",
      params: {
        url: url,
      },
      headers: {
        "X-RapidAPI-Key": "e9c2273450mshee1255227e1b2e3p1d0c01jsncf024a10f409",
        "X-RapidAPI-Host": "instagram-media-downloader.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);

    const result = {
      videoUrl: response.data.video,
      caption: response.data.caption,
    };
    return result;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  downloadMethod,
};
