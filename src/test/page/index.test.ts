import { render, fireEvent } from '@testing-library/vue'
import index from '@/pages/index.vue'
import router from '@/router'

function wrapper() {
  const wrapper = render(index, {
    global: {
      plugins: [router]
    }
  })

  return wrapper
}

describe('index page', async () => {
  it('should be rendered', async () => {
    wrapper().getByText('Advent of Vue')
  })

  it('click the joke item link', async () => {
    const jokeItem = wrapper().getByText('Joke Generator')
    const push = vi.spyOn(router, 'push')

    await fireEvent.click(jokeItem)

    expect(push).toHaveBeenCalledOnce()
    expect(push).toHaveBeenCalledWith('/joke')
  })
})
