const fs=require('fs')
const path=require('path')
const filepath=path.join(process.cwd(),'user.json')
import {user} from "./src/app.service"

export const readFile=async()=>{
    try {
        const data=fs.readFileSync(filepath)
        return JSON.parse(data)
    } catch (error) {
        return error.message
    }
}

export const writeFile=async(data:user)=>{
    try {
        fs.writeFileSync(filepath,JSON.stringify(data))
        return "Ma'lumot yozildi!!"                                       
    } catch (error) {
        return error.message
    }
}
