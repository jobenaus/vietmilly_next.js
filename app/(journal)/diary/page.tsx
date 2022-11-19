import { diaryEntrys } from '../../../utils/database';
import JournalPage from '../JournalPage';

export default function Page() {
  return <JournalPage journalEntrys={diaryEntrys} />;
}
