// import { Maybe } from '../../generated/sdk';

// type Maybe<T> = T | null
// export interface User {
//     id: string
//     email: Maybe<string>
//     phone: string
//     name: string
//     type: UserType,
//     // sharedProperties: Maybe<PropertyShare[]>
//     // postedProperties: Maybe<Property[]>
// }

// export interface PropertyPage {
//     properties: Property[]
//     pageInfo: PageInfo

// }

// export interface PropertyPointPage {
//     points: PropertyPoint[]
//     pageInfo: PageInfo
// }
// export interface PageInfo {
//     after: Maybe<string>
//     before: Maybe<string>
// }


// export interface Property {
//     id: string
//     slug: string
//     expense: number
//     remainingExpense: number
//     visits: number
//     bounty: number
//     title: string
//     city: string
//     state: string
//     costType: CostType
//     costValue: number
//     owner: Pick<User, 'name' | 'phone'>
//     images: Array<{ url: string, previewUrl: string }>
//     description: string
//     featured: boolean
// }


// export interface Owner {
//     phone: string
//     name: string
// }

// export interface Location {
//     city: string
//     state: string
// }

// type UserType = "Agency" | "Individual" | "Unassigned"

// export interface Cost {
//     value: number
// }
// export interface CostInput {
//     value: number
// }


// export interface RegisterResult {
//     token: string | null
//     message: string
// }
// export interface LoginResult {
//     token: string | null
//     message: string
// }

// export interface Image {
//     url: string
//     previewUrl: string
// }

// export interface PropertyPoint {
//     propertySlug: string
//     propertyTitle: string
//     visits: number
//     profit: number
// }



export interface User {
    id: string
    email: string
    phone: string | null
    name: string
    balance: number
}
export interface PropertyPage {
    properties: Property[]
    pageInfo: PageInfo

}
export interface Property {
    id: string
    slug: string
    expense: number
    remainingExpense: number
    visits: number
    bounty: number
    title: string
    city: string
    state: string
    costType: CostType
    costValue: number
    owner: Owner
    images: Image[]
    description: string
    featured: boolean
}

export type CostType = "Rent" | "Sale";

export interface Image {
    url: string
    previewUrl: string
}

export interface PageInfo {
    after: string | null
    before: string | null
}
export interface PropertyPointPage {
    points: PropertyPoint[]
    pageInfo: PageInfo
}
export interface PropertyPoint {
    propertySlug: string
    propertyTitle: string
    impressions: number
    profit: number
}
export interface Owner {
    phone: string
    name: string
}
export interface Location {
    city: string
    state: string
}