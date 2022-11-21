import { latestJournalEntrys } from '../../../utils/database';
import JournalPage from '../JournalPage';

export default function Newest() {
  return <JournalPage journalEntrys={latestJournalEntrys} />;
}
