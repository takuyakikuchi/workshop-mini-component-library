/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBarContainer = styled.div`
  width: 370px;
  height: 24px;
  border-radius: 8px;
  padding: 4px;

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
  return (
    <ProgressBarContainer role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
      <ProgressBarValue progress={value} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
