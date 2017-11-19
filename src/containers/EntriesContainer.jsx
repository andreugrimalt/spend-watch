import React from 'react';
import styled from 'styled-components';

import EntryListContainer from './EntryListContainer';
import EntryInputContainer from './EntryInputContainer';
import TotalContainer from './TotalContainer';

const Div = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const EntriesContainer = () =>
  (
    <Div>
      <TotalContainer />
      <EntryListContainer />
      <EntryInputContainer />
    </Div>
  );

export default EntriesContainer;
