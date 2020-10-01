import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  align-items: center;
  align-content: flex-end;
  width: 20%;
  height: 35px;
  border-radius: 10px;
  padding: 40px;
  color: #707070;

  @media (max-width: 800px) {
    align-content: flex-start;
    width: 50vw;
  }

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`;

const Option = styled.option`
  color: #707070;
  padding: 50px;
  text-align; left;
`;

const Label = styled.label`
  padding: 8px;
  font-size: 25px;
  white-space: nowrap;
`;

const Select = styled.select`
  cursor: pointer;
  padding: 8px;

  :hover 
    text-align; left
`;

const Sort = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value)
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
