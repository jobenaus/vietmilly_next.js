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
    <div className="mt-10 first:mt-6 pb-8 sm:pb-16 sm:mt-12 sm:first:mt-8 md:mt-14 md:first:mt-11 md:pb-16 flex flex-col items-center border-b-2 last:border-b-0 border-black">
      <h1 className="text-5xl  font-bold mb-10 md:mb-12">{previewTitle}</h1>

      <div className="flex flex-col gap-12 sm:grid-cols-3 sm:grid sm:gap-9">
        {previewJournalEntrys.map((journalEntry) => (
          <div key={journalEntry.upload_date}>
            <JournalPagePreviewItem journalEntry={journalEntry} />
          </div>
        ))}
      </div>
    </div>
  );
}
