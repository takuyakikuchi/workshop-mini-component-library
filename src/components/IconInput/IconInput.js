import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    iconSize: 16,
    '--fontSize': (14 / 16) + 'rem',
    '--borderWidth': 1 + 'px',
    '--paddingLeft': 24 + 'px',
  },
  large: {
    iconSize: 24,
    '--fontSize': (18 / 16) + 'rem',
    '--borderWidth': 2 + 'px',
    '--paddingLeft': 36 + 'px',
  },
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = SIZES[size];

  return (
    <Wrapper>
      <IconWrapper>
        <Icon id={icon} size={styles.iconSize}/>
      </IconWrapper>
      <label for={label}>
        <VisuallyHidden>{label}</VisuallyHidden>
      </label>
      <NativeInput 
        type="text" 
        id={label} 
        name={label}
        style={styles}
        placeholder={placeholder} 
        />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeInput = styled.input`
  padding: 4px;
  /* Leave space for icon */
  padding-left: var(--paddingLeft);

  border: none;
  border-bottom: solid ${COLORS.black};
  border-width: var(--borderWidth);

  font-size: var(--fontSize);

  &:focus {
    outline-offset: 4px;
    border-width: 2px;
  }

  &:hover {
    color: ${COLORS.black};
    border-width: 2px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 4px;
  left: 1px;

  pointer-events: none;
`;

export default IconInput;
