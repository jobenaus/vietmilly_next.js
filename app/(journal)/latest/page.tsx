import { latestJournalEntrys } from '../../../utils/database';
import JournalPage from '../JournalPage';

export default function Latest() {
  return <JournalPage journalEntrys={latestJournalEntrys} />;
}
