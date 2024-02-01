import { getUUID } from "../../src/plugins";

describe('plugins/get-id.plugin.ts',()=>{

    test('getUUID should return a UUID',()=>{

        const uuid = getUUID();

        // Para probar el formato de uuid
        // console.log(uuid)

        expect(typeof uuid).toBe('string')
        expect(uuid.length).toBe(36)


    })
})