import { getAge } from "../../src/plugins";

describe(`plugins/get-age.plugin.ts`,()=>{

    test('getAge()should return the age of a person', ()=>{

        const birthdate = '1985-10-21'
        const age = getAge(birthdate)


        expect(typeof age).toBe('number')


    } )


    test('getAge should return current Age', ()=>{
        const birthdate = '1985-10-21';
        const age = getAge(birthdate);

        const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear()


    })



    test('getAge() should return 0 years', ()=>{

        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995)

        const birthdate = '1995-10-21'

        const age = getAge(birthdate)
       
        // console.log({age})

        expect(age).toBe(0)

        // console.log({spy})


    } )



})