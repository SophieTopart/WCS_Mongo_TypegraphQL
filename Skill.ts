import { Field, ObjectType } from "type-graphql"

@ObjectType()
class Skill {
    @Field()
    title: string
    @Field()
    votes: number
}

export default Skill
