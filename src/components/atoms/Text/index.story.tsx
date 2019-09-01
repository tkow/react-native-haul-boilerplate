import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components/native';
import {Label} from './index';

const View = styled.View`
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-content: center;
`;

storiesOf('Atoms/Text', module).add('Label', () => (
  <View>
    <Label> test </Label>
  </View>
));
