import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/clae0efrn1fok01ul365z3bqi/master",
  cache: new InMemoryCache()
})