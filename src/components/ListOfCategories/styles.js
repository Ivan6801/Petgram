import styled from 'styled-components'

export const List = styled.ul`
  animation: all .3s ease;
  display: flex;
  overflow: scroll;
  justify-content:normal;
  
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
