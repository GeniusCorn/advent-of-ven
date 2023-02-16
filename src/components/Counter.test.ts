import { fireEvent, render } from '@testing-library/vue'
import Counter from './Counter.vue'

it('test', async () => {
  const { getByText } = render(Counter, {
    props: {
      count: 0
    }
  })

  getByText('count: 0')

  const button = getByText('add')

  await fireEvent.click(button)

  getByText('count: 1')
})
