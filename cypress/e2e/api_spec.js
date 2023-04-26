describe('All API cases-Positive validation', function(){

    it('GET the List of Users', function () {
        cy.request('GET', '/users?page=2')
            .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body).not.to.be.null;
                expect(response.body).to.have.property('page', 2);
                expect(response.body.data).to.have.length(6)
            })
    })

    it('GET the single User', function () {
        cy.request('GET', '/users/2')
            .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body).not.to.be.null;
                expect(response.body.data).to.have.property('first_name', 'Janet');
            })
    })
    
    it('Create new user', function(){
        cy.request({
            'method': 'POST',
            'url': '/users',
            body:{
                "name": "Anji",
                "job": "software in QA automation"
            }
        }).then((response)=>{
            expect(response.status).to.equal(201);
            expect(response.body).not.to.be.null;
            expect(response.body).to.have.property('name', 'Anji');
        })
    })

    it('Update the user whole data', function(){
        cy.request({
            'method': 'PUT',
            'url': '/users/2',
            body:{
                "name": "Raju",
                "job": "software engineer in Development"
            }
        }).then((response)=>{
            expect(response.status).to.equal(200);
            expect(response.body).not.to.be.null;
            expect(response.body).to.have.property('name', 'Raju');
        })
    })

    it('Update the user partial data', function(){
        cy.request({
            'method': 'PATCH',
            'url': '/users/2',
            body:{
                "name": "Ram",
                "job": "software engineer in Development"
            }
        }).then((response)=>{
            expect(response.status).to.equal(200);
            expect(response.body).not.to.be.null;
            expect(response.body).to.have.property('name', 'Ram');
        })
    })

    it('Delete the user', function(){
        cy.request({
            'method': 'DELETE',
            'url': '/users/2'
        }).then((response)=>{
            expect(response).to.have.property('status', 204);
        })
    })
})

describe('API cases- Negative validation' , function(){

    it('Register with new user data', function(){
        cy.request({
            'method': 'POST',
            'url': '/register',
            body:{
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            }
        }).then((response)=>{
            expect(response.status).to.equal(200);
            expect(response.body).not.to.be.null;
        })
    })

    it('Register the new user with invalid data entry', function(){
        cy.request({
            'method': 'POST',
            'url': '/register',
            body:{
                "email": "eve.holt@reqres.in"
            }
        }).then((response)=>{
            expect(response.status).to.equal(400);
            expect(response.body).not.to.be.null;
        })
    })


    it('Successful login api call', function(){
        cy.request({
            'method': 'POST',
            'url': '/login',
            body:{
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            }
        }).then((response)=>{
            expect(response.status).to.equal(200);
            expect(response.body).not.to.be.null;
        })
    })

    it('Un Successful login api call', function(){
        cy.request({
            'method': 'POST',
            'url': '/login',
            body:{
                "email": "eve.holt@reqres.in"
            }
        }).then((response)=>{
            expect(response.status).to.equal(400);
            expect(response.body).not.to.be.null;
        })
    })
})
