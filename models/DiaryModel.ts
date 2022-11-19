import { JournalEntryModel } from './JournalModel';

export interface DiaryEntryModel extends JournalEntryModel {
  date: string;
}

export function isDiaryEntry(
  journalEntry: JournalEntryModel
): journalEntry is DiaryEntryModel {
  return (journalEntry as DiaryEntryModel).date !== undefined;
}
