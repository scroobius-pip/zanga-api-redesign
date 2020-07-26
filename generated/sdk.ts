import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * The `Long` scalar type
   *  represents non-fractional signed whole numeric values.
   * Long can represent values between -(2^63) and 2^63 - 1.
 */
  Long: any,
  Date: any,
  Time: any,
};







export enum CostType {
  Rent = 'Rent',
  Sale = 'Sale'
}


export type Image = {
   __typename?: 'Image',
  previewUrl: Scalars['String'],
  url: Scalars['String'],
};

/** 'Image' input values */
export type ImageInput = {
  previewUrl: Scalars['String'],
  url: Scalars['String'],
};


export type Mutation = {
   __typename?: 'Mutation',
  /** Update an existing document in the collection of 'User' */
  updateUser?: Maybe<User>,
  /** Create a new document in the collection of 'PropertyPoint' */
  createPropertyPoint: PropertyPoint,
  /** Create a new document in the collection of 'User' */
  createUser: User,
  incrementPropertyPoint: PropertyPoint,
  /** Update an existing document in the collection of 'Property' */
  updateProperty?: Maybe<Property>,
  /** Delete an existing document in the collection of 'Property' */
  deleteProperty?: Maybe<Property>,
  /** 
 * Partially updates an existing document in the collection of 'PropertyPoint'.
   * It only modifies the values that are specified in the arguments. During
   * execution, it verifies that required fields are not set to 'null'.
 */
  partialUpdatePropertyPoint?: Maybe<PropertyPoint>,
  /** Update an existing document in the collection of 'PropertyPoint' */
  updatePropertyPoint?: Maybe<PropertyPoint>,
  /** Create a new document in the collection of 'Property' */
  createProperty: Property,
  /** 
 * Partially updates an existing document in the collection of 'Property'. It
   * only modifies the values that are specified in the arguments. During
   * execution, it verifies that required fields are not set to 'null'.
 */
  partialUpdateProperty?: Maybe<Property>,
  /** Delete an existing document in the collection of 'User' */
  deleteUser?: Maybe<User>,
  /** Delete an existing document in the collection of 'PropertyPoint' */
  deletePropertyPoint?: Maybe<PropertyPoint>,
  /** 
 * Partially updates an existing document in the collection of 'User'. It only
   * modifies the values that are specified in the arguments. During execution, it
   * verifies that required fields are not set to 'null'.
 */
  partialUpdateUser?: Maybe<User>,
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'],
  data: UserInput
};


export type MutationCreatePropertyPointArgs = {
  data: PropertyPointInput
};


export type MutationCreateUserArgs = {
  data: UserInput
};


export type MutationIncrementPropertyPointArgs = {
  propertyPointId: Scalars['ID']
};


export type MutationUpdatePropertyArgs = {
  id: Scalars['ID'],
  data: PropertyInput
};


export type MutationDeletePropertyArgs = {
  id: Scalars['ID']
};


export type MutationPartialUpdatePropertyPointArgs = {
  id: Scalars['ID'],
  data: PartialUpdatePropertyPointInput
};


export type MutationUpdatePropertyPointArgs = {
  id: Scalars['ID'],
  data: PropertyPointInput
};


export type MutationCreatePropertyArgs = {
  data: PropertyInput
};


export type MutationPartialUpdatePropertyArgs = {
  id: Scalars['ID'],
  data: PartialUpdatePropertyInput
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']
};


export type MutationDeletePropertyPointArgs = {
  id: Scalars['ID']
};


export type MutationPartialUpdateUserArgs = {
  id: Scalars['ID'],
  data: PartialUpdateUserInput
};

