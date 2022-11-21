import { JournalEntryModel } from '../../models/JournalModel';
import { blogPosts } from '../../utils/database';

export default function Dev() {
  const middleColor = 0xe02523;
  console.log(middleColor);
  const middleClassnames = `bg-[${middleColor}] flex-grow`;
  return (
    <div className="h-screen bg-white flex flex-col">
      <div className="bg-red-600 flex-grow"></div>
      <div className={middleClassnames}></div>
      <div className="bg-red-600 opacity-90 flex-grow"></div>
    </div>
  );
}
