import { mount } from '@vue/test-utils'
import Nav from '@/components/Nav.vue'

describe('Message.vue', () => {
  it('render a profile link', () => {
    const wrapper = mount(Nav, {
      data() {
        return {
          isLoggedIn: true
        }
      }
    })
    const profile = wrapper.get('#profile')
    expect(profile.text()).toEqual('My Profile')
  })
  it('should not render a profile link', () => {
    const wrapper = mount(Nav, {
      data() {
        return {
          isLoggedIn: false
        }
      }
    })
    const profile = wrapper.find('#profile')
    expect(profile.exists()).toBe(false)
  })
})