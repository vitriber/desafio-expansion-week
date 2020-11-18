import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  flex: 1;
  background-color: #474a51;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 700px;
`;

export const Title = styled.h1`
  padding: 60px;
  padding-left: 200px;
`;

export const Graph = styled.div`
  padding: 100px;
  padding-left: 120px;
`;

export const SoftSkills = styled.div`
  background-color: #696969;
  width: 400px;
  height: 400px;
  position: absolute;

  -moz-border-radius: 100%;
  -webkit-border-radius: 100%;
  -o-border-radius: 100%;
  border-radius: 100%;
  -moz-box-shadow: -1px 1px 3px #000;
  -webkit-box-shadow: -1px 1px 3px #000;
  -o-box-shadow: -1px 1px 3px #000;
  box-shadow: -1px 1px 3px #000;
`;

export const Part1 = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  -moz-border-radius: 100%;
  -webkit-border-radius: 100%;
  -o-border-radius: 100%;
  border-radius: 100%;
  clip: rect(0px, 400px, 400px, 200px);

  div {
    position: absolute;
    width: 400px;
    height: 400px;
    -moz-border-radius: 100%;
    -webkit-border-radius: 100%;
    -o-border-radius: 100%;
    border-radius: 100%;
    clip: rect(0px, 200px, 400px, 0px);

    background-color: #1b458b;
    -webkit-transform: rotate(60deg);
    -moz-transform: rotate(60deg);
    -o-transform: rotate(60deg);
    transform: rotate(60deg);

    &:hover {
      background-color: ${shade(0.2, '#1b458b')};
    }
  }
`;
export const Part2 = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  -moz-border-radius: 100%;
  -webkit-border-radius: 100%;
  -o-border-radius: 100%;
  border-radius: 100%;
  clip: rect(0px, 400px, 400px, 200px);

  -webkit-transform: rotate(60deg);
  -moz-transform: rotate(60deg);
  -o-transform: rotate(60deg);
  transform: rotate(60deg);

  div {
    position: absolute;
    width: 400px;
    height: 400px;
    -moz-border-radius: 100%;
    -webkit-border-radius: 100%;
    -o-border-radius: 100%;
    border-radius: 100%;
    clip: rect(0px, 200px, 400px, 0px);

    background-color: #ccbb87;
    -webkit-transform: rotate(60deg);
    -moz-transform: rotate(60deg);
    -o-transform: rotate(60deg);
    transform: rotate(60deg);

    &:hover {
      background-color: ${shade(0.2, '#ccbb87')};
    }
  }
`;
export const Part3 = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  -moz-border-radius: 100%;
  -webkit-border-radius: 100%;
  -o-border-radius: 100%;
  border-radius: 100%;
  clip: rect(0px, 400px, 400px, 200px);

  -webkit-transform: rotate(120deg);
  -moz-transform: rotate(120deg);
  -o-transform: rotate(120deg);
  transform: rotate(120deg);

  div {
    position: absolute;
    width: 400px;
    height: 400px;
    -moz-border-radius: 100%;
    -webkit-border-radius: 100%;
    -o-border-radius: 100%;
    border-radius: 100%;
    clip: rect(0px, 200px, 400px, 0px);

    background-color: #cc0000;
    -webkit-transform: rotate(60deg);
    -moz-transform: rotate(60deg);
    -o-transform: rotate(60deg);
    transform: rotate(60deg);

    &:hover {
      background-color: ${shade(0.2, '#cc0000')};
    }
  }
`;
export const Part4 = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  -moz-border-radius: 100%;
  -webkit-border-radius: 100%;
  -o-border-radius: 100%;
  border-radius: 100%;
  clip: rect(0px, 400px, 400px, 200px);

  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);

  div {
    position: absolute;
    width: 400px;
    height: 400px;
    -moz-border-radius: 100%;
    -webkit-border-radius: 100%;
    -o-border-radius: 100%;
    border-radius: 100%;
    clip: rect(0px, 200px, 400px, 0px);

    background-color: #cc00ff;
    -webkit-transform: rotate(60deg);
    -moz-transform: rotate(60deg);
    -o-transform: rotate(60deg);
    transform: rotate(60deg);

    &:hover {
      background-color: ${shade(0.2, '#cc00ff')};
    }
  }
`;

export const Part5 = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  -moz-border-radius: 100%;
  -webkit-border-radius: 100%;
  -o-border-radius: 100%;
  border-radius: 100%;
  clip: rect(0px, 400px, 400px, 200px);

  -webkit-transform: rotate(240deg);
  -moz-transform: rotate(240deg);
  -o-transform: rotate(240deg);
  transform: rotate(240deg);

  div {
    position: absolute;
    width: 400px;
    height: 400px;
    -moz-border-radius: 100%;
    -webkit-border-radius: 100%;
    -o-border-radius: 100%;
    border-radius: 100%;
    clip: rect(0px, 200px, 400px, 0px);

    background-color: #00a86b;
    -webkit-transform: rotate(60deg);
    -moz-transform: rotate(60deg);
    -o-transform: rotate(60deg);
    transform: rotate(60deg);

    &:hover {
      background-color: ${shade(0.2, '#00A86B')};
    }
  }
`;
export const Part6 = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  -moz-border-radius: 100%;
  -webkit-border-radius: 100%;
  -o-border-radius: 100%;
  border-radius: 100%;
  clip: rect(0px, 400px, 400px, 200px);

  -webkit-transform: rotate(300deg);
  -moz-transform: rotate(300deg);
  -o-transform: rotate(300deg);
  transform: rotate(300deg);

  div {
    position: absolute;
    width: 400px;
    height: 400px;
    -moz-border-radius: 100%;
    -webkit-border-radius: 100%;
    -o-border-radius: 100%;
    border-radius: 100%;
    clip: rect(0px, 200px, 400px, 0px);

    background-color: #eead2d;
    -webkit-transform: rotate(60deg);
    -moz-transform: rotate(60deg);
    -o-transform: rotate(60deg);
    transform: rotate(60deg);

    &:hover {
      background-color: ${shade(0.2, '#EEAD2D')};
    }
  }
`;
