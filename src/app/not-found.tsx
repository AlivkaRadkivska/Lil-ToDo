import Link from 'next/link';
import { Button } from '@/components/button';

export default async function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen gap-5">
      <p>Error 404 | There is no such a page</p>
      <Button>
        <Link href="/">To home page</Link>
      </Button>
    </div>
  );
}
