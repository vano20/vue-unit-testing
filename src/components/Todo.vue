<template>
  <div>
    <h1>The best to learn vue testing</h1>

    <div>
      <li v-for="todo in todos" :key="todo.id" :class="[todo.completed ? 'completed' : '']" data-test="todo">
        {{ todo.text }}
        <input type="checkbox" v-model="todo.completed" data-test="todo-checkbox" />
      </li>
    </div>
    <div>
      <form data-test="form" @submit.prevent="createTodo">
        <input type="text" data-test="new-todo" v-model="newTodo" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  data() {
    return {
      newTodo: '',
      todos: [
        {
          id: 1,
          text: 'Learn Vue testing',
          completed: false
        }
      ]
    }
  },
  methods: {
    createTodo() {
      this.todos.push({
        id: this.todos.length + 1,
        text: this.newTodo,
        completed: false
      })
      this.newTodo = ''
    }
  }
}
</script>
<style>
.completed {
  text-decoration: line-through;
}
</style>