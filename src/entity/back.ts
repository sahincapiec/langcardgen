export interface IBack {
    description: string,
    examples: string[],
    translation: string,
}

export default {
    checkIsValid: (obj: any) => {
        const errMsg = `Given back is not valid.`
        if (typeof(obj) !== `object`) {
            return errMsg
        }
        else if(typeof(obj.description) !== `string`){
            return `${errMsg} Description is not valid.`
        }
        else if(typeof(obj.translation) !== `string`){
            return `${errMsg} Translation is not valid.`
        }
        else if(!Array.isArray(obj.examples)){
            return `${errMsg} Examples are not valid.`
        }
        return undefined
    },
    toString: (back: IBack)=>{
        const examples = back.examples?.reduce((prev, curr)=>`${prev}${curr}\n`, ``)
        return `<h1>Description</h1>${back.description}<h1>Examples</h1>${examples}<h1>Translation</h1>${back.translation}`
    }
}
