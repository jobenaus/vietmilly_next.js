import { blogPosts } from '../../../utils/database';

import JournalPage from '../JournalPage';

export default function Blog() {
  return <JournalPage journalEntrys={blogPosts} />;
}
