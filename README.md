<h1> nekos.best-api </h1>

<h3> An easy-to-use wrapper for the nekos.best api! </h3> 

<h2> How to use: </h2>

```js

const NekoClient = require("nekos.best-api") 

//instantiate a neko client 
const client = new NekoClient()

//there's only one event and it's the ready one 
client.on("ready", () => {
    
    //get a neko url and log to console 
    console.log(client.nekos())
}) 

```

<h2> Methods </h2> 

`nekos()` - get a random neko url

`cuddle()` - get a random neko cuddle url 

`feed()` - get a random neko feed url 

`hug()` - get a random neko hug url 

`kiss()` - get a random neko kiss url 

`pat()` - get a random neko pat url 

`poke()` - get a random neko poke url 

`slap()` - get a random neko slap url

`tickle()` - get a random neko tickle url

<h3> This package will be updated as soon as <a href="https://nekos.best/">nekos.best</a> updates its api! </h3>