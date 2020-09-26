import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  align-content: flex-end;
  width: 20%;
  height: 35px;
  // border: 2px solid #707070;
  // border-radius: 20px;
  padding: 16px;
  text-align: left;
`;

const Sort = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <Form className="sort-container" onSubmit={props.handleSubmit}>
      <label htmlFor="sort">Sort By:</label>
      <select className="sort" onChange={handleChange}>
        <option className="option" value="name-ascending">
          &nbsp; Alphabetically, A-Z &nbsp;
        </option>
        <option value="name-descending">
          &nbsp; Alphabetically, Z-A &nbsp;
        </option>
        <option value="price-ascending">
          &nbsp; Price, low to high &nbsp;
        </option>
        <option value="price-descending">
          &nbsp; Price, high to low &nbsp;
        </option>
      </select>
    </Form>
  );
};

export default Sort;
