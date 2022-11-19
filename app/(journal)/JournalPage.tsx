import { v4 as uuidv4 } from 'uuid';

import { JournalEntryModel } from '../../models/JournalModel';
import JournalEntryPreview from './JournalEntryPreview';

type JournalLayoutProps = {
  journalEntrys: JournalEntryModel[];
};

export default function JournalLayout({ journalEntrys }: JournalLayoutProps) {
  return (
    <div className="max-w-6xl sm:p-3 md:p-5">
      <div className="max-w-4xl mx-auto">
        {journalEntrys.map((journalEntry) => (
          <div key={uuidv4()} className="flex justify-center">
            <div className="bg-neutral-50 p-3 rounded-xl">
              <JournalEntryPreview journalEntry={journalEntry} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
