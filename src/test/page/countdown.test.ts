import { type RenderResult, render } from '@testing-library/vue'
import countdown from '@/pages/countdown.vue'

function view(): RenderResult {
  const view = render(countdown)
  return view
}

it('should be rendered', async () => {
  const { findByText } = view()

  const header = await findByText('Xmas Countdown')

  expect(header).toBeTruthy()
})

it('should render countdown ', async () => {
  const { findByTestId } = view()

  const days = await findByTestId('days')
  const hours = await findByTestId('hours')
  const minutes = await findByTestId('minutes')
  const seconds = await findByTestId('seconds')

  expect(days).toBeTruthy()
  expect(hours).toBeTruthy()
  expect(minutes).toBeTruthy()
  expect(seconds).toBeTruthy()
})
