import { render, fireEvent, type RenderResult } from '@testing-library/vue'
import index from '@/pages/index.vue'
import router from '@/router'

function view(): RenderResult {
  const view = render(index, {
    global: {
      plugins: [router]
    }
  })

  return view
}

describe('index page', async () => {
  it('should be rendered', async () => {
    view().getByText('Advent of Vue')
  })

  it('click the joke item link', async () => {
    const jokeItem = view().getByText('Joke Generator')
    const push = vi.spyOn(router, 'push')

    await fireEvent.click(jokeItem)

    expect(push).toHaveBeenCalledOnce()
    expect(push).toHaveBeenCalledWith('/joke')
  })
})
