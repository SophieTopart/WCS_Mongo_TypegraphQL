import { InputType, Field } from "type-graphql";
import SkillInput from "./SkillInput";

@InputType()
export default class WilderInput {
  @Field()
  name: string;
  @Field()
  city: string;
  @Field(() => [SkillInput])
  skills: SkillInput[];
}
