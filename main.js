const TelegramBot = require("node-telegram-bot-api")
const { downloadMethod } = require("./src/instagramsaver")
const { downloadFromYoutube } = require("./src/youtubesaver")

const bot = new TelegramBot("6343352969:AAE-aE9rmBUYRTO_Oud4-pmMtETtz014Qks", {
  polling: true,
})

bot.on("message", async (msg) => {
  try {
    if (msg.text == "/start") {
      await bot.sendMessage(
        msg.chat.id,
        "Assalomu Alaykum men video downloaderman menga instagram linkini tashang yuklab beraman!"
      )
    }

    if (msg.text.includes("instagram")) {
      let link = msg.text.replace("instagram", "ddinstagram")
      const getUrl = await downloadMethod(msg.text)
      await bot.sendVideo(msg.chat.id, link, {
        caption: getUrl.caption,
      })

      setTimeout(() => {
        bot.deleteMessage(msg.chat.id, msg.message_id)
      }, 1500)
    }

    if (msg.text.includes("youtu.be")) {
      const youtubeUrl = msg.text.split("/").at(-1)
      const getYoutubeUrl = await downloadFromYoutube(youtubeUrl)
      if (getYoutubeUrl.videoUrl) {
        await bot.sendVideo(msg.chat.id, getYoutubeUrl.videoUrl, {
          caption: getYoutubeUrl.caption,
        })
      } else {
        await bot.sendMessage(msg.chat.id, "Video not found")
      }
    }
  } catch (error) {
    console.log("Xat kettiku")
  }
})
