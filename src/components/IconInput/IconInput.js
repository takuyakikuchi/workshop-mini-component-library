import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon id={icon} size={16}/>
      </IconWrapper>
      <NativeInput type="text" id={label} name={label} placeholder={placeholder} width={width}/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeInput = styled.input`
  padding: 0;
  padding-right: 4px;
  padding-bottom: 4px;
  /* Leave space for icon */
  padding-left: 16px;

  border: none;
  border-bottom: 1px solid ${COLORS.black};

  font-size: ${14 / 16}rem;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export default IconInput;
