import React from 'react';
import styled from "styled-components";

const StyledInput = styled.input`
 padding: 5px;
  width: 100%;
  margin: 5px 0;
  border: 1px solid teal;
`

const MyInput = React.forwardRef((props, ref)  => {
    return (
        <StyledInput ref={ref} {...props}>


        </StyledInput>
    );
});

export default MyInput;
