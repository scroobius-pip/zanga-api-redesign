import { QueryResolvers } from '../../../generated/graphqlgen';
import axios from 'axios'
import { nanoid } from 'nanoid'

const getPaymentLinkResolver: QueryResolvers.GetPaymentLinkResolver = async (_, args, ctx) => {
    if (!ctx.userId) { return '' }
    const { amount } = args.input



    const result = await axios.post<FlutterwaveResponse>('https://api.flutterwave.com/v3/payments', {
        tx_ref: nanoid(),
        amount: amount.toString(),
        redirect_url: 'https://myzanga.com/dashboard',
        currency: 'NGN',
        payment_options: 'card',
        customer: {
            email: ctx.userEmail,
            name: ctx.userId

        },
        customizations: {
            logo: "https://myzanga.com/zanga-logo.png",
            title: "Zanga Deposit",
            description: "Deposit into your Zanga balance"
        },
        meta: {
            "consumer_id": ctx.userId
        }
    }, {
        headers: {
            Authorization: 'Bearer ' + process.env.FLUTTERWAVE_SECRET
        }
    })

    return result?.data?.data?.link ?? ''

}
// Generated by https://quicktype.io

interface FlutterwaveResponse {
    status: string;
    message: string;
    data: Data;
}

interface Data {
    link: string;
}


export default getPaymentLinkResolver