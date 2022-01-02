import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    iconSize: 16 + 'px',
    '--fontSize': (14 / 16) + 'rem',
    '--borderWidth': 1 + 'px',
    '--dimension': 24 + 'px',
  },
  large: {
    iconSize: 24 + 'px',
    '--fontSize': (18 / 16) + 'rem',
    '--borderWidth': 2 + 'px',
    '--dimension': 36 + 'px',
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
        style={{
          '--width': width + 'px',
          ...styles,
        }}
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
  height: var(--dimension);
  width: var(--width);

  /* Leave space for icon */
  padding-left: var(--dimension);

  border: none;
  border-bottom: solid ${COLORS.black};
  border-width: var(--borderWidth);

  font-size: var(--fontSize);
  font-weight: 700;
  color: ${COLORS.gray700};

  &::placeholder {
    color: ${COLORS.gray300};
    font-weight: 400;
  }

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
  height: var(--dimension);

  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: fit-content;

  color: ${COLORS.gray700};

  pointer-events: none;
`;

export default IconInput;
