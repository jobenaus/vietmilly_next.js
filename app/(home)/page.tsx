import {
  blogPosts,
  diaryEntrys,
  latestJournalEntrys,
} from '../../utils/database';

import JournalPagePreview from './JournalPagePreview';

export default function Home() {
  const previewSize = 3;
  return (
    <div className="mx-5">
      <div className="mx-auto max-w-lg sm:max-w-6xl">
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
    </div>
  );
}
