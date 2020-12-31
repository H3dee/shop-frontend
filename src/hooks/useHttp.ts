import { useState } from 'react'

// interface IHttp {
//   loading: boolean
//   request<T>(): Promise<T>
// }

// type HttpRequest = (
//   url: string,
//   method: string,
//   body: object | null | string,
//   header: object
// ) => object

// export const useHttp: () => IHttp = () => {
//   const [loading, setLoading] = useState<boolean>(false)

//   const request = async (
//     url: string,
//     method: string = 'POST',
//     body: object | string | null = null,
//     header = {accept: "application/json"}
//   ) => {
//     setLoading(true)
//     try {  
//       if (body) body = JSON.stringify(body)
//       const response = await fetch(url, { method, body, header})
//       const data = await response.json()

//       if (!response.ok) {
//         throw new Error('Something went wrong during fetching data')
//       }

//       return data
//     } catch (err) {
//       setLoading(false)
//       console.log(err)
//     }
//   }

//   return { loading, request }
// }
