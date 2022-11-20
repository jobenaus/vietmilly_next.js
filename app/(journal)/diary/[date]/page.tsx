import { notFound } from 'next/navigation';
import JournalEntryPage from '../../(journal-entry)/JournalEntryPage';
import { diaryEntrys } from '../../../../utils/database';

export function generateStaticParams() {
  return diaryEntrys.map((diaryEntry) => ({
    date: diaryEntry.date,
  }));
}

export default function DiaryEntry({ params }: { params: { date: string } }) {
  const diaryEntry = diaryEntrys.find(
    (diaryEntry) => diaryEntry.date === params.date
  );
  if (!diaryEntry) return notFound();

  return <JournalEntryPage journalEntry={diaryEntry} />;
}
