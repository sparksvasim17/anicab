import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const Admin = createApi({
    reducerPath : 'Admin',
    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:6001/',
    }),
    endpoints : (builder)=>({
        postdata : builder.mutation({
            query : (data) =>({
                url :'root/path',
                method: 'post',
                body : data,
                headers:{
                    'Content-Type':'application/json'
                }
        })
    }),
        vendersignup : builder.mutation({
            query : (data) =>({
                url :'vender/signup',
                method: 'post',
                body : data,
                headers:{
                    'Content-Type':'application/json'
                }
        })
    }),
        venderlogin : builder.mutation({
            query : (data) =>({
                url :'vender/login',
                method: 'post',
                body : data,
                headers:{
                    'Content-Type':'application/json'
                }
        })
    }),

})

})

export const { 
  usePostdataMutation,
  useVendersignupMutation,
  useVenderloginMutation
} = Admin