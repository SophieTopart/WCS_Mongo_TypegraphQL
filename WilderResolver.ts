import { Arg, Mutation, Query, Resolver } from "type-graphql"
import Wilder from "./Wilder"
import WilderInput from "./WilderInput"
import WilderModel from "./models/Wilder"

/*let wilders: Wilder[] = [
    { id: "1", name: "Alain", city: "Paris", skills: [] },
    { id: "2", name: "Leïla", city: "Lyon", skills: [] },
]*/

@Resolver(Wilder)
class WilderResolver {
    @Query(() => [Wilder])
    async allWilders() {
        const getAllWilders = await WilderModel.find()
        return getAllWilders
    }
    @Mutation(() => String)
    async addWilder(@Arg("wilderInput") wilderInput: WilderInput) {
        return await WilderModel.create(wilderInput)
    }
    /*
    addWilder(@Arg("wilderInput") wilderInput: WilderInput) {
        wilders.push({
            ...wilderInput,
            id: String(Number(wilders[wilders.length - 1].id) + 1),
        })
        return "wilder added"
    }*/
    @Mutation(() => String)
    async deleteWilder(@Arg("wilderId") wilderId: string) {
        const result = await WilderModel.deleteOne({ id: wilderId })
        console.log(result)
        return "Wilder deleted"
    }
    /*
    deleteWilder(@Arg("wilderId") wilderId: string) {
        wilders = wilders.filter((wilder) => wilder.id !== wilderId)
        return "wilder deleted"
    }*/
}

export default WilderResolver
