import styled from 'styled-components';
import Layout from '../components/layout/Layout';

const RecommendPage = () => {
  return (
    <Layout>
      <SelectedContainer>
        <h3>선택한 레시피 (3/7)</h3>
        <SelectedListContainer>
          <SelectedList>1</SelectedList>
          <SelectedList>2</SelectedList>
          <SelectedList>3</SelectedList>
        </SelectedListContainer>
      </SelectedContainer>

      <RecommendContainer>
        <h3>50%이내 가격의 레시피들</h3>
        <RecommendListContainer>
          <RecommendList>1</RecommendList>
          <RecommendList>2</RecommendList>
          <RecommendList>3</RecommendList>
          <RecommendList>4</RecommendList>
          <RecommendList>5</RecommendList>
        </RecommendListContainer>
      </RecommendContainer>

      <RecommendContainer>
        <h3>30%이내 가격의 레시피들</h3>
        <RecommendListContainer>
          <RecommendList>1</RecommendList>
          <RecommendList>2</RecommendList>
          <RecommendList>3</RecommendList>
          <RecommendList>4</RecommendList>
          <RecommendList>5</RecommendList>
        </RecommendListContainer>
      </RecommendContainer>
      <ShowBasicContainer>
        <ShowContainer>남은 금액 : 30,000원</ShowContainer>
        <ShowContainer>선택 완료</ShowContainer>
      </ShowBasicContainer>
    </Layout>
  );
};

export default RecommendPage;

const SelectedContainer = styled.div`
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  border: 1px black solid;
  text-align: center;
`;

const SelectedListContainer = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const SelectedList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 5px;
  border: 1px solid black;
  height: 120px;
  width: 80px;
`;

const RecommendContainer = styled.div`
  width: 100%;
  border: 1px solid black;
  margin-top: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
`;
const RecommendListContainer = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
`;

const RecommendList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  height: 190px;
  width: 150px;
`;

const ShowBasicContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: auto;
  border: 1px black solid;
`;

const ShowContainer = styled.div`
  height: 70px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-top: auto;
  border: 1px black solid;
`;
