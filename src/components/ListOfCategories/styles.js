import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &.fixed {
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: -20px;
    transform: scale(.5);
    z-index: 1;
  }
  
  &::-webkit-scrollbar-track {
    display: none;
  }

  &::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  }
  &::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 3px rgba(1, 1, 1, 0.5);
          box-shadow: inset 0 0 3px rgba(1, 1, 1, 0.5);
  border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(1, 1, 1, 0.5);
          box-shadow: inset 0 0 6px rgba(1, 1, 1, 0.5);
  }
  
`
export const Item = styled.li`
  padding: 0 8px;
`
