import { cleanup } from '@testing-library/vue'
import { setupServer } from 'msw/node'

export const server = setupServer()

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => {
  cleanup
  server.resetHandlers()
})
