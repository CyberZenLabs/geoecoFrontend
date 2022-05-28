import styled from "styled-components";

export const FlowerLoaderSc = styled.div`
  @-moz-keyframes flower-loader {
    0% {
      -moz-transform: rotate(0deg);
      transform: rotate(0deg);
      -moz-box-shadow: white 0 0 15px 0, #14342b60 -9px -9px 0 4px,
        #14342b60 9px -9px 0 4px, #14342b60 9px 9px 0 4px,
        #14342b60 -9px 9px 0 4px;
      box-shadow: white 0 0 15px 0, #14342b60 -9px -9px 0 4px,
        #14342b60 9px -9px 0 4px, #14342b60 9px 9px 0 4px,
        #14342b60 -9px 9px 0 4px;
    }
    50% {
      -moz-transform: rotate(1080deg);
      transform: rotate(1080deg);
      -moz-box-shadow: white 0 0 15px 0, #14342b60 9px 9px 0 4px,
        #14342b60 -9px 9px 0 4px, #14342b60 -9px -9px 0 4px,
        #14342b60 9px -9px 0 4px;
      box-shadow: white 0 0 15px 0, #14342b60 9px 9px 0 4px,
        #14342b60 -9px 9px 0 4px, #14342b60 -9px -9px 0 4px,
        #14342b60 9px -9px 0 4px;
    }
  }
  @-webkit-keyframes flower-loader {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-box-shadow: white 0 0 15px 0, #14342b60 -9px -9px 0 4px,
        #14342b60 9px -9px 0 4px, #14342b60 9px 9px 0 4px,
        #14342b60 -9px 9px 0 4px;
      box-shadow: white 0 0 15px 0, #14342b60 -9px -9px 0 4px,
        #14342b60 9px -9px 0 4px, #14342b60 9px 9px 0 4px,
        #14342b60 -9px 9px 0 4px;
    }
    50% {
      -webkit-transform: rotate(1080deg);
      transform: rotate(1080deg);
      -webkit-box-shadow: white 0 0 15px 0, #14342b60 9px 9px 0 4px,
        #14342b60 -9px 9px 0 4px, #14342b60 -9px -9px 0 4px,
        #14342b60 9px -9px 0 4px;
      box-shadow: white 0 0 15px 0, #14342b60 9px 9px 0 4px,
        #14342b60 -9px 9px 0 4px, #14342b60 -9px -9px 0 4px,
        #14342b60 9px -9px 0 4px;
    }
  }
  @keyframes flower-loader {
    0% {
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      -moz-box-shadow: white 0 0 15px 0, #14342b60 -9px -9px 0 4px,
        #14342b60 9px -9px 0 4px, #14342b60 9px 9px 0 4px,
        #14342b60 -9px 9px 0 4px;
      -webkit-box-shadow: white 0 0 15px 0, #14342b60 -9px -9px 0 4px,
        #14342b60 9px -9px 0 4px, #14342b60 9px 9px 0 4px,
        #14342b60 -9px 9px 0 4px;
      box-shadow: white 0 0 15px 0, #14342b60 -9px -9px 0 4px,
        #14342b60 9px -9px 0 4px, #14342b60 9px 9px 0 4px,
        #14342b60 -9px 9px 0 4px;
    }
    50% {
      -moz-transform: rotate(1080deg);
      -ms-transform: rotate(1080deg);
      -webkit-transform: rotate(1080deg);
      transform: rotate(1080deg);
      -moz-box-shadow: white 0 0 15px 0, #14342b60 9px 9px 0 4px,
        #14342b60 -9px 9px 0 4px, #14342b60 -9px -9px 0 4px,
        #14342b60 9px -9px 0 4px;
      -webkit-box-shadow: white 0 0 15px 0, #14342b60 9px 9px 0 4px,
        #14342b60 -9px 9px 0 4px, #14342b60 -9px -9px 0 4px,
        #14342b60 9px -9px 0 4px;
      box-shadow: white 0 0 15px 0, #14342b60    9px 9px 0 4px,
        #14342b60 -9px 9px 0 4px, #14342b60 -9px -9px 0 4px,
        #14342b60 9px -9px 0 4px;
    }
  }
  /* :not(:required) hides this rule from IE9 and below */
  :not(:required) {
    overflow: hidden;
    position: relative;
    text-indent: -9999px;
    display: inline-block;
    width: 11px;
    height: 11px;
    background: #252525;
    border-radius: 100%;
    -moz-box-shadow: white 0 0 15px 0, #14342b60 -9px -9px 0 4px,
      #14342b60 9px -9px 0 4px, #14342b60 9px 9px 0 4px,
      #14342b60 -9px 9px 0 4px;
    -webkit-box-shadow: white 0 0 15px 0, #14342b60 -9px -9px 0 4px,
      #14342b60 9px -9px 0 4px, #14342b60 9px 9px 0 4px,
      #14342b60 -9px 9px 0 4px;
    box-shadow: white 0 0 15px 0, #14342b60 -9px -9px 0 4px,
      #14342b60 9px -9px 0 4px, #14342b60 9px 9px 0 4px,
      #14342b60 -9px 9px 0 4px;
    -moz-animation: flower-loader 5s infinite ease-in-out;
    -webkit-animation: flower-loader 5s infinite ease-in-out;
    animation: flower-loader 5s infinite ease-in-out;
    -moz-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }
`;
