import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Long: any;
  Date: any;
  Time: any;
};







export enum CostType {
  Rent = 'Rent',
  Sale = 'Sale'
}


export type Image = {
  __typename?: 'Image';
  previewUrl: Scalars['String'];
  url: Scalars['String'];
};

export type ImageInput = {
  previewUrl: Scalars['String'];
  url: Scalars['String'];
};


export type Mutation = {
  __typename?: 'Mutation';
  updateUser?: Maybe<User>;
  createPropertyPoint: PropertyPoint;
  createUser: User;
  incrementPropertyVisit: Property;
  incrementPropertyPoint: PropertyPoint;
  updateProperty?: Maybe<Property>;
  deleteProperty?: Maybe<Property>;
  partialUpdatePropertyPoint?: Maybe<PropertyPoint>;
  addUserBalance: Scalars['Float'];
  updatePropertyPoint?: Maybe<PropertyPoint>;
  createProperty: Property;
  partialUpdateProperty?: Maybe<Property>;
  deleteUser?: Maybe<User>;
  deletePropertyPoint?: Maybe<PropertyPoint>;
  partialUpdateUser?: Maybe<User>;
  subtractUserBalance: Scalars['Float'];
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  data: UserInput;
};


export type MutationCreatePropertyPointArgs = {
  data: PropertyPointInput;
};


export type MutationCreateUserArgs = {
  data: UserInput;
};


export type MutationIncrementPropertyVisitArgs = {
  propertyId: Scalars['ID'];
};


export type MutationIncrementPropertyPointArgs = {
  propertyPointId: Scalars['ID'];
};


export type MutationUpdatePropertyArgs = {
  id: Scalars['ID'];
  data: PropertyInput;
};


export type MutationDeletePropertyArgs = {
  id: Scalars['ID'];
};


export type MutationPartialUpdatePropertyPointArgs = {
  id: Scalars['ID'];
  data: PartialUpdatePropertyPointInput;
};


export type MutationAddUserBalanceArgs = {
  userId: Scalars['ID'];
  value: Scalars['Float'];
};


export type MutationUpdatePropertyPointArgs = {
  id: Scalars['ID'];
  data: PropertyPointInput;
};


export type MutationCreatePropertyArgs = {
  data: PropertyInput;
};


