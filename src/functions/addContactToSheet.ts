import { format } from 'fecha'
const SteinStore = require("stein-js-client")

interface ContactSheet {
    name: string
    number: string
    email: string
    notes: string
    propertyId: string
    referrerId: string
}

export default async (contact: ContactSheet) => {
    const store = new SteinStore("https://api.steinhq.com/v1/storages/5e4ed78b5a823204986f3bc4")
    const date = format(new Date(), 'MM/DD/YYYY HH:mm:ss')
    await store.append('Sheet1', [{
        ...contact,
        date
    }])

}


