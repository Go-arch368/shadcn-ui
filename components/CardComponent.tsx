import React from 'react'
import { Button } from './ui/button'
import { Card,CardContent,CardDescription,CardFooter,CardHeader, CardTitle } from './ui/card'
import { User } from 'lucide-react'
import Link from 'next/link'
const CardComponent = () => {
  return (
    <div className='p-5'>
      <Card className='w-[280px] '>
        <CardHeader>
            <CardTitle>Hello Gowtham</CardTitle>
            <CardDescription>What's Up! Whether everything is going fine and nice!</CardDescription>
        </CardHeader>
        <CardContent>
            <div>
                <User/>
            </div>
            <div>
                Yeah everything is nice and fine and working on next js authentication and hero and shadCn for resuable components!
            </div>

        </CardContent>
        <CardFooter>
            <Button>
                <Link href="/">
                That's It
                </Link>
               
            </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CardComponent
