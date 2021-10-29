import { Field, InputType } from "type-graphql"

@InputType()
export default class SkillInput {
    @Field({ nullable: true })
    title: string
    @Field({ nullable: true })
    votes: number
}
