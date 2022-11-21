import { JournalEntryModel } from '../models/JournalModel';

export function compareDateString(a: string, b: string) {
  return new Date(a).getTime() - new Date(b).getTime();
}

export function compareJournalEntry(
  a: JournalEntryModel,
  b: JournalEntryModel
) {
  return compareDateString(a.upload_date, b.upload_date);
}
