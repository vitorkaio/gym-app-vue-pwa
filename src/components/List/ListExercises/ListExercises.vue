<template>
  <Container>
    
    <ListWrapper v-for="(exercise, index) in exercises" :key="index">
      <ListTitle>
        <Title>
          {{ exercise.exercise }}
        </Title>
      </ListTitle>
      <ListContent>
        <ItemContent>
          <v-icon color="primary" small>mdi-counter</v-icon>
          <ItemText>
            {{ exercise.number }}s de {{ exercise.repetitions }}
          </ItemText>
        </ItemContent>
        <ItemContent>
          <v-icon color="primary" small>mdi-weight</v-icon>
          <ItemText>
            {{ exercise.weight }}
          </ItemText>
        </ItemContent>
        <ItemContent>
          <v-icon color="primary" small>mdi-alarm</v-icon>
          <ItemText>
            {{ exercise.time }}
          </ItemText>
        </ItemContent>
      </ListContent>

      <ListFooter>
        <FooterItemText>
          {{ exercise.obs }}
        </FooterItemText>
      </ListFooter>
      
      <v-divider></v-divider>
    </ListWrapper>
    
  </Container>
</template>

<script>
import { Container, ListWrapper, ListTitle, Title, ListContent, ItemContent, 
  ItemText, ListFooter, FooterItemText } from './ListExercisesStyle';

export default {
  props: {
    dialogExercises: Boolean,
    exercises: Array
  },
  components: {
    Container,
    ListWrapper,
    ListTitle,
    Title,
    ListContent,
    ItemContent,
    ItemText,
    ListFooter,
    FooterItemText
  }
}
</script>

<style>

</style>