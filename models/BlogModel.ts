import { JournalEntryModel } from './JournalModel';

export interface BlogPostModel extends JournalEntryModel {
  id: number;
}

export function isBlogPost(
  journalEntry: JournalEntryModel
): journalEntry is BlogPostModel {
  return (journalEntry as BlogPostModel).id !== undefined;
}
