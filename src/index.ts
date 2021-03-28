let {createBotServer, EventHandler, Msg} = require('pbbot')

let port = 8081

console.log("开始启动")

EventHandler.handleConnect = async (bot) => {
  console.log(`机器人已连接: ${bot.botId.toString()}`)
}

EventHandler.handleDisconnect = async (bot) => {
  console.log(`机器人已断开: ${bot.botId.toString()}`)
}


let showMap = new Map<String, Number>()
showMap.set("图", 40000)
showMap.set("幻影", 40001)
showMap.set("抖动", 40002)
showMap.set("生日", 40003)
showMap.set("爱你", 40004)
showMap.set("征友", 40005)


EventHandler.handleGroupMessage = async (bot, event) => {
  let rawMsg = event.rawMessage
  let userId = event.userId
  let groupId = event.groupId
  console.log(`收到群聊消息，群号：${groupId.toString()}，发送者：${userId.toString()},内容：${rawMsg}`)

  // 不以.开头直接结束
  if (!rawMsg.startsWith(".")) {
    return
  }
  // 去除开头的.
  rawMsg = rawMsg.substring(".".length)

  if (rawMsg == "闪图" || rawMsg == "秀图") {
    await bot.sendGroupMessage(groupId, "闪图/秀图需要图片")
    return
  }

  if (rawMsg.startsWith("闪图")) {
    event.message
      .filter(m => m.type === "image")
      .forEach(m =>
        bot.sendGroupMessage(groupId, Msg.builder().flash(m.data["url"]))
      )
  }


  if (rawMsg.startsWith("秀")) {
    // rawMsg = rawMsg.substring("秀".length) // 不用字符串处理更方便，直接用消息数组
    showMap.forEach(((effectId, name) => {
      if (rawMsg.startsWith(name)){
        event.message
          .filter(m => m.type === "image")
          .forEach(m =>
            bot.sendGroupMessage(groupId, Msg.builder().show(m.data["url"],effectId))
          )
      }
    }))
  }
}

createBotServer(port)

console.log(`启动成功，端口：${port}`)
