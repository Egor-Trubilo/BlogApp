import React from 'react';
import styled from "styled-components";

const StyledCard = styled.button`
 padding: 5px 15px;
  color: teal;
  font-size: 14px;
  background: transparent;
  border: 1px solid teal;
  cursor: pointer;
`

const MyButton = ({children, ...props }) => {
    return (
        <StyledCard {...props}>
            {children}


        </StyledCard>

    );
};


export default MyButton;
