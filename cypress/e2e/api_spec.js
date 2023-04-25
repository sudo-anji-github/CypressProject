describe('All api tests', function () {
    Cypress.config('baseUrl','https://reqres.in/api')
    it('GET the List of Users format 1', function () {
        cy.request('GET', '/users?page=2')
            .then((response) => {
                expect(response).to.have.property('status', 200);
                expect(response.status).to.equal(200);
                expect(response.body).not.to.be.null;
                expect(response.body).to.have.property('page', 2);
                expect(response.body.data).to.have.length(6)
            })
    })
    it('GET the list of users format 2', function () {
        cy.request('GET', '/users?page=2').as('user_list')
        cy.get('@user_list')
            .should((response) => {
                expect(response).to.have.property('status', 200);
                expect(response.status).to.equal(200);
                expect(response.body).not.to.be.null;
                expect(response.body).to.have.property('page', 2);
                expect(response.body.data).to.have.length(6)
            })
    })
    it('GET the list of users format 3', function () {
        cy.request({
            'method': 'GET',
            'url': '/users?page=2',
            headers: {
                'Content-Type': 'application/json'
            },
            auth: {
                'username': 'test',
                'password': 'pass'
            }
        }).then((response) => {
            expect(response).to.have.property('status', 200);
            expect(response.status).to.equal(200);
            expect(response.body).not.to.be.null;
            expect(response.body).to.have.property('page', 2);
            expect(response.body.data).to.have.length(6)
        })
    })
    it('Create the list of users format 1', function(){
        cy.request({
            'method': 'POST',
            'url': '/users',
            body:{
                "name": "Anji",
                "job": "software in QA automation"
            }
        }).then((response)=>{
            expect(response).to.have.property('status', 201);
            expect(response.status).to.equal(201);
            expect(response.body).not.to.be.null;
            expect(response.body).to.have.property('name', 'Anji');
        })
    })
    it('Create the list of users format 2', function(){
        const reqBody = {
            'name': 'Anji',
            'job': 'Software'
        };
        cy.request('POST','/users', reqBody)
        .then((response)=>{
            expect(response).to.have.property('status', 201);
            expect(response.status).to.equal(201);
            expect(response.body).not.to.be.null;
            expect(response.body).to.have.property('name', 'Anji');
        })
    })
    it('Update the user ', function(){
        cy.request({
            'method': 'PUT',
            'url': '/users/2',
            body:{
                "name": "Raju",
                "job": "software in QA automation"
            }
        }).then((response)=>{
            expect(response).to.have.property('status', 200);
            expect(response.status).to.equal(200);
            expect(response.body).not.to.be.null;
            expect(response.body).to.have.property('name', 'Raju');
        })
    })
    it('DELETE the user', function(){
        cy.request({
            'method': 'DELETE',
            'url': '/users/2'
        }).then((response)=>{
            expect(response).to.have.property('status', 204);
        })
    })
})
