
import { Outlet } from 'react-router'
import { Card } from './Card'
import {Sidenav} from './sidenav'

export const Layout = () => {
  return (
    <div className='flex max-h-fit min-h-full bg-gradient-to-br from-blue-100 via-white to-pink-100 '>
        <div className='min-w-[12%]'>
            <Sidenav/>
        </div>
        <div className='flex flex-col min-w-[90%]'>
            <div className='h-fit'>
                <Card>
                    <Outlet/>
                </Card>
            </div>
        </div>
    </div>
  )
}
