import styled from 'styled-components/macro';

export const ButtonCustomWhiteSC = styled.button`
  ${(p) => (p.padding !== undefined ? `padding:${p.padding};` : null)}
  ${(p) => (p.width !== undefined ? `width:${p.width};` : null)}
  height: 56px;
  ${(p) =>
    p.statusOpasity === undefined
      ? `:hover{
          background: rgba(0,0,0,0.1);
        }
        :active{
          //background: var(--green-color-active);
        }`
      : p.statusOpasity
      ? null
      : `:hover{
          background: var(--green-color-hover);
        }
        :active{
          background: var(--green-color-active);
        }`}
  ${(p) =>
    p.primary
      ? `background: var(--green-color);
         color: var(--white-color);`
      : `background: var(--white-color);
         color: var(--green-color);
         border: 2px solid var(--green-color) !important;
         `}
  box-sizing: border-box;
  border-radius: 20px;
  border: none;
  color: #85cb33ff;
  /* text-transform: capitalize; */
  font-family: var(--root-font-family);
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  text-align: center;
  ${(p) => (p.statusOpasity !== undefined ? `opacity: ${p.statusOpasity ? 0.5 : 1};` : null)}
`;
