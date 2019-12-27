<template>
  <Container @click="select(data)">
    <Mark>
      <MarkInside />
    </Mark>
    <CenterComponent>
      <img :src="usersIcon" alt="Logo" width="33" height="33" />
      <Title>{{ data.username }}</Title>
    </CenterComponent>
    <RightComponent>
      <v-icon :size="25" :color="accent_color">mdi-arrow-right-thick</v-icon>
    </RightComponent>
  </Container>
</template>

<script>
import { Container, Mark, MarkInside, CenterComponent, RightComponent, Title } from './UsersStyles';
import { accent_color } from '@/components/styles/colors';
import usersIcon from '@/assets/users.svg';

export default {
 props: {
   data: Object,
   select: Function
 },
 components: {
   Container,
   Mark,
   MarkInside,
   CenterComponent,
   RightComponent,
   Title
 },
 computed: {
   accent_color() {
      return accent_color;
    },
    usersIcon() {
      return usersIcon
    }
 }
}
</script>

<style>

</style>