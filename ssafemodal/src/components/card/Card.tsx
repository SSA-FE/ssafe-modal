import * as C from "./Card.element";
import { Tag } from "../forms/SurveyForm.element";
import { ITag } from "../forms/SurveyForm";

interface ICard {
  card: {
    id: string;
    title: string;
    content: string;
    date: Date;
    tags: ITag[];
  };
}

export const Card: React.FC<ICard> = ({ card }) => {
  return (
    <C.CardBlock>
      <C.CardHeader>
        <C.CardTitle>{card.title}</C.CardTitle>
        <C.CardDate>{card.date.toLocaleDateString()}</C.CardDate>
      </C.CardHeader>
      <C.CardContents>
        <C.Question>{card.content}</C.Question>
        <C.QuestionInfo>
          <b>문항수</b>: 30개
          <br />
          <b>예상소요시간</b>: 30분
        </C.QuestionInfo>
        <C.CardTagBox>
          {card.tags.map((tag: ITag) => (
            //TODO: tag.value말고 다른거 넣어야함.
            <Tag key={tag.value} color={tag.color}>
              {tag.value}
            </Tag>
          ))}
        </C.CardTagBox>
      </C.CardContents>
    </C.CardBlock>
  );
};
