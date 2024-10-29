import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../components/admin/AdminLayout';
import styled from 'styled-components';

const AdminHome = () => {
  const navigate = useNavigate();

  // 네모 박스 클릭 핸들러
  const handleNavigateToRecipes = () => {
    navigate('/admin/recipe-list');
  };

  const handleAlert = (message) => {
    alert(message);
  };

  return (
    <AdminLayout
      title="관리자 홈"
      isRegisterEnabled={true}
      onBack={() => navigate("/")}
    >
      <BoxContainer>
        <Box onClick={handleNavigateToRecipes}>레시피</Box>
        <Box onClick={() => handleAlert("2번")}>페이지 2</Box>
        <Box onClick={() => handleAlert("3번")}>페이지 3</Box>
        <Box onClick={() => handleAlert("4번")}>페이지 4</Box>
      </BoxContainer>
    </AdminLayout>
  );
};

export default AdminHome;

// 스타일 컴포넌트
const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 16px;
  margin-top: 50px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #e0e0e0;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
  }
`;