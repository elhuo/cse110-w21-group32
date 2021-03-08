
describe('Home Page Tests', ()=>{
    beforeEach(() => {
        cy.clock()
        cy.visit('http://127.0.0.1:5500/source/index.html')
    })

    it('Start and Stop button timer interaction', ()=> {
        cy.get('#stop-button').should('have.attr', 'disabled')
        cy.get('#start-button').should('not.have.attr', 'disabled')

        cy.get('#start-button').click()
        cy.get('#start-button').should('have.attr', 'disabled')
        cy.get('#stop-button').should('not.have.attr', 'disabled')

        cy.get('body').should('have.css', 'background-color', "rgb(0, 135, 189)")

        cy.get('#countdown').should('have.text', '24:59')

        cy.get('#stop-button').click()
        cy.get('#stop-button').should('have.attr', 'disabled')
        cy.get('#start-button').should('not.have.attr', 'disabled')

        cy.get('#countdown').should('have.text', '25:00')
    })

    //must manually hover over help button in cypress to pass
    it('Help button hover', ()=>{
        cy.get('#help-button').should('have.css', 'filter', 'opacity(0.6)')
    })

    it('Background Color test', ()=>{
        cy.get('body').should('have.css', 'background-color', "rgb(0, 135, 189)")
        cy.get('#start-button').click()
        cy.tick(1500000)
        cy.get('body').should('have.css', 'background-color', "rgb(51, 51, 153)")
        cy.tick(300000)
        cy.get('body').should('have.css', 'background-color', "rgb(0, 135, 189)")
        cy.tick(1500000)
        cy.get('body').should('have.css', 'background-color', "rgb(51, 51, 153)")
        cy.tick(300000)
        cy.get('body').should('have.css', 'background-color', "rgb(0, 135, 189)")
        cy.tick(1500000)
        cy.get('body').should('have.css', 'background-color', "rgb(51, 51, 153)")
        cy.tick(300000)
        cy.get('body').should('have.css', 'background-color', "rgb(0, 135, 189)")
        cy.tick(1500000)
        cy.get('body').should('have.css', 'background-color', "rgb(102, 51, 153)")
        cy.tick(900000)
        cy.get('body').should('have.css', 'background-color', "rgb(0, 135, 189)")
    })

    it('Tabs test + Ice Cube test + Number of Pomos test', ()=>{
        cy.get('#start-button').click()
        cy.get('#pomo-tab').should('have.class', 'tab-active')
        cy.get('#short-break-tab').should('not.have.class', 'tab-active')
        cy.get('#long-break-tab').should('not.have.class', 'tab-active')
        cy.get('#pomo-count-1').should('have.css', 'filter', 'opacity(0.6)')
        cy.get('#pomo-count-2').should('have.css', 'filter', 'opacity(0.6)')
        cy.get('#pomo-count-3').should('have.css', 'filter', 'opacity(0.6)')
        cy.get('#pomo-count-4').should('have.css', 'filter', 'opacity(0.6)')

        cy.tick(1500000)
        cy.get('#pomo-tab').should('not.have.class', 'tab-active')
        cy.get('#short-break-tab').should('have.class', 'tab-active')
        cy.get('#long-break-tab').should('not.have.class', 'tab-active')
        cy.get('#pomo-count-1').should('have.css', 'filter', 'brightness(1)')
        cy.get('#pomo-count-2').should('have.css', 'filter', 'opacity(0.6)')
        cy.get('#pomo-count-3').should('have.css', 'filter', 'opacity(0.6)')
        cy.get('#pomo-count-4').should('have.css', 'filter', 'opacity(0.6)')
        cy.get('#completed-pomos').should('have.text', 'Pomos: 1')

        cy.tick(300000)
        cy.get('#pomo-tab').should('have.class', 'tab-active')
        cy.get('#short-break-tab').should('not.have.class', 'tab-active')
        cy.get('#long-break-tab').should('not.have.class', 'tab-active')
        cy.get('#pomo-count-1').should('have.css', 'filter', 'brightness(1)')
        cy.get('#pomo-count-2').should('have.css', 'filter', 'opacity(0.6)')
        cy.get('#pomo-count-3').should('have.css', 'filter', 'opacity(0.6)')
        cy.get('#pomo-count-4').should('have.css', 'filter', 'opacity(0.6)')

        cy.tick(1500000)
        cy.get('#pomo-tab').should('not.have.class', 'tab-active')
        cy.get('#short-break-tab').should('have.class', 'tab-active')
        cy.get('#long-break-tab').should('not.have.class', 'tab-active')
        cy.get('#pomo-count-1').should('have.css', 'filter', 'brightness(1)')
        cy.get('#pomo-count-2').should('have.css', 'filter', 'brightness(1)')
        cy.get('#pomo-count-3').should('have.css', 'filter', 'opacity(0.6)')
        cy.get('#pomo-count-4').should('have.css', 'filter', 'opacity(0.6)')
        cy.get('#completed-pomos').should('have.text', 'Pomos: 2')

        cy.tick(300000)
        cy.get('#pomo-tab').should('have.class', 'tab-active')
        cy.get('#short-break-tab').should('not.have.class', 'tab-active')
        cy.get('#long-break-tab').should('not.have.class', 'tab-active')
        cy.get('#pomo-count-1').should('have.css', 'filter', 'brightness(1)')
        cy.get('#pomo-count-2').should('have.css', 'filter', 'brightness(1)')
        cy.get('#pomo-count-3').should('have.css', 'filter', 'opacity(0.6)')
        cy.get('#pomo-count-4').should('have.css', 'filter', 'opacity(0.6)')

        cy.tick(1500000)
        cy.get('#pomo-tab').should('not.have.class', 'tab-active')
        cy.get('#short-break-tab').should('have.class', 'tab-active')
        cy.get('#long-break-tab').should('not.have.class', 'tab-active')
        cy.get('#pomo-count-1').should('have.css', 'filter', 'brightness(1)')
        cy.get('#pomo-count-2').should('have.css', 'filter', 'brightness(1)')
        cy.get('#pomo-count-3').should('have.css', 'filter', 'brightness(1)')
        cy.get('#pomo-count-4').should('have.css', 'filter', 'opacity(0.6)')
        cy.get('#completed-pomos').should('have.text', 'Pomos: 3')

        cy.tick(300000)
        cy.get('#pomo-tab').should('have.class', 'tab-active')
        cy.get('#short-break-tab').should('not.have.class', 'tab-active')
        cy.get('#long-break-tab').should('not.have.class', 'tab-active')
        cy.get('#pomo-count-1').should('have.css', 'filter', 'brightness(1)')
        cy.get('#pomo-count-2').should('have.css', 'filter', 'brightness(1)')
        cy.get('#pomo-count-3').should('have.css', 'filter', 'brightness(1)')
        cy.get('#pomo-count-4').should('have.css', 'filter', 'opacity(0.6)')

        cy.tick(1500000)
        cy.get('#pomo-tab').should('not.have.class', 'tab-active')
        cy.get('#short-break-tab').should('not.have.class', 'tab-active')
        cy.get('#long-break-tab').should('have.class', 'tab-active')
        cy.get('#pomo-count-1').should('have.css', 'filter', 'brightness(1)')
        cy.get('#pomo-count-2').should('have.css', 'filter', 'brightness(1)')
        cy.get('#pomo-count-3').should('have.css', 'filter', 'brightness(1)')
        cy.get('#pomo-count-4').should('have.css', 'filter', 'brightness(1)')
        cy.get('#completed-pomos').should('have.text', 'Pomos: 4')

        cy.tick(900000)
        cy.get('#pomo-tab').should('have.class', 'tab-active')
        cy.get('#short-break-tab').should('not.have.class', 'tab-active')
        cy.get('#long-break-tab').should('not.have.class', 'tab-active')
        cy.get('#pomo-count-1').should('have.css', 'filter', 'opacity(0.6)')
        cy.get('#pomo-count-2').should('have.css', 'filter', 'opacity(0.6)')
        cy.get('#pomo-count-3').should('have.css', 'filter', 'opacity(0.6)')
        cy.get('#pomo-count-4').should('have.css', 'filter', 'opacity(0.6)')
        cy.get('#completed-pomos').should('have.text', 'Pomos: 4')
    })

})

