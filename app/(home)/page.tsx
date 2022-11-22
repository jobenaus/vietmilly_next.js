import {
  blogPosts,
  diaryEntrys,
  latestJournalEntrys,
} from '../../utils/database';

import JournalPagePreview from './JournalPagePreview';

export default function Home() {
  const previewSize = 3;
  return (
    <div className="px-3 max-w-xl mx-auto">
      <JournalPagePreview
        journalEntrys={latestJournalEntrys}
        previewSize={previewSize}
        previewTitle="Neuste Journal Einträge"
      />
      <JournalPagePreview
        journalEntrys={blogPosts}
        previewSize={previewSize}
        previewTitle="Beliebteste Blog Posts"
      />
      <JournalPagePreview
        journalEntrys={diaryEntrys}
        previewSize={previewSize}
        previewTitle="Beliebteste Tagebuch Einträge"
      />
    </div>
  );
}
