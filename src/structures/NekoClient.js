const axios = require("axios") 
const events = require("events" )

module.exports = class NekoClient extends events.EventEmitter {
    constructor() {
        super() 
        this.ready = false 
        this.endpoints() 
    } 
    
    get api() {
        return "https://nekos.best" 
    } 
    
    get support() {
        return "https://discord.com/invite/2NsE7akmM5" 
    } 
    
    async endpoints() {
        this.data = (await axios.get(this.api + "/endpoints")).data
        
        for (const [name, { min, max, format }] of Object.entries(this.data)) {
            this.set(name, min, max, format) 
        } 
        
        this.ready = true 
        this.emit("ready")
    } 
        
    random(min, max) {
        const totalLength = max.length 
        
        const minRestIndex = min.split("").findIndex(n => Number(n) !== 0)
        const maxRestIndex = max.split("").findIndex(n => Number(n) !== 0)
        
        const minN = Number(min.slice(minRestIndex)) 
        const maxN = Number(max.slice(maxRestIndex)) 
        
        const randomize = Math.floor(Math.random() * maxN) + minN 
        
        const rLength = String(randomize).length 
        
        return max.length === rLength ? randomize : "0".repeat(max.length - rLength) + randomize 
    } 
    
    set(name, min, max, format) {
        this[name] = () => {
            return this.api + `/${name}/` + this.random(min, max) + format 
        } 
    } 
    
    reconnect() {
        this.endpoints() 
    } 
} 