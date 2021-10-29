import "reflect-metadata"
import { ApolloServer } from "apollo-server"
import { buildSchema } from "type-graphql"
import WilderResolver from "./WilderResolver"

const mongoose = require("mongoose")

const start = async () => {
    const schema = await buildSchema({
        resolvers: [WilderResolver],
    })

    const server = new ApolloServer({ schema: schema })

    const { url } = await server.listen(4000)
    console.log(`Server is running, GraphQL Playground available at ${url}`)

    mongoose
        .connect("mongodb://127.0.0.1:27017/wilderdb", {
            autoIndex: true,
        })
        .then(() => console.log("Connected to database"))
        .catch((err) => console.error(err))
}

start()
