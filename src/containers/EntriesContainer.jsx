import React from 'react';

import EntryListContainer from './EntryListContainer';
import EntryInputContainer from './EntryInputContainer';
import TotalContainer from './TotalContainer';

const EntriesContainer = () =>
  (
    <div>
      <TotalContainer />
      <EntryListContainer />
      <EntryInputContainer />
    </div>
  );

export default EntriesContainer;
