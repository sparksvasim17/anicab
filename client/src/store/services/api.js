import {  createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const Api = createApi({
    reducerPath : 'Api',
    baseQuery : fetchBaseQuery({
        baseUrl: 'http://localhost:6001/',
    }),
    endpoints : (builder) => ({
        postForm  : builder.mutation({
            query : (data) =>({
                url:'user/signup',
                method:'POST',
                body :data,
                headers:{
                    'Content-Type':'application/json'
                }
            })
        }),
        login  : builder.mutation({
            query : (data) =>({
                url:'user/login',
                method:'POST',
                body :data,
                headers:{
                    'Content-Type':'application/json'
                }
            })
        }),
        contact : builder.mutation({
            query : (data) =>({
                url:'contact/contact',
                method:'POST',
                body :data,
                headers:{
                    'Content-Type':'application/json'
                }
            })
        }),
        match : builder.mutation({
            query : (data) =>({
                url:'root/matchpathed',
                method:'POST',
                body :data,
                headers:{
                    'Content-Type':'application/json'
                }
            })
        }),
    })
})

export const {
    usePostFormMutation,
    useLoginMutation,
    useContactMutation,
    useMatchMutation
} = Api