export type MutationPartialUpdatePropertyArgs = {
  id: Scalars['ID'];
  data: PartialUpdatePropertyInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePropertyPointArgs = {
  id: Scalars['ID'];
};


export type MutationPartialUpdateUserArgs = {
  id: Scalars['ID'];
  data: PartialUpdateUserInput;
};


export type MutationSubtractUserBalanceArgs = {
  userId: Scalars['ID'];
  value: Scalars['Float'];
};

export type PartialUpdateImageInput = {
  previewUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type PartialUpdatePropertyInput = {
  bounty?: Maybe<Scalars['Float']>;
  remainingExpense?: Maybe<Scalars['Float']>;
  visits?: Maybe<Scalars['Int']>;
  expense?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  costValue?: Maybe<Scalars['Int']>;
  costType?: Maybe<CostType>;
  owner?: Maybe<PropertyOwnerRelation>;
  images?: Maybe<Array<PartialUpdateImageInput>>;
  description?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
};

export type PartialUpdatePropertyPointInput = {
  user?: Maybe<PropertyPointUserRelation>;
  property?: Maybe<PropertyPointPropertyRelation>;
  userId?: Maybe<Scalars['ID']>;
  propertyId?: Maybe<Scalars['ID']>;
  impressions?: Maybe<Scalars['Int']>;
  profit?: Maybe<Scalars['Float']>;
};

export type PartialUpdateUserInput = {
  phone?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['Float']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  properties?: Maybe<UserPropertiesRelation>;
  type?: Maybe<UserType>;
  userId?: Maybe<Scalars['ID']>;
  propertyPoints?: Maybe<UserPropertyPointsRelation>;
};

export type Property = {
  __typename?: 'Property';
  visits: Scalars['Int'];
  city: Scalars['String'];
  expense?: Maybe<Scalars['Float']>;
  state: Scalars['String'];
  remainingExpense: Scalars['Float'];
  description: Scalars['String'];
  costType: CostType;
  _id: Scalars['ID'];
  featured?: Maybe<Scalars['Boolean']>;
  slug: Scalars['String'];
  costValue: Scalars['Int'];
  bounty: Scalars['Float'];
  owner: User;
  title: Scalars['String'];
  images?: Maybe<Array<Image>>;
  _ts: Scalars['Long'];
};

export type PropertyInput = {
  bounty: Scalars['Float'];
  remainingExpense: Scalars['Float'];
  visits: Scalars['Int'];
  expense?: Maybe<Scalars['Float']>;
  title: Scalars['String'];
  city: Scalars['String'];
  state: Scalars['String'];
  costValue: Scalars['Int'];
  costType: CostType;
  owner?: Maybe<PropertyOwnerRelation>;
  images?: Maybe<Array<ImageInput>>;
  description: Scalars['String'];
  featured?: Maybe<Scalars['Boolean']>;
  slug: Scalars['String'];
};

export type PropertyOwnerRelation = {
  create?: Maybe<UserInput>;
  connect?: Maybe<Scalars['ID']>;
};

export type PropertyPage = {
  __typename?: 'PropertyPage';
  data: Array<Maybe<Property>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type PropertyPoint = {
  __typename?: 'PropertyPoint';
  impressions: Scalars['Int'];
  profit: Scalars['Float'];
  _id: Scalars['ID'];
  propertyId: Scalars['ID'];
  property: Property;
  userId: Scalars['ID'];
  user: User;
  _ts: Scalars['Long'];
};

export type PropertyPointInput = {
  user?: Maybe<PropertyPointUserRelation>;
  property?: Maybe<PropertyPointPropertyRelation>;
  userId: Scalars['ID'];
  propertyId: Scalars['ID'];
  impressions: Scalars['Int'];
  profit: Scalars['Float'];
};

export type PropertyPointPage = {
  __typename?: 'PropertyPointPage';
  data: Array<Maybe<PropertyPoint>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type PropertyPointPropertyRelation = {
  create?: Maybe<PropertyInput>;
  connect?: Maybe<Scalars['ID']>;
};

export type PropertyPointUserRelation = {
  create?: Maybe<UserInput>;
  connect?: Maybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  findPropertyByFeatured: PropertyPage;
  findPropertiesByCostTypeAndState: PropertyPage;
  findPropertyByID?: Maybe<Property>;
  findUserByEmail?: Maybe<User>;
  findPropertyBySlug: Property;
  findPropertiesByUserId: PropertyPage;
  findPropertyPointByPropertyIdAndUserId?: Maybe<PropertyPoint>;
  findPropertyPointsByUserId: PropertyPointPage;
  findUserByID?: Maybe<User>;
  findUserByUserId?: Maybe<User>;
  findPropertyPointByID?: Maybe<PropertyPoint>;
  findPropertiesByCostType: PropertyPage;
};


export type QueryFindPropertyByFeaturedArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
  featured: Scalars['Boolean'];
};


export type QueryFindPropertiesByCostTypeAndStateArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
  costType: CostType;
  state: Scalars['String'];
};


export type QueryFindPropertyByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindUserByEmailArgs = {
  email: Scalars['String'];
};


export type QueryFindPropertyBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryFindPropertiesByUserIdArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
  costType: CostType;
  state: Scalars['String'];
};


export type QueryFindPropertyPointByPropertyIdAndUserIdArgs = {
  propertyId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type QueryFindPropertyPointsByUserIdArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
  userId: Scalars['ID'];
};


export type QueryFindUserByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindUserByUserIdArgs = {
  userId: Scalars['ID'];
};


export type QueryFindPropertyPointByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindPropertiesByCostTypeArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
  costType: CostType;
};


