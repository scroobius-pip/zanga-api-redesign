
const data = `type Query {
  me: User
  postedProperties(input: PaginationInput): PropertyPage!
  sharedProperties(input: PaginationInput): PropertyPointPage!
  properties(input: PropertiesInput!): PropertyPage!
  property(slug: String!): Property
  featuredProperties: PropertyPage!
}

type Mutation {
  createProperty(input: CreatePropertyInput!): ID!
  deleteProperty(id: ID!): Boolean!
  incrementPropertyView(input: PropertyViewInput!): Boolean
  updateUser(input: UserInput!): Boolean!
  assignBounty(input: BountyInput!): Boolean!
}

type User {
  id: ID!
  email: String!
  phone: String
  name: String!
  type: UserType!
}

input UserInput {
  type: UserType
  name: String
}

type Property {
  id: String!
  bounty: Float
  expense: Float
  remainingExpense: Float
  title: String!
  visits: Int!
  state: String
  costValue: Int!
  costType: CostType!
  owner: User!
  images: [Image!]
  description: String
  featured: Boolean
  slug: String!
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
  propertySlug: String!
  propertyTitle: String!
  impressions: Int!
  profit: Float!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
}

type PropertyPointPage {
  points: [PropertyPoint!]
  pageInfo: PageInfo!
}

type PropertyPage {
  properties: [Property!]
  pageInfo: PageInfo!
}

input BountyInput {
  propertyId: ID!
  expense: Float!
  bounty: Float!
}

input PropertyViewInput {
  referrerId: ID
  propertyId: ID!
}

input PropertiesInput {
  type: CostType!
  state: String!
  budget: Float
  cursor: String
}

input PaginationInput {
  cursor: String
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