/** 'Image' input values */
export type PartialUpdateImageInput = {
  previewUrl?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

/** 'Property' input values */
export type PartialUpdatePropertyInput = {
  bounty?: Maybe<Scalars['Float']>,
  remainingExpense?: Maybe<Scalars['Float']>,
  visits?: Maybe<Scalars['Int']>,
  expense?: Maybe<Scalars['Float']>,
  title?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
  costValue?: Maybe<Scalars['Int']>,
  costType?: Maybe<CostType>,
  owner?: Maybe<PropertyOwnerRelation>,
  images?: Maybe<Array<PartialUpdateImageInput>>,
  description?: Maybe<Scalars['String']>,
  featured?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Scalars['String']>,
};

/** 'PropertyPoint' input values */
export type PartialUpdatePropertyPointInput = {
  user?: Maybe<PropertyPointUserRelation>,
  property?: Maybe<PropertyPointPropertyRelation>,
  userId?: Maybe<Scalars['ID']>,
  propertyId?: Maybe<Scalars['ID']>,
  impressions?: Maybe<Scalars['Int']>,
};

/** 'User' input values */
export type PartialUpdateUserInput = {
  phone?: Maybe<Scalars['String']>,
  balance?: Maybe<Scalars['Float']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  properties?: Maybe<UserPropertiesRelation>,
  type?: Maybe<UserType>,
  userId?: Maybe<Scalars['ID']>,
  propertyPoints?: Maybe<UserPropertyPointsRelation>,
};

export type Property = {
   __typename?: 'Property',
  visits: Scalars['Int'],
  city: Scalars['String'],
  expense: Scalars['Float'],
  state: Scalars['String'],
  remainingExpense: Scalars['Float'],
  description: Scalars['String'],
  costType: CostType,
  /** The document's ID. */
  _id: Scalars['ID'],
  featured?: Maybe<Scalars['Boolean']>,
  slug: Scalars['String'],
  costValue: Scalars['Int'],
  bounty: Scalars['Float'],
  owner: User,
  title: Scalars['String'],
  images?: Maybe<Array<Image>>,
  /** The document's timestamp. */
  _ts: Scalars['Long'],
};

/** 'Property' input values */
export type PropertyInput = {
  bounty: Scalars['Float'],
  remainingExpense: Scalars['Float'],
  visits: Scalars['Int'],
  expense: Scalars['Float'],
  title: Scalars['String'],
  city: Scalars['String'],
  state: Scalars['String'],
  costValue: Scalars['Int'],
  costType: CostType,
  owner?: Maybe<PropertyOwnerRelation>,
  images?: Maybe<Array<ImageInput>>,
  description: Scalars['String'],
  featured?: Maybe<Scalars['Boolean']>,
  slug: Scalars['String'],
};

/** Allow manipulating the relationship between the types 'Property' and 'User' using the field 'Property.owner'. */
export type PropertyOwnerRelation = {
  /** Create a document of type 'User' and associate it with the current document. */
  create?: Maybe<UserInput>,
  /** Connect a document of type 'User' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>,
};

/** The pagination object for elements of type 'Property'. */
export type PropertyPage = {
   __typename?: 'PropertyPage',
  /** The elements of type 'Property' in this page. */
  data: Array<Maybe<Property>>,
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>,
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>,
};

export type PropertyPoint = {
   __typename?: 'PropertyPoint',
  impressions: Scalars['Int'],
  /** The document's ID. */
  _id: Scalars['ID'],
  propertyId: Scalars['ID'],
  property: Property,
  userId: Scalars['ID'],
  user: User,
  /** The document's timestamp. */
  _ts: Scalars['Long'],
};

/** 'PropertyPoint' input values */
export type PropertyPointInput = {
  user?: Maybe<PropertyPointUserRelation>,
  property?: Maybe<PropertyPointPropertyRelation>,
  userId: Scalars['ID'],
  propertyId: Scalars['ID'],
  impressions: Scalars['Int'],
};

/** The pagination object for elements of type 'PropertyPoint'. */
export type PropertyPointPage = {
   __typename?: 'PropertyPointPage',
  /** The elements of type 'PropertyPoint' in this page. */
  data: Array<Maybe<PropertyPoint>>,
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>,
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>,
};

/** 
 * Allow manipulating the relationship between the types 'PropertyPoint' and
 * 'Property' using the field 'PropertyPoint.property'.
 */
export type PropertyPointPropertyRelation = {
  /** Create a document of type 'Property' and associate it with the current document. */
  create?: Maybe<PropertyInput>,
  /** Connect a document of type 'Property' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>,
};

/** Allow manipulating the relationship between the types 'PropertyPoint' and 'User' using the field 'PropertyPoint.user'. */
export type PropertyPointUserRelation = {
  /** Create a document of type 'User' and associate it with the current document. */
  create?: Maybe<UserInput>,
  /** Connect a document of type 'User' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>,
};

export type Query = {
   __typename?: 'Query',
  findPropertyByFeatured: PropertyPage,
  /** Find a document from the collection of 'Property' by its id. */
  findPropertyByID?: Maybe<Property>,
  findUserByEmail?: Maybe<User>,
  findPropertyBySlug: PropertyPage,
  findPropertyPointByPropertyIdAndUserId?: Maybe<PropertyPoint>,
  /** Find a document from the collection of 'User' by its id. */
  findUserByID?: Maybe<User>,
  /** Find a document from the collection of 'PropertyPoint' by its id. */
  findPropertyPointByID?: Maybe<PropertyPoint>,
  findPropertiesByCostType: PropertyPage,
};


export type QueryFindPropertyByFeaturedArgs = {
  _size?: Maybe<Scalars['Int']>,
  _cursor?: Maybe<Scalars['String']>,
  featured: Scalars['Boolean']
};


export type QueryFindPropertyByIdArgs = {
  id: Scalars['ID']
};


export type QueryFindUserByEmailArgs = {
  email: Scalars['String']
};


export type QueryFindPropertyBySlugArgs = {
  _size?: Maybe<Scalars['Int']>,
  _cursor?: Maybe<Scalars['String']>,
  slug: Scalars['String']
};


export type QueryFindPropertyPointByPropertyIdAndUserIdArgs = {
  propertyId: Scalars['ID'],
  userId: Scalars['ID']
};


export type QueryFindUserByIdArgs = {
  id: Scalars['ID']
};


export type QueryFindPropertyPointByIdArgs = {
  id: Scalars['ID']
};


export type QueryFindPropertiesByCostTypeArgs = {
  _size?: Maybe<Scalars['Int']>,
  _cursor?: Maybe<Scalars['String']>,
  costType: CostType
};


export type User = {
   __typename?: 'User',
  name: Scalars['String'],
  email: Scalars['String'],
  /** The document's ID. */
  _id: Scalars['ID'],
  balance: Scalars['Float'],
  properties: PropertyPage,
  userId: Scalars['ID'],
  type: UserType,
  propertyPoints: PropertyPointPage,
  phone?: Maybe<Scalars['String']>,
  /** The document's timestamp. */
  _ts: Scalars['Long'],
};


export type UserPropertiesArgs = {
  _size?: Maybe<Scalars['Int']>,
  _cursor?: Maybe<Scalars['String']>
};


export type UserPropertyPointsArgs = {
  _size?: Maybe<Scalars['Int']>,
  _cursor?: Maybe<Scalars['String']>
};

/** 'User' input values */
export type UserInput = {
  phone?: Maybe<Scalars['String']>,
  balance: Scalars['Float'],
  email: Scalars['String'],
  name: Scalars['String'],
  properties?: Maybe<UserPropertiesRelation>,
  type: UserType,
  userId: Scalars['ID'],
  propertyPoints?: Maybe<UserPropertyPointsRelation>,
};

/** Allow manipulating the relationship between the types 'User' and 'Property'. */
export type UserPropertiesRelation = {
  /** Create one or more documents of type 'Property' and associate them with the current document. */
  create?: Maybe<Array<Maybe<PropertyInput>>>,
  /** Connect one or more documents of type 'Property' with the current document using their IDs. */
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** Disconnect the given documents of type 'Property' from the current document using their IDs. */
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

/** Allow manipulating the relationship between the types 'User' and 'PropertyPoint'. */
export type UserPropertyPointsRelation = {
  /** Create one or more documents of type 'PropertyPoint' and associate them with the current document. */
  create?: Maybe<Array<Maybe<PropertyPointInput>>>,
  /** Connect one or more documents of type 'PropertyPoint' with the current document using their IDs. */
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** Disconnect the given documents of type 'PropertyPoint' from the current document using their IDs. */
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

export enum UserType {
  Agency = 'Agency',
  Individual = 'Individual',
  Unassigned = 'Unassigned'
}

export type CreatePropertyMutationVariables = {
  property: PropertyInput
};


export type CreatePropertyMutation = (
  { __typename?: 'Mutation' }
  & { createProperty: (
    { __typename?: 'Property' }
    & Pick<Property, 'city' | 'state' | 'costType' | 'costValue' | 'description' | 'title'>
    & { id: Property['_id'] }
    & { images: Maybe<Array<(
      { __typename?: 'Image' }
      & Pick<Image, 'previewUrl' | 'url'>
    )>>, owner: (
      { __typename?: 'User' }
      & Pick<User, 'name'>
    ) }
  ) }
);

export type CreatePropertyPointMutationVariables = {
  data: PropertyPointInput
};


export type CreatePropertyPointMutation = (
  { __typename?: 'Mutation' }
  & { createPropertyPoint: (
    { __typename?: 'PropertyPoint' }
    & { id: PropertyPoint['_id'] }
  ) }
);

export type CreateUserMutationVariables = {
  user: UserInput
};


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & Pick<User, 'email'>
    & { dbId: User['_id'] }
  ) }
);

export type DeletePropertyMutationVariables = {
  id: Scalars['ID']
};


export type DeletePropertyMutation = (
  { __typename?: 'Mutation' }
  & { deleteProperty: Maybe<(
    { __typename?: 'Property' }
    & { id: Property['_id'] }
  )> }
);

export type IncrementPropertyPointMutationVariables = {
  propertyPointId: Scalars['ID']
};


export type IncrementPropertyPointMutation = (
  { __typename?: 'Mutation' }
  & { incrementPropertyPoint: (
    { __typename?: 'PropertyPoint' }
    & Pick<PropertyPoint, 'impressions'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'balance'>
    ), property: (
      { __typename?: 'Property' }
      & Pick<Property, 'remainingExpense' | 'visits' | 'expense'>
      & { owner: (
        { __typename?: 'User' }
        & Pick<User, 'balance'>
      ) }
    ) }
  ) }
);

