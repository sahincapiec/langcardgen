import Card, {ICard} from "./card"

export interface IDeck{
    cards: ICard[],
}

export default {
    checkIsValid: (obj: any) => {
        const errMsg = `Given deck is not valid.`
        if (typeof(obj) !== `object`) {
            return errMsg
        }
        else if(!Array.isArray(obj.cards)){
            return `${errMsg} Cards are not valid.`
        }
    
        const cardsLength = obj.cards.length
        for(let i = 0; i< cardsLength; i++){
            const error = Card.checkIsValid(obj.cards[i])
            if (error) {
                return `${errMsg} ${error}`
            }
        }
    
        return undefined
    },
    toString: (deck: IDeck)=>{
        let result:string = ``
        const cardsLength = deck.cards?.length || 0
        for(let i = 0; i< cardsLength; i++){
            const cards = deck.cards || [] as ICard[]
            result = `${result}${Card.toString(cards[i])}\n`
        }
        return result
    },
}