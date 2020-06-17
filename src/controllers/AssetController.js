const axios = require('axios')

const show = async (ctx) => {
    const { label } = ctx.params

    try {
        const response = (await axios.get(`https://api.hgbrasil.com/finance/stock_price?key=1c0aeaa5&symbol=${label}`)).data

        ctx.body = response.results[label]
    } catch (error) {
        ctx.body = { error }
    }
}

module.exports = { show }