export type FindUserByEmailQueryVariables = {
  email: Scalars['String']
};


export type FindUserByEmailQuery = (
  { __typename?: 'Query' }
  & { findUserByEmail: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'email' | 'phone' | 'name' | 'userId' | 'type' | 'balance'>
    & { dbId: User['_id'] }
    & { properties: (
      { __typename?: 'PropertyPage' }
      & { data: Array<Maybe<(
        { __typename?: 'Property' }
        & Pick<Property, 'visits' | 'city' | 'state' | 'remainingExpense' | 'description' | 'costType' | 'costValue' | 'slug' | 'featured' | 'bounty' | 'title'>
        & { dbId: Property['_id'] }
        & { images: Maybe<Array<(
          { __typename?: 'Image' }
          & Pick<Image, 'previewUrl' | 'url'>
        )>> }
      )>> }
    ) }
  )> }
);


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
    user {
      balance
    }
    property {
      remainingExpense
      visits
      expense
      owner {
        balance
      }
    }
  }
}
    `;
export const FindUserByEmailDocument = gql`
    query findUserByEmail($email: String!) {
  findUserByEmail(email: $email) {
    email
    phone
    name
    userId
    type
    dbId: _id
    balance
    properties {
      data {
        visits
        city
        state
        remainingExpense
        description
        costType
        costValue
        slug
        featured
        bounty
        title
        images {
          previewUrl
          url
        }
        dbId: _id
      }
    }
  }
}
    `;
export function getSdk(client: GraphQLClient) {
  return {
    createProperty(variables: CreatePropertyMutationVariables): Promise<CreatePropertyMutation> {
      return client.request<CreatePropertyMutation>(print(CreatePropertyDocument), variables);
    },
    createPropertyPoint(variables: CreatePropertyPointMutationVariables): Promise<CreatePropertyPointMutation> {
      return client.request<CreatePropertyPointMutation>(print(CreatePropertyPointDocument), variables);
    },
    createUser(variables: CreateUserMutationVariables): Promise<CreateUserMutation> {
      return client.request<CreateUserMutation>(print(CreateUserDocument), variables);
    },
    deleteProperty(variables: DeletePropertyMutationVariables): Promise<DeletePropertyMutation> {
      return client.request<DeletePropertyMutation>(print(DeletePropertyDocument), variables);
    },
    incrementPropertyPoint(variables: IncrementPropertyPointMutationVariables): Promise<IncrementPropertyPointMutation> {
      return client.request<IncrementPropertyPointMutation>(print(IncrementPropertyPointDocument), variables);
    },
    findUserByEmail(variables: FindUserByEmailQueryVariables): Promise<FindUserByEmailQuery> {
      return client.request<FindUserByEmailQuery>(print(FindUserByEmailDocument), variables);
    }
  };
}