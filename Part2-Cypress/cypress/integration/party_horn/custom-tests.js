describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });
  
  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  it('Volume of the <audio> element changed when the value of our slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Image and sound sources change when selecting the party horn button', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#sound-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
  });

  it('Volume image changes from lvl 3 to lvl 2 on 66 threshold', () => {
    cy.get('#volume-number').clear().type('67');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
    cy.get('#volume-number').clear().type('66');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
  });

  it('Volume image changes from lvl 2 to lvl 1 on 33 threshold', () => {
    cy.get('#volume-number').clear().type('34');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
    cy.get('#volume-number').clear().type('33');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
  });
    
  it('Volume image changes from lvl 1 to lvl 0 when there is no volume', () => {
    cy.get('#volume-number').clear().type('1');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });
  });

  it('Honk button is disabled when textbox input is empty or non-number', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('disabled');
    });
    cy.get('#volume-number').clear().type('non-number');
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('disabled');
    });
  });

  it('Error is shown when a number outside given range is inputted', () => {
    cy.get('#volume-number').clear().type('101');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.match(':invalid');
    });

    cy.get('#volume-number').clear().type('-1');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.match(':invalid');
    });
  });
  
});
