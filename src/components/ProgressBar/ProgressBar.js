import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': 8 + 'px',
    '--borderRadius': 4 + 'px',
    '--padding': 0,
  },
  medium: {
    '--height': 12 + 'px',
    '--borderRadius': 4 + 'px',
    '--padding': 0,
  },
  large: {
    '--height': 24 + 'px',
    '--borderRadius': 8 + 'px',
    '--padding': 4 + 'px',
  },
};

const ProgressBarContainer = styled.div`
  width: 370px;
  height: var(--height);
  border-radius: var(--borderRadius);
  padding: var(--padding);

  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const ProgressBarValue = styled.div`
  width: ${({progress}) => progress}%;
  height: 100%;
  border-radius: ${({progress}) => progress === 100 ? '4px' : '4px 0 0 4px'};

  background: ${COLORS.primary};
`;

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Invalid size: ${size}`);
  }

  return (
    <ProgressBarContainer 
      style={styles} 
      role="progressbar" 
      aria-valuenow={value} 
      aria-valuemin="0" 
      aria-valuemax="100">
      <ProgressBarValue progress={value}>
        <VisuallyHidden>{value}%</VisuallyHidden>
      </ProgressBarValue>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
