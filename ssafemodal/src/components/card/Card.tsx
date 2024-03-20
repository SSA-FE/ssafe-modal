import {
  CardBlock,
  CardHeader,
  CardTitle,
  CardDate,
  CardContents,
  Question,
  QuestionInfo,
  CardTagBox,
} from "./Card.element";
import { Tag } from "../forms/SurveyForm.element";
import { ITag } from "../forms/SurveyForm";

interface ICard {
  card: {
    id: string;
    title: string;
    body: string;
    date: Date;
    tags: ITag[];
  };
}

export const Card: React.FC<ICard> = ({ card }) => {
  return (
    <CardBlock>
      <CardHeader>
        <CardTitle>{card.title}</CardTitle>
        <CardDate>{card.date.toLocaleDateString()}</CardDate>
      </CardHeader>
      <CardContents>
        <Question>{card.body}</Question>
        <QuestionInfo>
          <b>문항수</b>: 30개
          <br />
          <b>예상소요시간</b>: 30분
        </QuestionInfo>
        <CardTagBox>
          {card.tags.map((tag: ITag, idx: number) => (
            <Tag key={idx} color={tag.color}>
              {tag.value}
            </Tag>
          ))}
        </CardTagBox>
      </CardContents>
    </CardBlock>
  );
};
