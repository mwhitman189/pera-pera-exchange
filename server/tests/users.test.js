const mongoose = require('mongoose')
const User = require('../api/models/user')

const userData = [
    {
        username: "Testy",
        email: "example@example.com",
        nativeLanguage: "english",
        password: "examplePassword"
    },
    {
        email: "example@example.com",
        nativeLanguage: "english",
        password: "examplePassword"
    },
    {
        username: "Testy",
        email: "example.com",
        nativeLanguage: "english",
        password: "examplePassword"
    },
    {
        username: "Testy",
        email: "example@example.com",
        nativeLanguage: "english",
        password: "e"
    }
]

describe('User Model Test', () => {
    beforeAll(async () => {
        await mongoose.connect(
            global.__MONGO_URI__,
            { useNewUrlParser: true, useCreateIndex: true },
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

    it('should create and save a user successfully', async () => {
        const validUser = new User(userData[ 0 ])
        const savedUser = await validUser.save()

        // Check if an object _id is defined
        expect(savedUser._id).toBeDefined()
        expect(savedUser.username).toBe(userData[ 0 ].username)
        expect(savedUser.email).toBe(userData[ 0 ].email)
        expect(savedUser.nativeLanguage).toBe(userData[ 0 ].nativeLanguage)
    })

    it('should fail to create a user without all required fields', async () => {
        const userWithoutRequiredField = new User(userData[ 1 ])

        let err
        try {
            const savedUser = await userWithoutRequiredField.save()
            err = savedUser
        } catch (error) {
            err = error
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
        expect(err.errors.username).toBeDefined()
    })

    it('should fail to create a user with an invalid email', async () => {
        const userWithInvalidEmail = new User(userData[ 2 ])

        let err
        try {
            const savedUser = await userWithInvalidEmail.save()
            err = savedUser
        } catch (error) {
            err = error
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
        expect(err.errors.email).toBeDefined()
    })

    it('should fail to create a user without a password of at least minlength', async () => {
        const userWithInvalidPasswordLength = new User(userData[ 3 ])

        let err
        try {
            const savedUser = await userWithInvalidPasswordLength.save()
            err = savedUser
        } catch (error) {
            err = error
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
        expect(err.errors.password).toBeDefined()
    })
})