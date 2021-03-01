 const NekoClient = require("./src/index") 
 const neko = new NekoClient() 
 
neko.on("ready", () => {
    console.log("Neko client ready!", neko.cuddle()) 
}) 