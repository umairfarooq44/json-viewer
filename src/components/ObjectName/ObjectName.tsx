import React from 'react';
import styled from 'styled-components';
type Props = {
  namespace: string;
  name: string;
  type?: string;
  parentType?: string;
  root?: Boolean;
};

const NameContainer = styled.span`
  color: rgb(249, 248, 245);
`;
const Colon = styled.span`
  margin: 0px 5px;
  color: rgb(249, 248, 245);
`;

export default function getObjectName(props: Props) {
  const { parentType, namespace, root, name } = props;

  const display_name = props.name ? props.name : '';

  if (root && !name) {
    return <span />;
  } else if (parentType === 'array') {
    return (
      <NameContainer className='object-name' key={namespace}>
        <span>{display_name}</span>
        <Colon>:</Colon>
      </NameContainer>
    );
  } else {
    return (
      <NameContainer className='object-name' key={namespace}>
        <span>
          <span style={{ verticalAlign: 'top' }}>"</span>
          <span>{display_name}</span>
          <span style={{ verticalAlign: 'top' }}>"</span>
        </span>
        <Colon>:</Colon>
      </NameContainer>
    );
  }
}
