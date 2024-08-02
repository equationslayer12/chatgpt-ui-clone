import { ChevronDownIcon, UploadIcon } from '@/components/icons';

export default function Home() {
  function Button(props: any) {
    return (
      <button
        className='p-2 leading-4 flex items-center text-neutral-400 text-lg rounded-md hover:bg-neutral-700'
        {...props}
      />
    );
  }

  function ProfilePicture(props: any) {
    return (
      <div className='aspect-square h-8 bg-white rounded-full' {...props}></div>
    );
  }

  return (
    <main className='flex min-h-screen'>
      <div id='sidebar' className='w-80 bg-neutral-900'>
        h
      </div>
      <div className='w-full flex flex-col'>
        <header className='flex justify-between pr-4 pl-2 py-2'>
          <Button>
            ChatGPT <ChevronDownIcon />
          </Button>
          <div className='flex items-center gap-4'>
            <Button>
              <UploadIcon />
            </Button>
            <ProfilePicture />
          </div>
        </header>
        <div id='chat'></div>
      </div>
    </main>
  );
}
