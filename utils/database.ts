import { BlogPostModel } from '../models/BlogModel';
import { DiaryEntryModel } from '../models/DiaryModel';
import blogPostsJSON from '../data/blog.json';
import diaryEntrysJSON from '../data/diary.json';

export const blogPosts: BlogPostModel[] = blogPostsJSON;
export const diaryEntrys: DiaryEntryModel[] = diaryEntrysJSON;
