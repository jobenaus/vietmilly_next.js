import { latestJournalEntrys } from '../utils/database';
import JournalPage from './(journal)/JournalPage';

export default function Home() {
  const previewSize = 3;
  const previewLatestJournalEntrys = latestJournalEntrys.slice(0, previewSize);
  return (
    <div className="my-7">
      <div className="flex flex-col items-center py-6 border-b-2 border-black">
        <h1 className="text-5xl font-bold my-">Neuste Journal Einträge</h1>
        <JournalPage journalEntrys={previewLatestJournalEntrys} />
      </div>
    </div>
  );
}
