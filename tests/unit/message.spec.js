import { mount } from '@vue/test-utils'
import Message from '@/components/Message.vue'

describe('Message.vue', () => {
  it('render the props.msg when passed', () => {
    const wrapper = mount(Message, {
      propsData: {
        msg: 'Hello'
      }
    })
    expect(wrapper.text()).toContain('Hello')
  })
})