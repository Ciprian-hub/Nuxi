export default defineEventHandler(async (event) => {

    // handle query params
    const { name } = await readBody(event)
    // handle post data
    const { age } = await readBody(event)

    return {
        message: `Age ${age} and ${name}`
    }
})