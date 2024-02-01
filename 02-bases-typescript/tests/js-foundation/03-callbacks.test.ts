import { getUserById } from "../../src/js-foundation/03-callbacks";

describe('js-foundation/03-callbacks',()=>{

    test('getUserById should return an error if user does not exist',()=>{
        const id = 10
        getUserById(id, (err, user)=>{

            expect(err).toBe(`User not found with id ${id}`)
            expect(user).toBeUndefined();
        });
    })
    test('getUserById should return John Doe and id 1',(done)=>{
        const id = 1
        // const name = 'John Doe'
        getUserById(id, (err, users)=>{
            expect(id).toBe(1)
            expect(users).toStrictEqual({
                id: 1,
                name: 'John Doe',
              });

            done();
        });
    })


})



