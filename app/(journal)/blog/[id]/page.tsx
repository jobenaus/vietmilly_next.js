import { blogPosts } from '../../../../utils/database';
import { notFound } from 'next/navigation';
import JournalEntryPage from '../../(journal-entry)/JournalEntryPage';

export function generateStaticParams() {
  return blogPosts.map((blogPost) => ({
    id: blogPost.id.toString(),
  }));
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const blogPost = blogPosts.find(
    (blogPost) => blogPost.id === Number(params.id)
  );
  if (!blogPost) return notFound();
  return <JournalEntryPage journalEntry={blogPost} />;
}
