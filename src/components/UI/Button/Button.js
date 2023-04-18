import React from "react";

// import styled from 'styled-components';
import styles from './Button.module.css';

//COMMENTED OUT STYLED COMPONENTS TO USE CSS MODULES. GRACIAS

// const Button = styled.button`
//   font: inherit;
//   width: 100%;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: green;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px){
//     width: auto;
//   }

// &:focus {
//   outline: none;
// }

// &:hover,
// &:active {
//   background: #ac0e77;
//   border-color: #ac0e77;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// }

// `;

//TESTING STYLED COMPONENTS INSTEAD

const Button = props => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
