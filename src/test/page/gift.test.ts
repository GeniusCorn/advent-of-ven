import { render, fireEvent, type RenderResult } from '@testing-library/vue'
import gift from '@/pages/gift.vue'
import { faker } from '@faker-js/faker'

function view(): RenderResult {
  const view = render(gift)

  return view
}

it('should update the TO field', async () => {
  const { getByTestId } = view()

  const toField = getByTestId('toField')
  const toInput = getByTestId('toInput')

  const randomName = faker.name.fullName()

  await fireEvent.update(toInput, randomName)

  expect(toField.innerHTML).toBe(randomName)
})

it('should update the FROM field', async () => {
  const { getByTestId } = view()

  const fromField = getByTestId('fromField')
  const fromInput = getByTestId('fromInput')

  const randomName = faker.name.fullName()

  await fireEvent.update(fromInput, randomName)

  expect(fromField.innerHTML).toBe(randomName)
})
