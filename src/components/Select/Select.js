import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  // Hide the native select
  opacity: 0;
`;
  
const PresentationBit = styled.div`
  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: 1rem;
  border-radius: 8px;

  padding: 12px 16px;
  padding-right: 52px;

  ${NativeSelect}:focus + & {
    // Fallback
    outline: 1px dotted #212121;
    // Adding the default focus style
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 10px;

  // Center the icon
  top: 0;
  bottom: 0;
  margin: auto;
  height: fit-content;

  pointer-events: none;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationBit>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down" size={24} strokeWidth={1}/>
        </IconWrapper>
      </PresentationBit>
    </Wrapper>
  );
};

export default Select;
