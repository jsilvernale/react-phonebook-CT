import { json } from "stream/consumers";

let token = '51b38cbe973741e359aec214890f8e06abca3d96ad002622'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://my-phonebook-codingtemple-js.herokuapp.com/api/contacts`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        
        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://my-phonebook-codingtemple-js.herokuapp.com/api/contacts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },

    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://my-phonebook-codingtemple-js.herokuapp.com/api/contacts/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        return await response.json()
    },

    delete: async(id:string) => {
        const response = await fetch(`https://my-phonebook-codingtemple-js.herokuapp.com/api/contacts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
        });
        return await response.json()
    }
}