import styled from "styled-components";
import Title from "../Title";

// styled a component not html element. also pass props
// we need to use styled() constructor and pass the component
//Note:we can not get color here directly from props.
// when we pass a props to this Styledtitle, it first go to the "Title" component as props as className.there we need to receive and used into className
export const StyledTitle = styled(Title)`
  color: ${(props) => props.color};
`;
