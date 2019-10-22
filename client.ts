export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Query = {
   __typename?: 'Query',
  user: User,
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  name: Scalars['String'],
};

export type GetUserQueryVariables = {};


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name'>
  ) }
);

export type GetUserIdQueryVariables = {};


export type GetUserIdQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);

import gql from 'graphql-tag';

export const GetUser = gql`
    query getUser {
  user {
    id
    name
  }
}
    `;
export const GetUserId = gql`
    query getUserId {
  user {
    id
  }
}
    `;