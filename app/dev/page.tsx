import { createClient } from 'next-sanity';
export default async function Dev() {
  return (
    <div className="h-screen bg-white flex flex-col">
      <div className="bg-secondary flex-grow"></div>
    </div>
  );
}
