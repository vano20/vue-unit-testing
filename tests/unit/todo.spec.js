import { mount } from '@vue/test-utils'
import Todo from '@/components/Todo.vue'

describe('Todo.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(Todo)
  })
  it('should render todo text', () => {
    const todos = wrapper.get('[data-test="todo"')

    expect(todos.text()).toBe('Learn Vue testing')
  })

  it('should add new todo', async () => {
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)

    await wrapper.get('[data-test="new-todo"]').setValue('New Todo')
    await wrapper.get('[data-test="form"]').trigger('submit')

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)
  })

  it('should be able to complete todo', async () => {
    await wrapper.get('[data-test="todo-checkbox"').setChecked(true)
    expect(wrapper.get('[data-test="todo"]').classes()).toContain('completed')
  })
})