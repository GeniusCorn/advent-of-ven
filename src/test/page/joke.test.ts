import { render, fireEvent, configure } from '@testing-library/vue'
import { rest } from 'msw'
import { server } from '@/test/setup'
import joke from '@/pages/joke.vue'

configure({ testIdAttribute: 'test' })

function wrapper() {
  const wrapper = render(joke)
  return wrapper
}

beforeEach(() => {
  server.use(
    rest.get('https://v2.jokeapi.dev/joke/christmas', (req, res, ctx) => {
      return res.once(
        ctx.json({
          setup: 'Foo setup',
          delivery: 'Bar delivery'
        })
      )
    }),
    rest.get('https://v2.jokeapi.dev/joke/christmas', (req, res, ctx) => {
      return res.once(
        ctx.json({
          setup: 'Foo setup 2',
          delivery: 'Bar delivery 2'
        })
      )
    })
  )
})

it('should show joke setup', async () => {
  const { findByText } = wrapper()

  expect(await findByText('Foo setup')).toBeTruthy()
})

it('should show delivery when clicking button', async () => {
  const { findByText, findByTestId } = wrapper()

  await fireEvent.click(await findByTestId('button'))

  expect(await findByText('Bar delivery')).toBeTruthy()
})

it('should show a new joke when clicking button', async () => {
  const { findByText, findByTestId } = wrapper()

  expect(await (await findByTestId('button')).innerHTML).toBe('Tell me')

  await fireEvent.click(await findByTestId('button'))

  expect(await (await findByTestId('button')).innerHTML).toBe('Another')

  await fireEvent.click(await findByTestId('button'))

  expect(await findByText('Foo setup 2')).toBeTruthy()
  expect(await findByText('Bar delivery 2')).toBeTruthy()
})
