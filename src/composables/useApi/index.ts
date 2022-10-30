import axiosService from "./axiosService";

/** spotify */
export async function api_spotifyAlbumsGet() {

  const  _data = await axiosService.get<IReqresUsers>("https://reqres.in/api/users")


  return _data as IAPI<IReqresUsers>
}


interface IAPI<T> {
  status: number
  data: T
}

/** */
interface IReqresUsers{
  page: number
  per_page: number
  total: number
  total_pages: number
  data: {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
  }[]
  support: {
    url: string
    text: string

  }
}