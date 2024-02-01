import { characters } from "../../src/js-foundation/02-destructuring";

describe('js-foundation/02-destructuring', ()=>{

    test('character should contain Flash, Superman',()=>{

        //Expect es case sensitive
        expect(characters).toContain('Flash')
        expect(characters).toContain('Superman')


    })


    test('First character should be Flash, and second Superman',()=>{

        const [flash, superman] = characters

        expect(flash).toBe('Flash');
        expect(superman).toBe('Superman')


    })

})