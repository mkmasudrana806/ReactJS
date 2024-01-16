import Button from "./Button";
import {
  ButtonContainer,
  CardContainer,
  ContentContainer,
} from "./styledComponents/Container.styled";
import { Tag, H1, P, Image } from "./styledComponents/Elements.styled";
import img from "./assets/illustration.png";
import { StyledTitle } from "./styledComponents/Custom.styled";

const Card = () => {
  return (
    <CardContainer>
      <ContentContainer>
        <Tag color="#4361ee">ESCLUSIVE</Tag>
        <H1>
          <StyledTitle color="green" text={"This is the styled Title"} />
        </H1>
        <P>
          Exclusive React JS Turorial on Styled Components where you will learn
          why we need this & how to use it
        </P>
        <ButtonContainer>
          <Button link={"www.facebook.com"} text={"Watch Now"} />
          <Button link={"www.facebook.com"} text={"GitHub repo"} />
        </ButtonContainer>
      </ContentContainer>
      <Image src={img} width="300px"></Image>
    </CardContainer>
  );
};

export default Card;
