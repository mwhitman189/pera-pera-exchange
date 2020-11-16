const mongoose = require('mongoose')
const Sentence = require('../api/models/sentence')

const sentenceData = [
    {
        languagePoint: "41224d776a326fb40f000001",
        sentence: "That bear is huge!",
        voteCount: 3,
        winningCategory: "Most Useful",
        language: "english",
        user: "41224d776a326fb40f000001"
    },
    {
        languagePoint: "41224d776a326fb40f000001",
        sentence: "That bear is huge!",
        voteCount: 3,
        winningCategory: "Most Useful",
        language: "english",
        user: "41224d776a326fb40f000001"
    },
]

describe('Sentence Model Test', () => {
    beforeAll(async () => {
        await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true, useCreateIndex: true },
            (err) => {
                if (err) {
                    console.error(err)
                    process.exit(1)
                }
            })
    })

    afterAll(async () => {
        await mongoose.connection.close()
    })

    it('should create and save a sentence successfully', async () => {
        const validSentence = new Sentence(sentenceData[ 0 ])
        const savedSentence = await validSentence.save()

        expect(savedSentence._id).toBeDefined()
        expect(String(savedSentence.languagePoint)).toBe(sentenceData[ 0 ].languagePoint)
        expect(savedSentence.sentence).toBe(sentenceData[ 0 ].sentence)
        expect(savedSentence.voteCount).toBe(sentenceData[ 0 ].voteCount)
        expect(savedSentence.winningCategory).toBe(sentenceData[ 0 ].winningCategory)
        expect(savedSentence.language).toBe(sentenceData[ 0 ].language)
        expect(String(savedSentence.user)).toBe(sentenceData[ 0 ].user)
    })
})