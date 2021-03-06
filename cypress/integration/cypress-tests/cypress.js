
describe('Home Page Tests', ()=>{
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/source/index.html');
    });

    it('Start and Stop button timer interaction', ()=> {
        cy.get('#stop-button').should('have.attr', 'disabled')
        cy.get('#start-button').should('not.have.attr', 'disabled')

        cy.get('#start-button').click();
        cy.get('#start-button').should('have.attr', 'disabled')
        cy.get('#stop-button').should('not.have.attr', 'disabled')

        cy.get('body').should('have.css', 'background-color', "rgb(0, 135, 189)")

        cy.get('#countdown').should('have.text', '24:59');

        cy.get('#stop-button').click();
        cy.get('#stop-button').should('have.attr', 'disabled')
        cy.get('#start-button').should('not.have.attr', 'disabled')

        cy.get('#countdown').should('have.text', '00:00');
    });

    //must manually hover over help button in cypress to pass
    it('Help button hover', ()=>{
        cy.get('#help-button').should('have.css', 'filter', 'brightness(0.8)');
    })

    it('Tabs test', ()=>{
        cy.get('#start-button').click();
        cy.get('#tab-wrapper').should('have.css', 'border-style', 'solid')
    })



})

describe('Settings Functions Tests', ()=>{
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/source/index.html');
    });

    it('Settings button onclick', ()=> {
        cy.get('#settings-button').click();
        cy.get('#settings-modal').should('have.class', 'modal-show')
    });

    it('Settings exit button onclick', ()=> {
        cy.get('#settings-button').click();
        cy.get('#settings-close').click();
        cy.get('#settings-modal').should('have.class', 'modal')
    })

    it('Alert sound choosing', ()=> {
        cy.get('#settings-button').click();
        cy.get('#volume-sound').then(function($el){
            expect($el).to.have.value('party-horn')
        })
        cy.get('#pomo-sound').should('have.attr', 'src').should('include','./audio/party-horn.mp3')

        cy.get('#volume-sound').select('air-horn')
        cy.get('#volume-sound').then(function($el){
            expect($el).to.have.value('air-horn')
        })
        cy.get('#pomo-sound').should('have.attr', 'src').should('include', './audio/air-horn.mp3')

    })
    
    //no real way to test if sound is playing on cypress
    it('Play Me! button onclick', ()=> {
        cy.get('#settings-button').click()
        cy.get('#play-sound').click();
        cy.get('#pomo-sound').should('have.attr', 'src').should('include', './audio/party-horn.mp3')
    })

    it('Sound bar change', ()=>{
        cy.get('#settings-button').click()
        cy.get('#volume-image').should('have.attr', 'src').should('include', './img/volume-level-2.svg')

        cy.get('#volume-slider').invoke('val', 67).trigger('click')
        cy.get('#volume-image').should('have.attr', 'src').should('include', './img/volume-level-3.svg')

        cy.get('#volume-slider').invoke('val', 33).trigger('click')
        cy.get('#volume-image').should('have.attr', 'src').should('include', './img/volume-level-1.svg')
    })


})

describe('Help Page Tests', ()=>{
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/source/index.html');
    });

    it('Help button onclick', ()=> {
        cy.get('#help-button').click();
        cy.get('#myModal').should('have.class', 'modal-show');
    });

    it('Help page exit button onclick', ()=> {
        cy.get('#help-button').click();
        cy.get('#help-close').click();
        cy.get('#myModal').should('have.class', 'modal');
    });

})
