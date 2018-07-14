import React from 'react';
import styled, { css } from 'styled-components';
import Shevy from 'shevyjs';

const shevy = new Shevy();
const { baseSpacing: bs, h1, h2, h3, h4, h5, h6 } = shevy;


const H1 = styled.h1`
`;
const H2 = styled.h2`
`;
const H3 = styled.h3`
`;
const H4 = styled.h4`
`;
const H5 = styled.h5`
`;
const H6 = styled.h6`

`;

export { H1, H2, H3, H4, H5, H6 };
