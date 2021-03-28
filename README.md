# FlashOrShow使用说明
基于js-pbbot的闪秀图

##创建nodejs项目

安装`npm install pbbot`

代码
```javascript
let {createBotServer, EventHandler, Msg} = require('pbbot')

let port = 8081

console.log("开始启动")

EventHandler.handleConnect = async (bot) => {
  console.log(`机器人已连接: ${bot.botId.toString()}`)
}

EventHandler.handleDisconnect = async (bot) => {
  console.log(`机器人已断开: ${bot.botId.toString()}`)
}

EventHandler.handleGroupMessage = async (bot,event) => {
  let rawMsg = event.rawMessage
  let userId = event.userId
  let groupId = event.groupId
  console.log(`收到群聊消息，群号：${groupId.toString()}，发送者：${userId.toString()},内容：${rawMsg}`)

  if(rawMsg.startsWith(".")){

    if(rawMsg == ".闪图"){
      await bot.sendGroupMessage(groupId,"闪图需要一张图片")
    }

    if(rawMsg.startsWith(".闪图")){
      var matched = rawMsg.match(/<image/g) 
      if(matched.length == 1){
        var showUrl = rawMsg.match("http://.*\"/>")[0].replace("\"/>","")
        let msg = Msg.builder().flash(showUrl)
        await bot.sendGroupMessage(groupId,msg)
      } else {
        await bot.sendGroupMessage(groupId,"闪图图片有且仅有1张时可用")
      }
    }

    if(rawMsg == ".秀图" || rawMsg == ".秀幻影" || rawMsg == ".秀抖动" || rawMsg == ".秀生日" || rawMsg == ".秀爱你" || rawMsg == ".秀征友"){
      await bot.sendGroupMessage(groupId,"秀图需要一张图片")
    }

    if(rawMsg.startsWith(".秀图")){
      var matched = rawMsg.match(/<image/g) 
      if(matched.length == 1){
        var showUrl = rawMsg.match("http://.*\"/>")[0].replace("\"/>","")
        let msg = Msg.builder().show(showUrl,40000)
        await bot.sendGroupMessage(groupId,msg)
      } else {
        await bot.sendGroupMessage(groupId,"秀图图片有且仅有1张时可用")
      }
    }

    if(rawMsg.startsWith(".秀幻影")){
      var matched = rawMsg.match(/<image/g) 
      if(matched.length == 1){
        var showUrl = rawMsg.match("http://.*\"/>")[0].replace("\"/>","")
        let msg = Msg.builder().show(showUrl,40001)
        await bot.sendGroupMessage(groupId,msg)
      } else {
        await bot.sendGroupMessage(groupId,"秀图图片有且仅有1张时可用")
      }
    }

    if(rawMsg.startsWith(".秀抖动")){
      var matched = rawMsg.match(/<image/g) 
      if(matched.length == 1){
        var showUrl = rawMsg.match("http://.*\"/>")[0].replace("\"/>","")
        let msg = Msg.builder().show(showUrl,40002)
        await bot.sendGroupMessage(groupId,msg)
      } else {
        await bot.sendGroupMessage(groupId,"秀图图片有且仅有1张时可用")
      }
    }

    if(rawMsg.startsWith(".秀生日")){
      var matched = rawMsg.match(/<image/g) 
      if(matched.length == 1){
        var showUrl = rawMsg.match("http://.*\"/>")[0].replace("\"/>","")
        let msg = Msg.builder().show(showUrl,40003)
        await bot.sendGroupMessage(groupId,msg)
      } else {
        await bot.sendGroupMessage(groupId,"秀图图片有且仅有1张时可用")
      }
    }

    if(rawMsg.startsWith(".秀爱你")){
      var matched = rawMsg.match(/<image/g) 
      if(matched.length == 1){
        var showUrl = rawMsg.match("http://.*\"/>")[0].replace("\"/>","")
        let msg = Msg.builder().show(showUrl,40004)
        await bot.sendGroupMessage(groupId,msg)
      } else {
        await bot.sendGroupMessage(groupId,"秀图图片有且仅有1张时可用")
      }
    }

    if(rawMsg.startsWith(".秀征友")){
      var matched = rawMsg.match(/<image/g) 
      if(matched.length == 1){
        var showUrl = rawMsg.match("http://.*\"/>")[0].replace("\"/>","")
        let msg = Msg.builder().show(showUrl,40005)
        await bot.sendGroupMessage(groupId,msg)
      } else {
        await bot.sendGroupMessage(groupId,"秀图图片有且仅有1张时可用")
      }
    }

  }

}

createBotServer(port)

console.log(`启动成功，端口：${port}`)
```

运行[GMC](https://github.com/protobufbot/Go-Mirai-Client/releases)，登陆机器人QQ
