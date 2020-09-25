import React from "react";
import styled from "styled-components"

const SearchBar = styled.input`
  

`

const Search = (props) => {
  return (
    <form onSubmit={(e) => props.onSubmit(e)}>
      <input
        type="text"
        value={props.value}
        onChange={(e) => props.onChange(e)}
        name="Search"
        autoFocus
      />
    </form>
  )
}

export default Search;
