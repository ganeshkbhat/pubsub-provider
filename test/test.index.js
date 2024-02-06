/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: 
 * Install: npm i  --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/
 * File: 
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const fs = require('fs');
const { expect } = require('chai');

describe('[pubsub tests] Tests for single publishers', () => {

  before(() => {
    // fs.writeFileSync('.env', envFile);
  });

  after(() => {
    // fs.unlinkSync('.env');
  });

  it('should run and init event manager for publishers single emitter', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should run and add publisher for publishers single emitter', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should run and emit event and run listener for publishers single emitter', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should run and add listener for publishers single emitter', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should run and remove listener for publishers single emitter', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should run and off listener for publishers single emitter', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should run and remove all listener for publishers single emitter', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

});


describe('[pubsub tests] Tests for multiple publishers', () => {

  before(() => {
    // fs.writeFileSync('.env', envFile);
  });

  after(() => {
    // fs.unlinkSync('.env');
  });

  it('should run and init event manager for publishers multiple emitter', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should run and add publisher for publishers multiple emitter', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should run and add second publisher for publishers multiple emitter', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should run and init event managers for publishers multiple emitter', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should run and emit event and run listener for publishers multiple emitter', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should run and emit event from 2nd publisher and run listener for publishers multiple emitter', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should run and emit event from default publisher and run listener for publishers multiple emitter', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should run and remove publisher (and specific subscribers) for publishers multiple emitter', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should run and remove 2nd publisher (and specific subscribers) for publishers multiple emitter', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should run and remove all publisher (and subscribers) for publishers multiple emitter', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should run and add listener (common) for publishers multiple emitter', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should run and remove listener (common) for publishers multiple emitter', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should run and off listener (common) for publishers multiple emitter', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should run and remove all listeners (common) for publishers multiple emitter', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should run and add listener (specific publisher) for publishers multiple emitter', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should run and remove listener (specific publisher) for publishers multiple emitter', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should run and off listener (specific publisher) for publishers multiple emitter', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should run and remove all listeners (specific publisher) for publishers multiple emitter', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should run and add new event for publishers single emitter', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });
  
  it('should run and add new event for publishers multiple emitter', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should run and remove new event for publishers single emitter', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });
  
  it('should run and remove new event for publishers multiple emitter', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should run and off event for publishers single emitter', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });
  
  it('should run and off event for publishers multiple emitter', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should run and get Publisher', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should run and get Publishers', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });
  
  it('should run and get Subscriber', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });
  
  it('should run and get Subscribers', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });
  
  it('should run and get Event Contexts', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });
});
