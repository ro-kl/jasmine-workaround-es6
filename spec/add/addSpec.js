import { addTwoNumbers } from '../../main';

describe('test add functionality', function(){
    it('test add positive numbers', function() {
        let addedNumbers = addTwoNumbers(4, 5);
        expect(addedNumbers).toBe(9);    
    })
    it('test add positive and negative number', function() {
        let addedNumbers = addTwoNumbers(-2, 5);
        expect(addedNumbers).toBe(3);    
    })
    it('test add two negative numbers', function() {
        let addedNumbers = addTwoNumbers(-5, -2);
        expect(addedNumbers).toBe(-7);    
    })
})