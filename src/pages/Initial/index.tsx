import React, { useState } from 'react';

import {
  Container,
  Background,
  Content,
  Title,
  SoftSkills,
  Graph,
  Part1,
  Part2,
  Part3,
  Part4,
  Part5,
  Part6,
} from './styles';

interface ISoftSkill {
  communication: boolean;
  imagination: boolean;
  resilience: boolean;
  empaty: boolean;
  liderance: boolean;
  etic: boolean;
}

const Initial: React.FC = () => {
  const [softSkill, setSoftSkill] = useState<ISoftSkill>();

  return (
    <Container>
      <Background></Background>
      <Content>
        <Title>SOFT SKILLS</Title>
        <Graph>
          <SoftSkills />
          <Part1>
            <div></div>
          </Part1>
          <Part2>
            <div></div>
          </Part2>
          <Part3>
            <div></div>
          </Part3>
          <Part4>
            <div></div>
          </Part4>
          <Part5>
            <div></div>
          </Part5>
          <Part6>
            <div></div>
          </Part6>
        </Graph>
      </Content>
    </Container>
  );
};

export default Initial;
