import React from "react";
import styled from "styled-components"

const SearchBar = styled.input`
  width: 50vw;
  height: 25px;
  border: 2px solid #707070;
  border-radius: 20px;
  padding: 16px;
`

const Search = (props) => {
  return (
    <form onSubmit={(e) => props.onSubmit(e)}>
      <SearchBar
        type="text"
        value={props.value}
        onChange={(e) => props.onChange(e)}
        name="Search"
        placeholder="Search"
        autoFocus
      />
    </form>
  )
}

export default Search;
