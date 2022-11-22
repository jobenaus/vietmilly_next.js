import React from 'react';
import { JournalEntryModel } from '../../models/JournalModel';
import Image from 'next/image';
import { DiaryEntryModel, isDiaryEntry } from '../../models/DiaryModel';
import { formatDate } from '../../utils/format';
import { isBlogPost } from '../../models/BlogModel';
import Link from 'next/link';

type JournalPagePreviewItemProps = {
  journalEntry: JournalEntryModel;
};

export default function JournalPagePreviewItem({
  journalEntry,
}: JournalPagePreviewItemProps) {
  const thumbnailPath = `/imgs/${journalEntry.thumbnail}.jpeg`;
  const title = journalEntry.title;

  const date = (diaryEntry: DiaryEntryModel) => formatDate(diaryEntry.date);
  const link = () => {
    if (isBlogPost(journalEntry)) return `/blog/${journalEntry.id.toString()}`;
    if (isDiaryEntry(journalEntry)) return `/diary/${journalEntry.date}`;
    throw new Error(`Unknown journal entry type: ${journalEntry}`);
  };
  return (
    <Link
      href={link()}
      className="hover:opacity-90 duration-100 group"
    >
      <div className="aspect-[4/3] w-full object-cover relative mb-11">
        <Image
          src={thumbnailPath}
          alt={journalEntry.thumbnail}
          fill
          quality={75}
          priority
        />
      </div>

      <header>
        <h1 className="text-2xl font-extrabold text-primary group-hover:text-black duration-100">
          {title}
        </h1>
        {isDiaryEntry(journalEntry) && (
          <small className="text-neutral-600 text-base font-bold ">
            {date(journalEntry)}
          </small>
        )}
      </header>
    </Link>
  );
}
