import Index from './index.vue'

describe('<Index />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Index, {
      props: {
        msg: "Titulo do texto"
      }
    })
    cy.get('div.titlemessage').should('have.text', "Titulo do texto")
  })
})
