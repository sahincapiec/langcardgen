import { IDeck } from "../entity/deck"
import { ICard } from "../entity/card"
import DeckService from "./deck"

export default {
    processText: (text: string, deck: IDeck) => {
        const sentences = text.split(`.`)
        const sentencesLength = sentences.length
        
        for (let i = 0; i<sentencesLength;i++){
            const sentence = sentences[i]
            const rawWords = sentence.split(` `)
            const processedWords: string[] = []
            const rawWordsLength = rawWords.length
            
            for(let j = 0; j<rawWordsLength; j++){
                const rawWord = rawWords[j]
                const rawWordLower = rawWord.toLowerCase()
                if(processedWords.indexOf(rawWordLower) >= 0) {
                    continue
                }

                processedWords.push(rawWordLower)
    
                let word = ``
                const wordLength = rawWordLower.length
    
                for(let k=0; k< wordLength;k++){
                    const ch = rawWordLower.substr(k,1)
                    if((ch >= 'a' && ch <= 'z')){
                        word = `${word}${ch}`
                    }
                }
    
                if (word.length>0) {
                    const card: ICard = {
                        front: word,
                        back: {
                            description: `???`,
                            examples: [`${sentence.trimLeft()}.`],
                            translation: `???`,
                        },
                    }
                    DeckService.add(card, deck)
                }
            }
        }
    },
}