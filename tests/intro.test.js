import {describe , test , it , expect} from "vitest"
import { fizzBuzz, max ,avg,factorial } from "../src/intro";


//toBe() is for premetive values number , string , booleans
describe("max",()=>{
    it('should return the first argument if its greater',()=>{
        //Arrange
        // const a = 2;
        // const b = 3;
    
        // //Act
        // const result = max(a,b);
    
        // //Assert
        // expect(result).toBe(2);
    
        expect(max(2,1)).toBe(2);

    });

    it('Should return 2nd argument if its greater',()=>{
        expect(max(3,4)).toBe(4);
    });
    it('Should return 1st argument if both are equal',()=>{
        expect(max(3,3)).toBe(3);
    });

})

describe("FizzBuzz",()=>{
    it("Should return FizzBuzz if arg is divisible by 3 and 5",()=>{
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    })
    it("Should return Fizz if arg is divisible by 3 only",()=>{
        expect(fizzBuzz(9)).toBe("Fizz");
    })
    it("Should return Buzz if arg is divisible by 5 only",()=>{
        expect(fizzBuzz(10)).toBe("Buzz");
    })
})

describe("average",()=>{
    it("Should return NaN if no value is passed",()=>{
        expect(avg([])).toBe(NaN);
    })
    it("Should return avg if array of number is passed",()=>{
        expect(avg([1,2,5,2,0])).toBe(2);
    })

})


describe("factorial",()=>{
    it("if 0 is passed then answer will be 0",()=>{
        expect(factorial(0)).toBe(1);
    })
    it("if is equal to 1 is passed then answer will be its factorial",()=>{
        expect(factorial(1)).toBe(1);
    })
    it("if it is greater than 1 then answer will be its factorial",()=>{
        expect(factorial(3)).toBe(6);
    })
    it("if les than 0 is passed then answer will be invalid input",()=>{
        expect(factorial(-2)).toBe("invalid");
    })
})