export type User = {
  __typename?: 'User';
  name: Scalars['String'];
  email: Scalars['String'];
  _id: Scalars['ID'];
  balance: Scalars['Float'];
  properties: PropertyPage;
  userId: Scalars['ID'];
  type: UserType;
  propertyPoints: PropertyPointPage;
  phone?: Maybe<Scalars['String']>;
  _ts: Scalars['Long'];
};


export type UserPropertiesArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type UserPropertyPointsArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};

export type UserInput = {
  phone?: Maybe<Scalars['String']>;
  balance: Scalars['Float'];
  email: Scalars['String'];
  name: Scalars['String'];
  properties?: Maybe<UserPropertiesRelation>;
  type: UserType;
  userId: Scalars['ID'];
  propertyPoints?: Maybe<UserPropertyPointsRelation>;
};

export type UserPropertiesRelation = {
  create?: Maybe<Array<Maybe<PropertyInput>>>;
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type UserPropertyPointsRelation = {
  create?: Maybe<Array<Maybe<PropertyPointInput>>>;
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export enum UserType {
  Agency = 'Agency',
  Individual = 'Individual',
  Unassigned = 'Unassigned'
}

export type PropertyFieldsFragment = (
  { __typename?: 'Property' }
  & Pick<Property, 'visits' | 'state' | 'city' | 'expense' | 'remainingExpense' | 'slug' | 'featured' | 'description' | 'costType' | 'costValue' | 'bounty' | 'title'>
  & { dbId: Property['_id'] }
  & { owner: (
    { __typename?: 'User' }
    & Pick<User, 'name' | 'phone'>
  ), images?: Maybe<Array<(
    { __typename?: 'Image' }
    & Pick<Image, 'previewUrl' | 'url'>
  )>> }
);

export type UserFieldsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'email' | 'phone' | 'name' | 'userId' | 'type' | 'balance'>
  & { dbId: User['_id'] }
);

export type CreatePropertyMutationVariables = Exact<{
  property: PropertyInput;
}>;


export type CreatePropertyMutation = (
  { __typename?: 'Mutation' }
  & { createProperty: (
    { __typename?: 'Property' }
    & Pick<Property, 'city' | 'state' | 'costType' | 'costValue' | 'description' | 'title'>
    & { id: Property['_id'] }
    & { images?: Maybe<Array<(
      { __typename?: 'Image' }
      & Pick<Image, 'previewUrl' | 'url'>
    )>>, owner: (
      { __typename?: 'User' }
      & Pick<User, 'name'>
    ) }
  ) }
);

export type CreatePropertyPointMutationVariables = Exact<{
  data: PropertyPointInput;
}>;


export type CreatePropertyPointMutation = (
  { __typename?: 'Mutation' }
  & { createPropertyPoint: (
    { __typename?: 'PropertyPoint' }
    & { id: PropertyPoint['_id'] }
  ) }
);

export type CreateUserMutationVariables = Exact<{
  user: UserInput;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & Pick<User, 'email'>
    & { dbId: User['_id'] }
  ) }
);

export type DeletePropertyMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeletePropertyMutation = (
  { __typename?: 'Mutation' }
  & { deleteProperty?: Maybe<(
    { __typename?: 'Property' }
    & { id: Property['_id'] }
  )> }
);

export type IncrementPropertyPointMutationVariables = Exact<{
  propertyPointId: Scalars['ID'];
}>;


export type IncrementPropertyPointMutation = (
  { __typename?: 'Mutation' }
  & { incrementPropertyPoint: (
    { __typename?: 'PropertyPoint' }
    & Pick<PropertyPoint, 'impressions'>
  ) }
);

export type IncrementPropertyVisitMutationVariables = Exact<{
  propertyId: Scalars['ID'];
}>;


