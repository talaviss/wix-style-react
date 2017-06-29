import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from '../utils/Components/Markdown';
import Readme from '../../src/ButtonWithOptions/README.md';
import ExampleStandardComp from './ButtonWithOptionsStandard';
import InteractiveCodeExample from '../utils/Components/InteractiveCodeExample/InteractiveCodeExample';

storiesOf('4. Selection', module)
  .add('4.2 ButtonWithOptions', () => {
    return (
      <div>
        <Markdown source={Readme}/>
        <InteractiveCodeExample title="Customize a <ButtonWithOptions/>">
          <ExampleStandardComp/>
        </InteractiveCodeExample>
      </div>
    );
  });
