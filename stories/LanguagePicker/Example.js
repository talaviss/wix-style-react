import React from 'react';
import {LanguagePicker, Input} from 'wix-style-react';

export default () =>
  <div style={{display: 'flex', alignItems: 'center'}}>
    <LanguagePicker dataHook="story-languagePicker"/>
  </div>;
