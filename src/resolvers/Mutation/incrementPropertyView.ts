// import { MutationResolvers } from '../../../generated/graphqlgen';
// import addContactToSheet from '../../functions/addContactToSheet';
// import { POINT_RATE } from '../../constants';


// const contactAgent: MutationResolvers.ContactAgentResolver = async (_, { input }, ctx) => {

//     try {
//         await ctx.client.createContact({
//             contact: {
//                 name: input.name,
//                 number: input.number,
//                 email: input.email,
//                 notes: input.notes,
//                 property: {
//                     connect: input.propertyId
//                 }
//             }
//         })
//         if (input.referrerId) {

//             const property = (await ctx.client.property({
//                 id: input.propertyId,
//             })).findPropertyByID

//             if (!property) throw 'property id wrong'

//             let propertyPointId = (await ctx.client.propertyPoint({
//                 propertyId: input.propertyId,
//                 userId: input.referrerId
//             })).findPropertyPointByPropertyIdAndUserId?.id

//             if (!propertyPointId) {
//                 propertyPointId = (await ctx.client.createPropertyPoint({
//                     data: {
//                         impressions: 1,
//                         profit: property.pointCount * POINT_RATE,
//                         propertyId: property.id,
//                         propertyTitle: property.title,
//                         userId: input.referrerId,
//                         user: {
//                             connect: input.referrerId
//                         }
//                     }
//                 })).createPropertyPoint.id
//             }

//             await ctx.client.incrementPropertyPoint({
//                 pointNo: property.pointCount,
//                 propertyPointId: propertyPointId,
//                 rate: POINT_RATE
//             })

//         }

//         await addContactToSheet({
//             email: input.email,
//             name: input.name,
//             notes: input.notes,
//             number: input.number,
//             propertyId: input.propertyId,
//             referrerId: input.referrerId ?? ''
//         })

//         return true
//     } catch (error) {
//         console.log(error)
//         return false
//     }
// }

// export default contactAgent