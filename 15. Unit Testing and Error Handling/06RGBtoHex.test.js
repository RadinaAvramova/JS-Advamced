const expect = require('chai').expect;
const rgbToHexColor = require('../06rgbToHex');

describe('rgbToHex', function () {
    it('with non integer red, should throw Error', function() {
        //Arrange
        let red = {};
        let blue = 100;
        let green = 100;

        //Act
        let func = () =>  rgbToHexColor(red, green, blue);

        //Assert
        expect(func).to.throw(Error, 'Test', 'Failed assert cause error message didnt match ');

    })
})