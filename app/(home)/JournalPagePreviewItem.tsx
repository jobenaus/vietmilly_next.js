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
    <Link href={link()} className="hover:opacity-90 group">
      <div className="flex flex-col max-w-xl mx-auto  gap-x-4">
        <div className="aspect-[4/3] object-cover relative">
          <Image
            src={thumbnailPath}
            alt={journalEntry.thumbnail}
            width={532}
            height={399}
            quality={75}
            className="pb-1"
            priority
          />
        </div>

        <div>
          <header className="py-2">
            <h1 className="text-2xl font-extrabold pb-0.5 text-red-600 text-opacity-90 group-hover:text-black group-hover:text-opacity-100">
              {title}
            </h1>
            {isDiaryEntry(journalEntry) && (
              <small className="text-neutral-600 text-base font-bold ">
                {date(journalEntry)}
              </small>
            )}
          </header>
        </div>
      </div>
    </Link>
  );
}
