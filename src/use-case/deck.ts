import { ICard } from "../entity/card";
import /*Deck,*/ { IDeck } from "../entity/deck";

const addCard = (card: ICard, deck: IDeck) => {
    let cardInDeck: ICard|undefined
    const cardsInDeck = deck.cards
    const cardsLength = cardsInDeck.length
    for (let i = 0; i<cardsLength; i++){
        if(cardsInDeck[i].front===card.front){
            cardInDeck = cardsInDeck[i]
            break
        }
    }

    if (typeof(cardInDeck) === `undefined`){
        deck.cards.push(card)
        return
    }

    const examples = card.back.examples
    const examplesLength = examples.length
    for (let i = 0; i<examplesLength;i++){
        if (!cardInDeck.back.examples.includes(examples[i])){
            cardInDeck.back.examples.push(examples[i])
        }
    }
}

export default {
    add: addCard,
}