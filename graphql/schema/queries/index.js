import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import userType from '../types/user';
import localeType from '../types/locale';
import suitcaseType from '../types/suitcase';
import itemType from '../types/item';

import resolvers from '../../resolvers';

export default new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        allUsers: {
            type: GraphQLList(userType),
            resolve: () => resolvers.user.findAll()
        },
        allLocales: {
            type: GraphQLList(localeType),
            resolve: () => resolvers.locale.findAll()
        },
        allSuitcases: {
            type: GraphQLList(suitcaseType),
            resolve: () => resolvers.suitcase.findAll()
        },
        allItems: {
            type: GraphQLList(itemType),
            resolve: () => resolvers.item.findAll()
        },
        getSuitcase: {
            type: suitcaseType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve: ( root, args ) => resolvers.suitcase.findById( args )
        }
    })
})