export type IncrementPropertyVisitMutation = (
  { __typename?: 'Mutation' }
  & { incrementPropertyVisit: (
    { __typename?: 'Property' }
    & Pick<Property, 'visits'>
  ) }
);

export type UpdatePropertyMutationVariables = Exact<{
  propertyId: Scalars['ID'];
  data: PartialUpdatePropertyInput;
}>;


export type UpdatePropertyMutation = (
  { __typename?: 'Mutation' }
  & { partialUpdateProperty?: Maybe<(
    { __typename?: 'Property' }
    & PropertyFieldsFragment
  )> }
);

export type UpdateUserMutationVariables = Exact<{
  userId: Scalars['ID'];
  data: PartialUpdateUserInput;
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { partialUpdateUser?: Maybe<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )> }
);

export type FeaturedPropertiesQueryVariables = Exact<{ [key: string]: never; }>;


export type FeaturedPropertiesQuery = (
  { __typename?: 'Query' }
  & { findPropertyByFeatured: (
    { __typename?: 'PropertyPage' }
    & { data: Array<Maybe<(
      { __typename?: 'Property' }
      & PropertyFieldsFragment
    )>> }
  ) }
);

export type PropertiesQueryVariables = Exact<{
  type: CostType;
  state: Scalars['String'];
  cursor?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
}>;


export type PropertiesQuery = (
  { __typename?: 'Query' }
  & { findPropertiesByCostTypeAndState: (
    { __typename?: 'PropertyPage' }
    & Pick<PropertyPage, 'after' | 'before'>
    & { data: Array<Maybe<(
      { __typename?: 'Property' }
      & PropertyFieldsFragment
    )>> }
  ) }
);

export type UserPropertiesQueryVariables = Exact<{
  email: Scalars['String'];
  cursor?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
}>;


export type UserPropertiesQuery = (
  { __typename?: 'Query' }
  & { findUserByEmail?: Maybe<(
    { __typename?: 'User' }
    & { properties: (
      { __typename?: 'PropertyPage' }
      & Pick<PropertyPage, 'after' | 'before'>
      & { data: Array<Maybe<(
        { __typename?: 'Property' }
        & PropertyFieldsFragment
      )>> }
    ) }
  )> }
);

export type PropertyQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type PropertyQuery = (
  { __typename?: 'Query' }
  & { findPropertyBySlug: (
    { __typename?: 'Property' }
    & PropertyFieldsFragment
  ) }
);

export type FindPropertyPointQueryVariables = Exact<{
  propertyId: Scalars['ID'];
  userId: Scalars['ID'];
}>;


export type FindPropertyPointQuery = (
  { __typename?: 'Query' }
  & { findPropertyPointByPropertyIdAndUserId?: Maybe<(
    { __typename?: 'PropertyPoint' }
    & Pick<PropertyPoint, '_id'>
  )> }
);

export type FindUserPropertyPointsQueryVariables = Exact<{
  userId: Scalars['ID'];
  cursor?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
}>;


export type FindUserPropertyPointsQuery = (
  { __typename?: 'Query' }
  & { findPropertyPointsByUserId: (
    { __typename?: 'PropertyPointPage' }
    & Pick<PropertyPointPage, 'after' | 'before'>
    & { data: Array<Maybe<(
      { __typename?: 'PropertyPoint' }
      & Pick<PropertyPoint, 'impressions' | 'profit'>
      & { property: (
        { __typename?: 'Property' }
        & Pick<Property, 'slug' | 'title'>
      ) }
    )>> }
  ) }
);

export type FindUserByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type FindUserByEmailQuery = (
  { __typename?: 'Query' }
  & { findUserByEmail?: Maybe<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )> }
);

export type FindUserByUserIdQueryVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type FindUserByUserIdQuery = (
  { __typename?: 'Query' }
  & { findUserByUserId?: Maybe<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )> }
);

