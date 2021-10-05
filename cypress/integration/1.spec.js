
describe('My First Tests', () => {
    it('demoqa.com/automation-practice-form positiveOnlyRequiredFieldsTest', () => {
      //открыть сайт
      cy.visit('https://demoqa.com/automation-practice-form')
      cy.title().should('contain', 'ToolsQA');

      //заполнение форм
      cy.get('#firstName').type('Evgeny');
      cy.get('#lastName').type('Usatenko');
      cy.get('#userNumber').type('1111111111');
      cy.contains('Male').click();
      cy.get('#submit').click();
      

      //Проверки
      cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form');
      cy.get('tbody > :nth-child(1) > :nth-child(2)').should('contain', 'Evgeny Usatenko');
      cy.get('tbody > :nth-child(3) > :nth-child(2)').should('contain', 'Male');
      cy.get('tbody > :nth-child(4) > :nth-child(2)').should('contain', '1111111111');

    })
  })
