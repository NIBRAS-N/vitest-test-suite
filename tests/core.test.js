import {it,expect,describe} from 'vitest';
import { calculateDiscount, getCoupons , isPriceInRange, validateUserInput,isValidUsername, canDrive} from '../src/core';
// toEqual() -> to compare between object we need to use 

// toBeDefined() -> asserts that the value is not equal to undefined.Useful use case would be to check if function returned anything.

//
describe('test suite',()=>{
    it('test case of toMatch with string',()=>{
        const result = "Hello NI";
        expect(result).toMatch(/NI/);
    })
    it('test case  of toBeDefined',()=>{
        const result = [1,2,3,4];
        expect(result).toBeDefined();
    })
    it('test case  of toEqual',()=>{
        const result = [1,2,3,4];
        expect(result).toEqual([1,2,3,4]);
        expect(result).toEqual(expect.arrayContaining([1,4,3,2]));
    })
    it('test case  of toEqual+arrayContaining',()=>{
        const result = [1,2,3,4];
        
        expect(result).toEqual(expect.arrayContaining([1,4,3,2]));
    })

    it("object testing",()=>{
        const result = {name:"lol",Id:2};
        expect(result).toMatchObject({name:"lol"});
        expect(result).toHaveProperty('Id');
        expect(typeof result.Id).toBe("number")
        
    })
    
})

describe("getCoupons",()=>{
    it("Return an araay which contains object with 2 property",()=>{
        const result = getCoupons();
        
        // expect(typeof result).toBe("array");
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBeGreaterThan(0);
        
        result.forEach((item)=>{
            const keys = Object.keys(item);
            expect(keys.length).toBe(2);
        })
        
        
        
    })

    it('should return a array with valid coupon code',()=>{
        const result = getCoupons();
        result.forEach((item)=>{
           
            expect(item).toHaveProperty('code');
            expect(typeof item.code).toBe("string");
            expect(item.code).toBeTruthy();// a string should be passed
        })
    })
    it('should return a array with valid discounts',()=>{
        const result = getCoupons();
        result.forEach((item)=>{
            expect(item).toHaveProperty('discount');
            expect(typeof item.discount).toBe("number");
            expect(item.discount).toBeGreaterThanOrEqual(0);
            expect(item.discount).toBeLessThanOrEqual(1);
        })
    })
})

describe("calculateDiscount",()=>{
    it("should return discount price if valid code is given",()=>{

        const result = calculateDiscount(400,"SAVE10");
        const result2 = calculateDiscount(400,"SAVE20");
    
        expect(typeof result).toBe("number");
        expect(result).toBe(360);
        expect(result2).toBe(320);
    })
    it("should return 'invalid price' if price is  not number",()=>{

        const result = calculateDiscount("90","SAVE10");
    
        expect(result).toMatch(/invalid/i);

    })
    it("should return 'Invalid price' if price is  negative",()=>{

        const result = calculateDiscount(-90,"SAVE10");
    
        expect(result).toMatch(/invalid/i);

    })
    it("should return 'Invalid discount code' if discount code is not string",()=>{

        const result = calculateDiscount(90,30);
    
        expect(result).toMatch(/invalid/i);

    })
    it("should handle invalid discount code",()=>{

        const result = calculateDiscount(90,"lol");
    
        expect(result).toBe(90);

    })
})


describe("input validation",()=>{
    it("validation confirmation on valid input",()=>{
        expect(validateUserInput("nibras",24)).toMatch(/successful/i);
    })

    it("invalid username if string is not send",()=>{
        expect(validateUserInput(12,24)).toMatch(/invalid/i);
    })

    it("invalid username if string length is less than 3",()=>{
        expect(validateUserInput("lo",24)).toMatch(/invalid/i);
    })

    it("invalid username if string length is less than 3",()=>{
        expect(validateUserInput("lo",24)).toMatch(/invalid/i);
    })
    it("invalid username if string length is more than 255",()=>{
        expect(validateUserInput("lo".repeat(255),24)).toMatch(/invalid/i);
    })
    it("invalid age if age is sent as string",()=>{
        expect(validateUserInput("lol","24")).toMatch(/invalid/i);
    })
    
    it("invalid age if age is less than 18",()=>{
        expect(validateUserInput("lol",16)).toMatch(/invalid/i);
    })
    it("invalid age and username ",()=>{
        expect(validateUserInput("l",0)).toMatch(/invalid username/i);
        expect(validateUserInput("l",0)).toMatch(/invalid age/i);
    })


})


describe("isPriceInRange",()=>{
    it("should return false when price is outside range",()=>{
        expect(isPriceInRange(-10,0,100)).toBe(false);
    })
    it("should return true when price is equal to the min or equal to the max",()=>{
        expect(isPriceInRange(0,0,100)).toBe(true);
        expect(isPriceInRange(100,0,100)).toBe(true);
    })
    it("should return true when price is in the range",()=>{
        expect(isPriceInRange(100,0,100)).toBe(true);
        
    })
})
describe("isValidUsername",()=>{
    let minLength = 5;
    let maxLength = 15;
    it("should return false when length is less than 5",()=>{
        expect(isValidUsername("l".repeat(minLength-1))).toBe(false);
    })

    it("should return false when length is more than 15",()=>{
        expect(isValidUsername("l".repeat(maxLength+1))).toBe(false);
    })


    it("should return true when length is equal to 5 and 15",()=>{
        expect(isValidUsername('l'.repeat(minLength))).toBe(true);
        expect(isValidUsername('l'.repeat(maxLength))).toBe(true);
    })
    it("should return true when price is in the range",()=>{
        expect(isValidUsername('lolololollol')).toBe(true);
        
    })
    it("should return false for invalid type",()=>{
        expect(isValidUsername(null)).toBe(false);
        expect(isValidUsername(undefined)).toBe(false);
        
    })
})

describe("canDrive",()=>{
    it('should return true if countrycode is valid and age is legal for driving',()=>{
        expect(canDrive(28,"US")).toBe(true);
    })
    it('should return invalid countrycode if country code is wrong',()=>{
        expect(canDrive(10,'UKK')).toMatch(/invalid/i);
    })
    it("should return false is age is not legale to drive",()=>{
        expect(canDrive(1,"UK")).toBe(false);
    })

})