export const PropertyFieldsFragmentDoc = gql`
    fragment PropertyFields on Property {
  visits
  state
  city
  expense
  remainingExpense
  slug
  featured
  description
  owner {
    name
    phone
  }
  costType
  costValue
  bounty
  images {
    previewUrl
    url
  }
  title
  dbId: _id
}
    `;
export const UserFieldsFragmentDoc = gql`
    fragment UserFields on User {
  email
  phone
  name
  userId
  type
  dbId: _id
  balance
}
    `;
export const CreatePropertyDocument = gql`
    mutation createProperty($property: PropertyInput!) {
  createProperty(data: $property) {
    city
    state
    costType
    costValue
    description
    images {
      previewUrl
      url
    }
    title
    owner {
      name
    }
    id: _id
  }
}
    `;
export const CreatePropertyPointDocument = gql`
    mutation createPropertyPoint($data: PropertyPointInput!) {
  createPropertyPoint(data: $data) {
    id: _id
  }
}
    `;
export const CreateUserDocument = gql`
    mutation createUser($user: UserInput!) {
  createUser(data: $user) {
    email
    dbId: _id
  }
}
    `;
export const DeletePropertyDocument = gql`
    mutation deleteProperty($id: ID!) {
  deleteProperty(id: $id) {
    id: _id
  }
}
    `;
export const IncrementPropertyPointDocument = gql`
    mutation incrementPropertyPoint($propertyPointId: ID!) {
  incrementPropertyPoint(propertyPointId: $propertyPointId) {
    impressions
  }
}
    `;
export const IncrementPropertyVisitDocument = gql`
    mutation incrementPropertyVisit($propertyId: ID!) {
  incrementPropertyVisit(propertyId: $propertyId) {
    visits
  }
}
    `;
export const UpdatePropertyDocument = gql`
    mutation updateProperty($propertyId: ID!, $data: PartialUpdatePropertyInput!) {
  partialUpdateProperty(id: $propertyId, data: $data) {
    ...PropertyFields
  }
}
    ${PropertyFieldsFragmentDoc}`;
