import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled(({ as: Component, iconStyle, onClick }) => (
  <Component style={iconStyle} onClick={onClick} />
))`
  font-size: 32px; /* 기본 아이콘 크기 */
  color: black; /* 기본 색상 */

  &:hover {
    color: #444; /* 호버 시 색상 변경 */
  }
`;

const IconButton = ({ onClick, IconComponent, iconStyle }) => {
  return (
    <Button onClick={onClick}>
      <StyledIcon as={IconComponent} iconStyle={iconStyle} />
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px; /* 원하는 버튼 크기로 조정 */
  height: 35px; /* 원하는 버튼 크기로 조정 */
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export default IconButton;
