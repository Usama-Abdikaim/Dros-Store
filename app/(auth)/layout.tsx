import { auth } from '@/auth';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

const layout = async ({ children }: { children: ReactNode }) => {
  const  session = await auth();

  if (session) redirect("/");

  return (
    <main className='min-h-screen bg-gray-100 flex items-center justify-center p-4'> {/* Added styling here */}
      <div className='w-full max-w-md bg-white rounded-lg shadow-xl p-8 space-y-6'> {/* Added styling here */}
        <div className='flex flex-col items-center justify-center gap-3 mb-6'> {/* Adjusted margin for spacing */}
          <Image src="/icons/logo.svg" alt="logo" width={60} height={47} />
          <h1 className='text-2xl font-semibold text-gray-800'>DroStore</h1> {/* Larger, bolder text */}
        </div>
        <div>
          {children}
        </div>
      </div>
    </main>
  );
}

export default layout;