describe('Settings Functions Tests', ()=>{
    beforeEach(() => {
        cy.clock()
        cy.visit('http://127.0.0.1:5500/source/index.html')
    })

    it('Settings button onclick', ()=> {
        cy.get('#settings-button').click()
        cy.get('#settings-modal').should('have.class', 'modal-show')
    })

    it('Settings shadow click', ()=> {
        cy.get('#settings-button').click()
        cy.get('#shadow').click({force: true})
        cy.get('#settings-modal').should('have.class', 'modal')
    })

    it('Settings exit button onclick', ()=> {
        cy.get('#settings-button').click()
        cy.get('#settings-close').click()
        cy.get('#settings-modal').should('have.class', 'modal')
    })


    it('Pomo/Break Selection Disabled tests', ()=> {
        cy.get('#start-button').click()
        cy.get('#settings-button').click()
        cy.get('#pomo-duration').should('have.attr', 'disabled')
        cy.get('#short-break-duration').should('have.attr', 'disabled')
        cy.get('#long-break-duration').should('have.attr', 'disabled')
        cy.get('#settings-close').click()

        cy.get('#stop-button').click()
        cy.get('#settings-button').click()
        cy.get('#pomo-duration').should('not.have.attr', 'disabled')
        cy.get('#short-break-duration').should('not.have.attr', 'disabled')
        cy.get('#long-break-duration').should('not.have.attr', 'disabled')
    })

    it('Pomo/Break Selection Application tests', ()=>{
        cy.get('#settings-button').click()
        cy.get('#pomo-duration').select('20:00')
        cy.get('#short-break-duration').select('7:00')
        cy.get('#long-break-duration').select('20:00')
        cy.get('#settings-close').click()

        cy.get('#countdown').should('have.text', '20:00')
        cy.get('#start-button').click()

        cy.tick(1200000)
        cy.get('#countdown').should('have.text', '06:59')

        cy.tick(420000)
        cy.get('#countdown').should('have.text', '19:59')
    })

    it('Alert sound choosing', ()=> {
        cy.get('#settings-button').click()
        cy.get('#volume-sound').then(function($el){
            expect($el).to.have.value('glass-pour')
        })
        cy.get('#pomo-sound').should('have.attr', 'src').should('include','./audio/glass-pour.mp3')

        cy.get('#volume-sound').select('bottle-clank')
        cy.get('#volume-sound').then(function($el){
            expect($el).to.have.value('bottle-clank')
        })
        cy.get('#pomo-sound').should('have.attr', 'src').should('include', './audio/bottle-clank.mp3')

        cy.get('#volume-sound').select('glass-break')
        cy.get('#pomo-sound').should('have.attr', 'src').should('include', './audio/glass-break.mp3')
        cy.get('#volume-sound').select('glass-ping')
        cy.get('#pomo-sound').should('have.attr', 'src').should('include', './audio/glass-ping.mp3')
        cy.get('#volume-sound').select('wind-chimes-1')
        cy.get('#pomo-sound').should('have.attr', 'src').should('include', './audio/wind-chimes-1.mp3')
        cy.get('#volume-sound').select('wind-chimes-2')
        cy.get('#pomo-sound').should('have.attr', 'src').should('include', './audio/wind-chimes-2.mp3')
        cy.get('#volume-sound').select('wind-chimes-3')
        cy.get('#pomo-sound').should('have.attr', 'src').should('include', './audio/wind-chimes-3.mp3')
        cy.get('#volume-sound').select('ice-cream-1')
        cy.get('#pomo-sound').should('have.attr', 'src').should('include', './audio/ice-cream-1.mp3')
        cy.get('#volume-sound').select('ice-cream-2')
        cy.get('#pomo-sound').should('have.attr', 'src').should('include', './audio/ice-cream-2.mp3')
        
    })
    
    //no real way to test if sound is playing on cypress
    it('Play Me! button onclick', ()=> {
        cy.get('#settings-button').click()
        cy.get('#play-sound').click()
        cy.get('#pomo-sound').should('have.attr', 'src').should('include', './audio/glass-pour.mp3')
    })

    it('Sound bar change', ()=>{
        cy.get('#settings-button').click()
        cy.get('#volume-image').should('have.attr', 'src').should('include', './img/volume-level-2.svg')

        cy.get('#volume-slider').invoke('val', 67).trigger('input')
        cy.get('#volume-image').should('have.attr', 'src').should('include', './img/volume-level-3.svg')

        cy.get('#volume-slider').invoke('val', 33).trigger('input')
        cy.get('#volume-image').should('have.attr', 'src').should('include', './img/volume-level-1.svg')
    })


})

describe('Help Page Tests', ()=>{
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/source/index.html')
    })

    it('Help button onclick', ()=> {
        cy.get('#help-button').click()
        cy.get('#help-modal').should('have.class', 'modal-show')
    })

    it('Help shadow click', ()=> {
        cy.get('#help-button').click()
        cy.get('#shadow').click({force: true})
        cy.get('#help-modal').should('have.class', 'modal')
    })

    it('Help page exit button onclick', ()=> {
        cy.get('#help-button').click()
        cy.get('#help-close').click()
        cy.get('#help-modal').should('have.class', 'modal')
    })

})
