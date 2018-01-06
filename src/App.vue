<template>
  <div id="app">
   <h3>Got Jokes?</h3>
   <button class = "btn btn-primary" @click = "initJokes">Add 10 Jokes</button>

   <button class = "btn btn-info" @click = "addJoke">Add a Joke</button>
  <br>
  <span v-for="(type, index) in types" :key="index">
    <input type="checkbox" :value="type" checked v-model = "checkedTypes">
    <label for="">{{type}}</label>&nbsp;
  </span>
  <br>

  <div class="col-md-12">
    <Joke
    v-for = "(joke, index) in $store.state.jokes"
    v-show = "checkedTypes.includes(joke.type)"
    :joke="joke"
    :key="index"
    v-bind:index = "index"
    >
    </Joke>
  </div>
   
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Joke from './components/Joke.vue'

export default {
  data(){
    return {
      types:['general', 'knock-knock', 'programming'],
      checkedTypes:['general', 'knock-knock', 'programming']
    }
  },
  methods:mapActions([
    'initJokes',
    'addJoke'
  ]),
  components:{
    Joke
  }
}

</script>

<style>



</style>
