
describe('El usuario puede buscar mediante “Google Search”',function(){
   
    it('ir a google.com” ',function(){
        cy.visit('https://www.google.com/')
    })
    
   it('Buscar “The name of the wind” ',function(){
    cy.get('[aria-label="Buscar"]').type("The name of the wind")
  })
  it('click a Buscar en Buscar con Google',function(){
    cy.get('input').contains('Buscar con Google').click()
  })
  it('Ir al primer resultado de la busqueda',function(){
      cy.get('#tads > div:nth-child(3) > div > div > div > a > div').contains('The Name of the Wind - Patrick Rothfuss').click()
  })
})


describe('Usuario puede buscar mediante sugerencias',function(){
    it('ir a google.com” ',function(){
        cy.visit('https://www.google.com/')
    })

      it('Tipeo “The name of the w” dentro del campo de búsqueda ',function(){
          const btnBuscar = cy.get('[aria-label="Buscar"]')

          btnBuscar.type("The name of the W")
      })
      it('Clickeo en la primer opción sugerida',function(){
        cy.get('ul li:first').click()
      })
      it('Ir al primer resultado de la busqueda',function(){
        cy.get('#tads > div:nth-child(3) > div > div > div > a > div').contains('The Name of the Wind - Patrick Rothfuss').click()
    
    })

})