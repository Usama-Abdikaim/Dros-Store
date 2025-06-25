import { signOut } from '@/auth';

import { Button } from '@/components/ui/button';

import React from 'react'

const MyProfile = () => {
  return (
    <div>
        <form action={async () => {
            "use server";
            
            await signOut();
             
            
        }}
        className='mb-10'
        >
            
            <Button>Logout</Button>
        </form>
        
      
    </div>
  )
}

export default MyProfile;
