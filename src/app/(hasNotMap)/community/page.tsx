import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/community/posts');

  return null;
}
