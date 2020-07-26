
const data = `type Query {
  me: User
}

type Mutation {
  createProperty(input: CreatePropertyInput!): ID!
  deleteProperty(id: ID!): Boolean!
  incrementPropertyView(referrerId: ID!, propertyId: ID!): Boolean!
}

type User {
  id: ID!
  email: String!
  phone: String
  name: String!
  type: UserType!
  properties: [Property!]
}

type Property {
  id: String!
  bounty: Float!
  remainingExpense: Float!
  title: String!
  visits: Int!
  state: String
  costValue: Int!
  costType: CostType!
  owner: User!
  images: [Image!]
  description: String
  featured: Boolean
}

type Image {
  url: String!
  previewUrl: String!
}

input ImageInput {
  url: String!
  previewUrl: String!
}

enum CostType {
  Rent
  Sale
}

enum UserType {
  Agency
  Individual
  Unassigned
}

type Location {
  state: String!
}

input LocationInput {
  state: String!
}

type Cost {
  value: Int!
  costType: CostType!
}

type PropertyPoint {
  propertyId: String!
  propertyTitle: String!
  points: Int!
  profit: Float!
}

input ViewProperty {
  propertyId: String!
  referrerId: String!
}

input CreatePropertyInput {
  title: String!
  location: LocationInput!
  costValue: Int!
  costType: CostType!
  featured: Boolean!
  images: [ImageInput!]!
  description: String!
}
`
export default data
