import React, { useState } from 'react';
import styled from 'styled-components';
import { Object, Search, SelectFile } from '../../components';

const JsonContainer = styled.div`
  margin: 20px;
  background-color: rgb(30, 30, 30);
  font-family: monospace;
  padding: 10px;
`;

const Home = () => {
  const [jsonData, setJsonData] = useState();
  return (
    <div>
      <SelectFile onFileSelect={setJsonData} />
      {jsonData && (
        <>
          <Search json={jsonData} />
          <JsonContainer>
            <Object
              root
              src={jsonData}
              name=''
              depth={0}
              indentWidth={4}
              namespace=''
            />
          </JsonContainer>
        </>
      )}
    </div>
  );
};
export default Home;
