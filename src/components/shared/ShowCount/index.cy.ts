import Index from './index.vue'
import { createPinia, setActivePinia } from 'pinia';
import { useCount } from '@/stores/count';

describe('<Index />', () => {
  let countStore: any;
  beforeEach(() => {
    setActivePinia(createPinia())
    countStore = useCount()
    cy.mount(Index)
  })

  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.get('div.TextCenterStyle').should('have.text', "0")
  })
  it('Acrescenta um', () => {
    countStore.increment()
    cy.get('div.TextCenterStyle').should('have.text', "1")
  })
  it('Decrementa um', () => {
    countStore.decrement()
    cy.get('div.TextCenterStyle').should('have.text', "0")
  })
  it('Limpa conteúdo', () => {
    countStore.increment()
    countStore.clear()
    cy.get('div.TextCenterStyle').should('have.text', "0")
  })
})
