import TODO from './TODO.vue'

describe('<TODO />', () => {

  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(TODO)
  })
  it('nome do titulo', () => {
    cy.mount(TODO)
    cy.get('header > h3').should('have.text', 'Lista TODO')
  })
})
