import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";


const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;

`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Title>Hats</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Style
            </Option>
            <Option>Normal</Option>
            <Option>Bucket Hat</Option>
            <Option>Running Hat</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (highest)</Option>
            <Option>Price (lowest)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Footer />
    </Container>
  );
};

export default ProductList;