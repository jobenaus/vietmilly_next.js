import {
  blogPosts,
  diaryEntrys,
  latestJournalEntrys,
} from '../../utils/database';

import JournalPagePreview from './JournalPagePreview';

export default function Home() {
  const previewSize = 3;
  return (
    <div className="mx-5 sm:mx-8">
      {/* <p className='sm:hidden inline'>sm</p>
      <p className='md:hidden '>md</p>
      <p className='lg:hidden'>lg</p>
      <p className='xl:hidden'>xl</p> */}
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
