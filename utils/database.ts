import { BlogPostModel } from '../models/BlogModel';
import { DiaryEntryModel } from '../models/DiaryModel';
import blogPostsJSON from '../data/dev-blog.json';
import diaryEntrysJSON from '../data/dev-diary.json';
import { JournalEntryModel } from '../models/JournalModel';
import { compareJournalEntry } from './compare';

export const blogPosts: BlogPostModel[] = blogPostsJSON;
export const diaryEntrys: DiaryEntryModel[] = diaryEntrysJSON;
export const latestJournalEntrys: JournalEntryModel[] = [
  ...blogPosts,
  ...diaryEntrys,
]
  .sort(compareJournalEntry)
  .reverse();
