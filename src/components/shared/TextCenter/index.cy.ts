import Index from './index.vue'

describe('<Index />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Index, {
      slots: {
        default: "Algum texto"
      }
    })
    cy.get('div.TextCenterStyle').should('have.text', "Algum texto")
  })
})
