const mongoose = require('mongoose')
const LanguagePoint = require('../api/models/languagePoint')

const languagePointData = [
    {
        languagePoint: 'The "be" verb',
        japaneseName: '"Be"動詞',
        englishExample: "That bear is huge!",
        japaneseExample: "あの熊は大きい！",
        user: "41224d776a326fb40f000001"
    },
    {
        languagePoint: 'The "be" verb',
        japaneseName: '"Be"動詞',
        englishExample: "That bear is huge!",
        japaneseExample: "あの熊は大きい！",
        user: "41224d776a326fb40f000001"
    },
]

describe('LanguagePoint Model Test', () => {
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

    it('should create and save a language point successfully', async () => {
        const validLanguagePoint = new LanguagePoint(languagePointData[ 0 ])
        const savedLanguagePoint = await validLanguagePoint.save()

        expect(savedLanguagePoint._id).toBeDefined()
        expect(savedLanguagePoint.languagePoint).toBe(languagePointData[ 0 ].languagePoint)
        expect(savedLanguagePoint.japaneseName).toBe(languagePointData[ 0 ].japaneseName)
        expect(savedLanguagePoint.englishExample).toBe(languagePointData[ 0 ].englishExample)
        expect(savedLanguagePoint.japaneseExample).toBe(languagePointData[ 0 ].japaneseExample)
        expect(String(savedLanguagePoint.user)).toBe(languagePointData[ 0 ].user)
    })

    it('should not create a duplicate language point', async () => {
        const validLanguagePoint = new LanguagePoint(languagePointData[ 0 ])
        const duplicateLanguagePoint = new LanguagePoint(languagePointData[ 1 ])

        let err
        try {
            const savedValidLanguagePoint = await validLanguagePoint.save()
            const savedDuplicateLanguagePoint = await duplicateLanguagePoint.save()

            err = savedDuplicateLanguagePoint
        } catch (error) {
            err = error
            console.log(err)
        }

        // Confirm that the error code matches that of a 'duplicate key error'
        expect(err.code).toBe(11000)
    })
})