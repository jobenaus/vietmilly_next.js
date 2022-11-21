import { JournalEntryModel } from '../../../models/JournalModel';
import { compareJournalEntry } from '../../../utils/compare';
import { blogPosts, diaryEntrys } from '../../../utils/database';
import JournalPage from '../JournalPage';

export default function Newest() {
  const journalEntrys: JournalEntryModel[] = [...blogPosts, ...diaryEntrys];
  const sortedJournalEntrys = journalEntrys.sort(compareJournalEntry).reverse();
  return <JournalPage journalEntrys={sortedJournalEntrys} />;
}
