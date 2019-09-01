import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components/native';
import {Label} from './index';

const View = styled.View`
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-content: center;
  background-color: #1ab270;
`;

storiesOf('Atoms/Text', module).add('Label', () => (
  <View>
    <Label> test </Label>
  </View>
));
