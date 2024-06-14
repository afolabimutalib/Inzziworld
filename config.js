const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348061693101";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348061693101,234xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_51_06_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDgwLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDY4LFxuICAgICAgICAzNSxcbiAgICAgICAgOTksXG4gICAgICAgIDEzNixcbiAgICAgICAgOTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTYxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAzNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzksXG4gICAgICAgIDUxLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjIxLFxuICAgICAgICAyNCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE2LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDM3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MixcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAzMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1LFxuICAgICAgICAxMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgNDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjE2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MCxcbiAgICAgICAgMzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjI3LFxuICAgICAgICA3NixcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjksXG4gICAgICAgIDk0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjksXG4gICAgICAgIDEyLFxuICAgICAgICAwLFxuICAgICAgICA0MixcbiAgICAgICAgNjEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzgsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjEzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjZWMFI1ajBqenBKZWVsVDdDN1hLQ3FyZVM0TzZ4STJveGtha3Bac2R6TjQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkUtWjFCUDFTU0ZTbW5mektlaDdJZ2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWRjMDY1YTktYTRiNS00YTA2LTkzOTItNjg4MGM1ZWJkMzY0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNixcbiAgICAgIDIyOCxcbiAgICAgIDE5NCxcbiAgICAgIDEsXG4gICAgICAxNDYsXG4gICAgICAxMzAsXG4gICAgICAxOTMsXG4gICAgICAyMjMsXG4gICAgICA2OSxcbiAgICAgIDg2LFxuICAgICAgNzQsXG4gICAgICAxNTEsXG4gICAgICAyMzksXG4gICAgICA2MCxcbiAgICAgIDE1LFxuICAgICAgNzYsXG4gICAgICA0OCxcbiAgICAgIDIxMixcbiAgICAgIDY0LFxuICAgICAgMTczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MSxcbiAgICAgIDE3MixcbiAgICAgIDg0LFxuICAgICAgNjgsXG4gICAgICAyMDIsXG4gICAgICA3LFxuICAgICAgNDQsXG4gICAgICAyMzIsXG4gICAgICA5NSxcbiAgICAgIDc3LFxuICAgICAgMTQ2LFxuICAgICAgMTAxLFxuICAgICAgMzEsXG4gICAgICAyMTUsXG4gICAgICAxOTAsXG4gICAgICAyMzAsXG4gICAgICAyMjQsXG4gICAgICAxMDUsXG4gICAgICAxMjcsXG4gICAgICAxNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTVozM0E3RFJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNjE2OTMxMDE6NTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwNjg0MTQ5NzgxMzA5NTo1NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQV1NnakFRamFXd3N3WVlDQ0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInlIemhlWnpWUzhOeEJkbXFXc3hSSHpDdTFPYUVhclJRek1TSzdubFVQVUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiK3dlUitHL0lJYkxScURNWDdNc25wNGgwdU1aTUNRa0dSY2lLbDVuRExER1FVSFpUdnptSG53bUV4K0cxZUtLN0JReVBldGlsYTREZ1g4V0lpQmdnRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNEhxdTZKQjcwd2VDS2I2Q3JOYXZXWHpGYTBSRUlkTVBRa3ZHRURYMTNSUk8wb0FXTWlkTFdSTVRSU2VSQml2b3NiUHZpL3MvbEptWkJ0QmNGS0lmQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA2MTY5MzEwMTo1NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTgzNTg2NzNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
