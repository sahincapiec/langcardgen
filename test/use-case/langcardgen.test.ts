import LangCardGen from "../../src/use-case/langcardgen";
import { IDeck } from "../../src/entity/deck";
import { ICard } from "../../src/entity/card";

test("processText break given text into cards and add them into given deck.", ()=>{
    const text = `An example text. Another text.`
    const deck: IDeck = {
        cards: [] as ICard[],
    }

    LangCardGen.processText(text, deck)

    expect(deck.cards.length).toBe(4)
    expect(deck.cards.find(c=>c.front===`an`)).toBeTruthy()
    expect(deck.cards.find(c=>c.front===`an`)?.back.description).toBe(`???`)
    expect(deck.cards.find(c=>c.front===`an`)?.back.translation).toBe(`???`)
    expect(deck.cards.find(c=>c.front===`an`)?.back.examples.length).toBe(1)
    expect(deck.cards.find(c=>c.front===`an`)?.back.examples[0]).toBe(`An example text.`)
    expect(deck.cards.find(c=>c.front===`example`)).toBeTruthy()
    expect(deck.cards.find(c=>c.front===`text`)).toBeTruthy()
    expect(deck.cards.find(c=>c.front===`text`)?.back.examples.length).toBe(2)
    expect(deck.cards.find(c=>c.front===`text`)?.back.examples.includes(`An example text.`)).toBeTruthy()
    expect(deck.cards.find(c=>c.front===`text`)?.back.examples.includes(`Another text.`)).toBeTruthy()
    expect(deck.cards.find(c=>c.front===`another`)).toBeTruthy()
})