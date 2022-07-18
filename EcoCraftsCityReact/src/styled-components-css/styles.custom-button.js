import styled from "styled-components/macro";

export const ButtonCustomSC = styled.button`
  ${(p) => (p.padding !== undefined ?
      `padding:${p.padding};` : null)}
  ${(p) => (p.width !== undefined ?
      `width:${p.width};` : null)}
  ${(p) => (p.height !== undefined ?
      `height:${p.height};` : 'height: 56px;')}
  ${(p) => (p.borderRadius !== undefined ?
      `border-radius:${p.borderRadius};` : 'border-radius: 20px;')}
  ${(p) => (p.statusOpasity === undefined ?
          `:hover{
          background: var(--green-color-hover);
        }
        :active{
          background: var(--green-color-active);
        }` :
          p.statusOpasity ? null :
              `:hover{
          background: var(--green-color-hover);
        }
        :active{
          background: var(--green-color-active);
        }`
  ) }
  ${(p) => (p.primary ?
          `background: var(--green-color);
         color: var(--white-color);` :
          `background: var(--white-color);
         color: var(--green-color);
         border: 2px solid var(--green-color) !important;
         :hover {
          color: var(--white-color);
          
         }
         `
  ) }
  background: var(--green-color);
  background: #85CB33FF;
  box-sizing: border-box;
  //border-radius: 20px;
  border: none;
  color: var(--white-color);
  text-transform: capitalize;
  font-family: var(--root-font-family);
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  text-align: center;
  ${(p) => (p.statusOpasity !== undefined ?
      `opacity: ${p.statusOpasity ? 0.5 : 1};` :
      null) }

`;