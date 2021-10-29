import { Field, ObjectType } from "type-graphql";
import Skill from "./Skill";

@ObjectType()
class Wilder {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field()
  city: string;
  @Field(() => [Skill])
  skills: Skill[];
}

export default Wilder;
