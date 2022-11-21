import { JournalEntryModel } from '../../models/JournalModel';
import JournalPagePreviewItem from './JournalPagePreviewItem';

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
      <div className="max-w-6xl sm:p-3 md:p-5">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {previewJournalEntrys.map((journalEntry) => (
              <div key={journalEntry.upload_date}>
                <JournalPagePreviewItem journalEntry={journalEntry} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
