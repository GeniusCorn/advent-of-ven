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

  it('router should push to joke when clicking the joke link', async () => {
    const jokeItem = view().getByText('Joke Generator')
    const push = vi.spyOn(router, 'push')

    await fireEvent.click(jokeItem)

    expect(push).toHaveBeenCalledOnce()
    expect(push).toHaveBeenCalledWith('/joke')
  })

  it('router should push to countdown when clicking countdown link', async () => {
    const countdownItem = view().getByText('Xmas Countdown')
    const push = vi.spyOn(router, 'push')

    await fireEvent.click(countdownItem)

    expect(push).toHaveBeenCalledOnce()
    expect(push).toHaveBeenCalledWith('/countdown')
  })

  it('router should push to tree when clicking tree link', async () => {
    const treeItem = view().getByText('Xmas Tree')
    const push = vi.spyOn(router, 'push')

    await fireEvent.click(treeItem)

    expect(push).toHaveBeenCalledOnce()
    expect(push).toHaveBeenCalledWith('/tree')
  })
})
