describe('API TESTING' , function(){
    it('GET - Cervecerias Lagunitas',function(){
        cy.request('GET','https://api.openbrewerydb.org/breweries/autocomplete')
    })
})

