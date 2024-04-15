import React from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import Link from 'next/link'

type Props = {}

const Header = (props: Props) => {
  return (
      <Card className='flex w-full max-w-screen-sm justify-between items-center p-4 sticky top-0'>
        <h4 className='font-extrabold'>Auction Hub</h4>
        <div className='flex items-center gap-2'>
          <Button className='hidden sm:block' variant='outline' asChild>
            <Link href='/auth/register'>Create Account</Link>
          </Button>
          <Button asChild>
            <Link href='/auth/login'>Log In</Link>
          </Button>
        </div>
      </Card>
  )
}

export default Header