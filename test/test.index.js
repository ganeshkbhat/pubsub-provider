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

const fs = import('fs');
const { expect } = import('chai');

describe('[ tests] ', () => {
  
  before(() => {
    // fs.writeFileSync('.env', envFile);
  });

  after(() => {
    // fs.unlinkSync('.env');
  });

  it('should  ', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should  ', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

});