export const UpdateUserDocument = gql`
    mutation updateUser($userId: ID!, $data: PartialUpdateUserInput!) {
  partialUpdateUser(id: $userId, data: $data) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const FeaturedPropertiesDocument = gql`
    query featuredProperties {
  findPropertyByFeatured(_size: 100, featured: true) {
    data {
      ...PropertyFields
    }
  }
}
    ${PropertyFieldsFragmentDoc}`;
export const PropertiesDocument = gql`
    query properties($type: CostType!, $state: String!, $cursor: String, $size: Int) {
  findPropertiesByCostTypeAndState(costType: $type, state: $state, _cursor: $cursor, _size: $size) {
    after
    before
    data {
      ...PropertyFields
    }
  }
}
    ${PropertyFieldsFragmentDoc}`;
export const UserPropertiesDocument = gql`
    query userProperties($email: String!, $cursor: String, $size: Int) {
  findUserByEmail(email: $email) {
    properties(_size: $size, _cursor: $cursor) {
      after
      before
      data {
        ...PropertyFields
      }
    }
  }
}
    ${PropertyFieldsFragmentDoc}`;
export const PropertyDocument = gql`
    query property($slug: String!) {
  findPropertyBySlug(slug: $slug) {
    ...PropertyFields
  }
}
    ${PropertyFieldsFragmentDoc}`;
export const FindPropertyPointDocument = gql`
    query findPropertyPoint($propertyId: ID!, $userId: ID!) {
  findPropertyPointByPropertyIdAndUserId(propertyId: $propertyId, userId: $userId) {
    _id
  }
}
    `;
export const FindUserPropertyPointsDocument = gql`
    query findUserPropertyPoints($userId: ID!, $cursor: String, $size: Int) {
  findPropertyPointsByUserId(userId: $userId, _size: $size, _cursor: $cursor) {
    after
    before
    data {
      impressions
      profit
      property {
        slug
        title
      }
    }
  }
}
    `;
export const FindUserByEmailDocument = gql`
    query findUserByEmail($email: String!) {
  findUserByEmail(email: $email) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const FindUserByUserIdDocument = gql`
    query findUserByUserId($userId: ID!) {
  findUserByUserId(userId: $userId) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createProperty(variables: CreatePropertyMutationVariables): Promise<CreatePropertyMutation> {
      return withWrapper(() => client.request<CreatePropertyMutation>(print(CreatePropertyDocument), variables));
    },
    createPropertyPoint(variables: CreatePropertyPointMutationVariables): Promise<CreatePropertyPointMutation> {
      return withWrapper(() => client.request<CreatePropertyPointMutation>(print(CreatePropertyPointDocument), variables));
    },
    createUser(variables: CreateUserMutationVariables): Promise<CreateUserMutation> {
      return withWrapper(() => client.request<CreateUserMutation>(print(CreateUserDocument), variables));
    },
    deleteProperty(variables: DeletePropertyMutationVariables): Promise<DeletePropertyMutation> {
      return withWrapper(() => client.request<DeletePropertyMutation>(print(DeletePropertyDocument), variables));
    },
    incrementPropertyPoint(variables: IncrementPropertyPointMutationVariables): Promise<IncrementPropertyPointMutation> {
      return withWrapper(() => client.request<IncrementPropertyPointMutation>(print(IncrementPropertyPointDocument), variables));
    },
    incrementPropertyVisit(variables: IncrementPropertyVisitMutationVariables): Promise<IncrementPropertyVisitMutation> {
      return withWrapper(() => client.request<IncrementPropertyVisitMutation>(print(IncrementPropertyVisitDocument), variables));
    },
    updateProperty(variables: UpdatePropertyMutationVariables): Promise<UpdatePropertyMutation> {
      return withWrapper(() => client.request<UpdatePropertyMutation>(print(UpdatePropertyDocument), variables));
    },
    updateUser(variables: UpdateUserMutationVariables): Promise<UpdateUserMutation> {
      return withWrapper(() => client.request<UpdateUserMutation>(print(UpdateUserDocument), variables));
    },
    featuredProperties(variables?: FeaturedPropertiesQueryVariables): Promise<FeaturedPropertiesQuery> {
      return withWrapper(() => client.request<FeaturedPropertiesQuery>(print(FeaturedPropertiesDocument), variables));
    },
    properties(variables: PropertiesQueryVariables): Promise<PropertiesQuery> {
      return withWrapper(() => client.request<PropertiesQuery>(print(PropertiesDocument), variables));
    },
    userProperties(variables: UserPropertiesQueryVariables): Promise<UserPropertiesQuery> {
      return withWrapper(() => client.request<UserPropertiesQuery>(print(UserPropertiesDocument), variables));
    },
    property(variables: PropertyQueryVariables): Promise<PropertyQuery> {
      return withWrapper(() => client.request<PropertyQuery>(print(PropertyDocument), variables));
    },
    findPropertyPoint(variables: FindPropertyPointQueryVariables): Promise<FindPropertyPointQuery> {
      return withWrapper(() => client.request<FindPropertyPointQuery>(print(FindPropertyPointDocument), variables));
    },
    findUserPropertyPoints(variables: FindUserPropertyPointsQueryVariables): Promise<FindUserPropertyPointsQuery> {
      return withWrapper(() => client.request<FindUserPropertyPointsQuery>(print(FindUserPropertyPointsDocument), variables));
    },
    findUserByEmail(variables: FindUserByEmailQueryVariables): Promise<FindUserByEmailQuery> {
      return withWrapper(() => client.request<FindUserByEmailQuery>(print(FindUserByEmailDocument), variables));
    },
    findUserByUserId(variables: FindUserByUserIdQueryVariables): Promise<FindUserByUserIdQuery> {
      return withWrapper(() => client.request<FindUserByUserIdQuery>(print(FindUserByUserIdDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;