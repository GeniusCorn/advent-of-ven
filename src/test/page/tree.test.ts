import { render, type RenderResult } from '@testing-library/vue'
import tree from '@/pages/tree.vue'

function view(): RenderResult {
  const view = render(tree)

  return view
}

it('should be rendered', async () => {
  const { findByText } = view()

  const header = await findByText('Xmas Tree')

  expect(header).toBeTruthy()
})
