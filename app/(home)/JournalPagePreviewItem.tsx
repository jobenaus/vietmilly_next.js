import React from 'react';
import JournalEntryPreview from '../(journal)/JournalEntryPreview';
import { JournalEntryModel } from '../../models/JournalModel';

type JournalPagePreviewItemProps = {
  journalEntry: JournalEntryModel;
};

export default function JournalPagePreviewItem({
  journalEntry,
}: JournalPagePreviewItemProps) {
  return <JournalEntryPreview journalEntry={journalEntry} />;
}
