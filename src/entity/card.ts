import Back, { IBack } from "./back"

export interface ICard {
    front: string,
    back: IBack,
}

export default {
    checkIsValid: (obj: any) => {
        const errMsg = `Given card is not valid.`
        if (typeof(obj) !== `object`) {
            return errMsg
        }
        else if(typeof(obj.front) !== `string`){
            return `${errMsg} Front is not valid.`
        }
    
        const error = Back.checkIsValid(obj.back)
        if (error) {
            return `${errMsg} ${error}`
        }
    
        return undefined
    },
    toString: (card: ICard)=>{
        return `"${card.front}";"${Back.toString(card.back)}"`
    },
}
