import { JournalEntryModel } from '../../models/JournalModel';
import { blogPosts } from '../../utils/database';
import Image from 'next/image';
import icon from '../../public/milly-color.svg';

export default function Dev() {
  return (
    <div className="h-screen bg-white flex flex-col">
      <Image src={icon} alt="icon" className="bg-black"></Image>
      <div className="bg-secondary flex-grow"> </div>
    </div>
  );
}
