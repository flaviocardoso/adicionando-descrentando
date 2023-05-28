import Index from './index.vue'
import { createPinia, setActivePinia } from 'pinia';
import { useCount } from '@/stores/count';

describe('<Index />', () => {
  let useStore: any;
  beforeEach(() => {
    setActivePinia(createPinia())
    useStore = useCount();
    cy.mount(Index)
  })
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.get('button.success').should('have.text', 'Acrescente')
  })
  it('clique botão', () => {
    cy.get('button.success')
    .click()
    .then(() => {
        expect(1).to.equal(useStore.count)
    })
    .click()
    .then(() => {
      expect(2).to.equal(useStore.count)
    })
    .click()
    .then(() => {
      expect(3).to.equal(useStore.count)
    })

  })
})
