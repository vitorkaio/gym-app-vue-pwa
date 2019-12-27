<template>
  <Container>
    <LeftIcon>
      <slot name='left'></slot>
    </LeftIcon>
    <CenterTitle>
      <Title>
        {{ title }}
      </Title>
    </CenterTitle>
    <RightIcons >
      <slot name='right'></slot>
    </RightIcons>
  </Container>
</template>

<script>
import { Container, CenterTitle, LeftIcon, RightIcons, Title } from './HeaderStyle';

export default {
  props: ['title'],
  components: {
    Container,
    CenterTitle,
    LeftIcon,
    RightIcons,
    Title
  }
}
</script>

<style>

</style>