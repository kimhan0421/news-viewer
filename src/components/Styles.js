import styled, {css} from 'styled-components';
import {NavLink} from 'react-router-dom';

export const NewsItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img{
      display: block;
      width: 160px;
      height:100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }

  & + & {
    margin-top: 3rem;
  }
`;

export const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%100px;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0auto;
  @media screen and (max-width: 768px) {
    width: 100%inherit;
    overflow-x:auto;
  }
`;

export const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  &:hover {
    color: #495057;
  }

  &.active{
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover{
      color: #3bc9db;
    }
  }
  /* ${props =>
    props.active && css `
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover{
        color: #3bc9db;
      }
  `} */

  &+&{
    margin-left: 1rem;
  }
`;
