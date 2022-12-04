import {
  blogPosts,
  diaryEntrys,
  favouriteBlogPosts,
  favouriteDiaryEntries,
  latestJournalEntrys,
} from '../../utils/database';

import JournalPagePreview from './JournalPagePreview';

export default function Home() {
  const previewSize = 3;
  return (
    <div className="mx-5 sm:mx-8 md:mx-12 lg:mx-32">
      <div className="mx-auto max-w-lg sm:max-w-6xl">
        <JournalPagePreview
          journalEntrys={latestJournalEntrys}
          previewSize={previewSize}
          previewTitle="Neuste Einträge"
        />
        {favouriteBlogPosts.length > 0 && (
          <JournalPagePreview
            journalEntrys={favouriteBlogPosts}
            previewSize={previewSize}
            previewTitle="Beliebteste Blog Posts"
          />
        )}
        {favouriteDiaryEntries.length > 0 && (
          <JournalPagePreview
            journalEntrys={favouriteDiaryEntries}
            previewSize={previewSize}
            previewTitle="Beliebteste Tagebuch Einträge"
          />
        )}
      </div>
    </div>
  );
}
