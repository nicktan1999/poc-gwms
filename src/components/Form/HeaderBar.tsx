import * as React from 'react';
import { styled } from '@mui/system';
import FormTabs from './FormTabs';

const HeaderContainer = styled('div')({
  padding: '2px 12px',
});

const Title = styled('h4')({
  textAlign: 'start',
  color: 'black',
  marginBottom: '8px',
});

const Subtitle = styled('h6')({
  textAlign: 'start',
  marginTop: '0px',
});

export default function HeaderBar() {
  return (
    <HeaderContainer>
      <Title>Test Sky Durable - RETURNSKALOGTEST123</Title>
      <Subtitle>Product</Subtitle>
      <FormTabs />
    </HeaderContainer>
  );
}
