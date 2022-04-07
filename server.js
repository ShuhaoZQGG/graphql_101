import express from 'express';
import expressGraphQL from 'express-graphql';
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';
const app = express()
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'HelloWorld',
    fields: () => ({
      message: { 
        type: GraphQLString,
        resolve: () => 'Hello World'
      }
    })
  })
})
app.get('/', (_req, res) => {
  res.send('hello GraphQL 101')
})

app.use('/graphql', expressGraphQL.graphqlHTTP({
  schema: schema,
  graphiql: true
}))
app.listen(5000, () => console.log('Server Running'));

