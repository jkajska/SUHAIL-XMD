const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://chat.whatsapp.com/IySa8qbfROXErcUckT9YT2";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/IySa8qbfROXErcUckT9YT2";
global.website=process.env.GURL || "https://chat.whatsapp.com/IySa8qbfROXErcUckT9YT2" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "C" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "447551610702";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '447551610702') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_34_11_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDU3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwLFxuICAgICAgICA5MyxcbiAgICAgICAgNDksXG4gICAgICAgIDI3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgODIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyMixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDkyLFxuICAgICAgICAzNixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNixcbiAgICAgICAgMjMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDAsXG4gICAgICAgIDIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTMwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTYwLFxuICAgICAgICA5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDM3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI0LFxuICAgICAgICA5OCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg3LFxuICAgICAgICA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDMxLFxuICAgICAgICAzMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg2LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDExNixcbiAgICAgICAgNyxcbiAgICAgICAgMTgxLFxuICAgICAgICA2MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjYsXG4gICAgICAgIDY2LFxuICAgICAgICA4OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDk0LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjcsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDc4LFxuICAgICAgICA0OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDAsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE2LFxuICAgICAgICA1MixcbiAgICAgICAgMjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTExLFxuICAgICAgICA1NixcbiAgICAgICAgMjMzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDk0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDM4LFxuICAgICAgICAxLFxuICAgICAgICA4NixcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJBY0hWMXJqN2xFL1NwbllIbEhmb2lpOEFZeDhIODhXY2ltNmxreXhaUnJZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQxNzkwNTg3NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTYzNEQzRUZBMkFFNkNDMzM5MkRGOTQ4QUEzM0I2MjFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyOTY2NDM4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDE3OTA1ODc2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDOTNFNUE3NzAwMjZDNDMzODdCOUM4MUE1MkY1NkNBQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzI5NjY0MzlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibm9TdE5ybXJSTnlWa0pFUVdqZlZLZ1wiLFxuICBcInBob25lSWRcIjogXCI2NjZhMjhlYi03OTVkLTRlM2YtOWVkMC1hOTUzMzc4MzlhNWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ3LFxuICAgICAgMjIzLFxuICAgICAgMjM1LFxuICAgICAgMjM1LFxuICAgICAgNjUsXG4gICAgICAxMDMsXG4gICAgICAxMjYsXG4gICAgICAzMyxcbiAgICAgIDExNixcbiAgICAgIDIyMixcbiAgICAgIDEwOSxcbiAgICAgIDQwLFxuICAgICAgODksXG4gICAgICA5MixcbiAgICAgIDEzNSxcbiAgICAgIDEyOSxcbiAgICAgIDI0NyxcbiAgICAgIDQzLFxuICAgICAgNzIsXG4gICAgICA1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTEsXG4gICAgICAyMTEsXG4gICAgICAyMjYsXG4gICAgICAxNDksXG4gICAgICA3NyxcbiAgICAgIDIxMCxcbiAgICAgIDI0LFxuICAgICAgMjUwLFxuICAgICAgOTIsXG4gICAgICAxODYsXG4gICAgICAyMyxcbiAgICAgIDI1NSxcbiAgICAgIDE0NCxcbiAgICAgIDg5LFxuICAgICAgMTQxLFxuICAgICAgMjA3LFxuICAgICAgOTgsXG4gICAgICA4NCxcbiAgICAgIDg2LFxuICAgICAgMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWjlISEVYSjVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQxNzkwNTg3NjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiY1wiLFxuICAgIFwibGlkXCI6IFwiMTc5MzIwNDIxMjU1MjI6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNbk5oL1lDRUozd3E3b0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk9EVlJTWFFNTyt3cmVpdVdhU0Y1dmdnMnFpQWZ5d1ZkajZjUEQyOXlKa2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQjBrTVMzSDNBdVlnSFVGd0hxSWRrWXRNQzFMRHY2MFhEOTN6R1FPMnpPY3d4WkJuM3hSNFRvb0pqS3NoNjVVQUJNcmVnTVhTblQ0bG43eUZ1WDhGQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMGY5UnJvV2toVG5yYWNTanVCTDNmNkVPd3BCVHc1aTR2TTRYdlRBdUduQ0txdU1FMlhJV3pIbUsraWdJVHQwRkkvajFScEttS21CbER6SDRwSnJPalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDE3OTA1ODc2OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI5NjY0MzUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBM2lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUEzaS5qc29uIjogIntcImtleURhdGFcIjpcIkR0UDJuRC9lVTJEYWdpRTNkSXJITXZJQmJZYlRrb1RvNCs2ZVl4dU9LbVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Nzg0NDU5NDY1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzI5NjY0MzczODlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "COMMANDER",
  packname: process.env.PACK_NAME || "LOKI",
  botname : process.env.BOT_NAME  || "C",
  ownername:process.env.OWNER_NAME|| "COMMANDER",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
