import { IDeck } from "../../entity/deck"
import File from "../io/file"
import LangCardGen from "../../use-case/langcardgen"
import Logger from "../log/logger"
import Card, { ICard } from "../../entity/card"

export default {
    start: ()=>{
        const tS = Date.now()
        const outputFileName = process.argv[3]
        const inputFileName = process.argv[2]
        if (typeof(outputFileName)===`undefined`){
            throw `Output file name is required!`
        } 
        else if (typeof(inputFileName)===`undefined`){
            throw `Input file name is required!`
        }
    
        let deck: IDeck = {
            cards: [] as ICard[],
        }
        let savedCards = 0
    
        const fw = File.fileWriter(outputFileName)
        File.fileReader(inputFileName, {
            fnError: (e: string)=>{
                Logger.error(e)
                throw e
            },
            fnEnd: () => {
                fw.end()
                Logger.info(`File '${outputFileName}' has been generated successfully.\nTime elapsed: ${Date.now() - tS}ms`)
            },
            fnProcessChunk: (chunk: string)=>{
                LangCardGen.processText(chunk, deck)
    
                const newsCardsLength = deck.cards.length
                for(let i = savedCards; i<newsCardsLength;i++){
                    fw.write(`${Card.toString(deck.cards[i])}\n`)
                }
                savedCards = newsCardsLength
            }
        })
    },
}