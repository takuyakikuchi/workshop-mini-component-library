import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const StyledSelect = styled.select`
  appearance: none;
  border: none;

  height: 43px;
  width: 191px;
  border-radius: 8px;
  padding: 12px 16px;
  
  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: 1rem;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 16px;
  margin: auto;
  height: fit-content;
  color: ${COLORS.gray700};
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <IconWrapper>
        <Icon id="chevron-down" size={12} strokeWidth={2}/>
      </IconWrapper>
    </Wrapper>
  );
};

export default Select;
