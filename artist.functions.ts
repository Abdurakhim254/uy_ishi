const fs=require('fs')
const path=require('path')
const filepath=path.join(process.cwd(),'artist.json')

export const readFile=async()=>{
    try {
        const data=fs.readFileSync(filepath)
        return JSON.parse(data)
    } catch (error) {
        return error.message
    }
}

export const writeFile=async(data)=>{
    try {
        fs.writeFileSync(filepath,JSON.stringify(data))
        return "Ma'lumot yozildi!!"                                       
    } catch (error) {
        return error.message
    }
}
