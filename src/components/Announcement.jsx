import styled from "styled-components";


const Container = styled.div`
  height: 20px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  position: top;
`;

const Announcement = () => {
  return <Container>Grand opening!!</Container>;
};

export default Announcement;