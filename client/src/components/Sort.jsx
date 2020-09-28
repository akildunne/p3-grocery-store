import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  align-content: flex-end;
  width: 20%;
  height: 35px;
  //  border: 2px solid #707070;
   border-radius:  10px;
  padding: 40px;
  color: #707070;
`;

const Option = styled.option`
color: #707070;
padding: 50px;
text-align; left;
`

const Label = styled.label`
padding: 8px;
`
const Select = styled.select`
 cursor: pointer;
padding: 8px;
:hover 
text-align; left
`;



const Sort = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <Form className="sort-container" onSubmit={props.handleSubmit}>
      <Label htmlFor="sort">Sort By:</Label>
      <Select className="sort" onChange={handleChange}>
        <Option value="price-ascending">
          &nbsp; Price, low to high &nbsp;
        </Option>
        <Option value="price-descending">
          &nbsp; Price, high to low &nbsp;
        </Option>
        <Option className="Option" value="name-ascending">
          &nbsp; Alphabetically, A-Z &nbsp;
        </Option>
        <Option value="name-descending">
          &nbsp; Alphabetically, Z-A &nbsp;
        </Option>
        </Select>
        
    </Form>
  );
};

export default Sort;
