/// <reference types="cypress" />

describe(' CyPress_Shravan_DemoQA', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    //////////////////////////////////////Shravan///////////////////////////////////////////////////////////////////////////////
    it('Links test',function(){
    cy.visit('https://demoqa.com/elements')
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-5 > .text').click();
    cy.get('#created').click();
    cy.get('#linkResponse').should('have.text', 'Link has responded with staus 201 and status text Created');
    })
    
    
    it('fileupload test',function(){
       // cy.visit('https://demoqa.com/elements');
        cy.visit('https://demoqa.com/upload-download');
       
        const attachfile='Test.txt';
        cy.get('#uploadFile').attachFile(attachfile);
        cy.get('#uploadedFilePath').contains('C:');
       
       
        })
      it('filedpwnload test',function(){
        // cy.visit('https://demoqa.com/elements');
         cy.visit('https://demoqa.com/upload-download');
         cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg');
       
     
       })
       it('Drag and drop test',function(){
        cy.visit('https://demoqa.com/droppable');
       
        const dataTransfer = new DataTransfer();
    
    
        cy.get('#draggable').trigger('dragstart', {
          dataTransfer
        });
    
    
        cy.get('#droppable').trigger('drop', {
          dataTransfer
        });
       })
    it('Slide Test',function(){
      cy.visit('https://demoqa.com/elements');
      cy.contains('Elements').click();
      cy.contains('Widgets').click();
      cy.contains('Slide').click();
      cy.get('.range-slider')
          .invoke("val",50)
          .trigger("change")
    
    
    })
    describe(' CyPress_Tanveer_ DemoQA', () => {
    //////////////////////////////////////Tanveer///////////////////////////////////////////////////////////////////////////////
    it('textbox validation', () => {
      cy.visit("https://demoqa.com/text-box")
      //cy.get(':nth-child(1) > :nth-child(1) > .card-body').click()
      //cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()
      cy.clock().tick(4000)
      cy.get('#userName').type('Adam')
      cy.get('#userName').should('have.value', 'Adam')
      cy.get('#userName').clear().type('Kumar')
      cy.get('#userName').should('have.value', 'Kumar')
    
    
    })
    
    
    it('Mail id validation',() =>{
      cy.visit("https://demoqa.com/text-box")
      cy.get('#userEmail').click()
      cy.get('#userEmail').should('have.focus')
      cy.get('#userEmail').type('abc@gmail.com')
      cy.get('#userEmail').should(($userEmail)=> {
        const email = $userEmail.val()
        expect(email).to.include('@')
      })
    })
     
    it('Checkbox', () => {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      cy.get('#checkBoxOption1').check().should('be.checked')
      cy.get('#checkBoxOption1').uncheck()
      cy.get('#checkBoxOption1').should('not.be.checked')
    })
    
    
    it('static dropdown', ()=> {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      cy.get('select').select('option2')
      cy.get('select').should('have.value','option2')
    })
    
    
    it('dynamic dropdown', () => {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      cy.get('#autocomplete').type('ind')
      cy.get('.ui-menu-item div').each(($e1, index, $list) => {
    
    
        if($e1.text()==="India")
        {
            $e1.click()
        }
      })
      cy.get('#autocomplete').should('have.value','India')
    })
    })
    describe(' CyPress_Nisha_DemoQA', () => {
    //////////////////////////////////////Nisha///////////////////////////////////////////////////////////////////////////////
    it('Alert 1', () => {
      cy.visit('https://demoqa.com/')
      cy.get(':nth-child(3) > :nth-child(1) > .card-body > h5').click()
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-1').click()
      cy.get('#alertButton').click()
      cy.on('window:alert',function(text){
           expect(text).to.eql('You clicked a button')
           expect(text).to.contains('You clicked a button')
      })
    })
    it('Alert 2', () => {
      cy.visit('https://demoqa.com/')
      cy.get(':nth-child(3) > :nth-child(1) > .card-body > h5').click()
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-1').click()
      cy.get('#timerAlertButton',{timeout:5000}).click()
      cy.on('window:alert',function(text){
           expect(text).to.eql('This alert appeared after 5 seconds')
           expect(text).to.contains('This alert appeared after 5 seconds')
      })
    })
    it('New Tab test case', () => {
      cy.visit('https://demoqa.com/')
      cy.get(':nth-child(3) > :nth-child(1) > .card-body > h5').click()
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-0').click()
      cy.window().then(win => {
          cy.stub(win, 'open').as('open')
      })
      cy.get('#tabButton').click()
      cy.window().its('open').should('be.called');
    })
    it('Sample Iframes 1', function () {
      cy.visit('https://demoqa.com/')
      cy.get(':nth-child(3) > :nth-child(1) > .card-body > h5').click()
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-2').click()
      cy.get('#frame1')
          .should('be.visible')
          .then(($iframe) => {
              const $body = $iframe.contents().find('body')
    
    
          })
    })
    it('Nested Iframes', function () {
      cy.visit('https://demoqa.com/')
      cy.get(':nth-child(3) > :nth-child(1) > .card-body > h5').click()
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-3').click()
      cy.get('#frame1')
          .should('be.visible')
          .its('0.contentDocument')
          .its('body')
    })
    })
    })
    