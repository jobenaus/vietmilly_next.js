import JournalPage from '../(journal)/JournalPage';
import { JournalEntryModel } from '../../models/JournalModel';

type JournalPagePreviewProps = {
  journalEntrys: JournalEntryModel[];
  previewSize: number;
  previewTitle: string;
};

export default function JournalPagePreview({
  journalEntrys,
  previewSize,
  previewTitle,
}: JournalPagePreviewProps) {
  const previewJournalEntrys = journalEntrys.slice(0, previewSize);
  return (
    <div className="flex flex-col items-center py-6 border-b-2 border-black">
      <h1 className="text-5xl font-bold my-">{previewTitle}</h1>
      <JournalPage journalEntrys={previewJournalEntrys} />
    </div>
  );
}
