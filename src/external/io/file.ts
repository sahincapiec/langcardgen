import fs from "fs"

const fileReader = (filename: string, {fnProcessChunk = (s:string)=>{s}, fnEnd = ()=>{}, fnError = (s:string)=>{s}}) => {
    const readerStream = fs.createReadStream(filename);
    readerStream.setEncoding("utf8")
    readerStream.on(`data`, fnProcessChunk);  
    readerStream.on(`end`, fnEnd);  
    readerStream.on(`error`, fnError);
}

const fileWriter = (filename:string) => fs.createWriteStream(filename)

export default {
    fileReader,
    fileWriter,
}