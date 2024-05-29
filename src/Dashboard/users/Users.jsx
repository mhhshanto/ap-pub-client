import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function Users() {

    const { data, isLoading } = useQuery({
        queryKey: ['all-users-dashboard'],
        queryFn: async () => {
            const result = await axios.get('https://hasib-vai-backend.vercel.app/all-users')
            return result.data;
        }
    })

const dataSort = data?.sort((a, b) => {
    if (a.role === 'admin' && b.role !== 'admin') {
        return -1;
    } else if (a.role !== 'admin' && b.role === 'admin') {
        return 1;
    } else {
        return 0;
    }
});

    return (
        <div className='w-full'>
            { isLoading ? 'loading...' :
                dataSort.map((item,index)=> {
                    return (
                        <div className='border-b  my-3 p-3 w-full grid sm:grid-cols-2 grid-cols-1' key={index}>
                            <p><span className='font-semibold'>Email: </span> {item.email}</p>
                            <p className='sm:text-end lg:text-center sm:pr-5'><span className='font-semibold'>Role: </span> {item.role}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users