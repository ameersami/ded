import { default as styled } from 'styled-components';

const InputFieldWrapper = styled.label`
  display: block;
  position: relative;
`;

const InputFieldLabel = styled.span`
  position: absolute;
  cursor: text;
  font-size: 75%;
  opacity: 1;
  transition: all .2s;
  left: 10px;
  top: 5px;
  -webkit-transition: all .2s;
          transition: all .2s;
  font-family: 'Roboto';
  font-weight: bold;
`;

const InputFieldInput = styled.input`
  width: 100%;
  font-size: inherit;
  border: 1px solid #D8D8D8;
  border-radius: 6px;
  padding-left: 10px;
  padding-top: 12px;
  height: 45px;
  margin-top: 0px;
  box-sizing: border-box;
  font-family: 'Roboto';

  &::placeholder {
    opacity: 1;
    transition: all .2s;
  }
  &:placeholder-shown:not(:focus)::placeholder {
      opacity: 0;
  }
  /* Label default styles */
  &:placeholder-shown:not(:focus) + * {
    font-size: 100%;
    opacity: .5;
    top: .80em;
    left: 10px;
    font-family: 'Roboto';
    font-weight: bold;
  }
  &:focus {
    outline: none;
    border-color: #42BFF7;
    transition: border-color 0.1s ease-in-out;
  }
`;


export {
  InputFieldWrapper,
  InputFieldLabel,
  InputFieldInput,
};
