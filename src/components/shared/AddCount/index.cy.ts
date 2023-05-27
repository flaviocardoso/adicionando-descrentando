import Index from './index.vue'
import { createPinia, setActivePinia } from 'pinia';

describe('<Index />', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Index)
  })
})
