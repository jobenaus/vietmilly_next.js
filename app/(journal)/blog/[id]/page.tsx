import { blogPosts } from '../../../../utils/database';
import { notFound } from 'next/navigation';

export default function BlogPost({ params }: { params: { id: string } }) {
  const blogPost = blogPosts.find(
    (blogPost) => blogPost.id === Number(params.id)
  );
  if (!blogPost) return notFound();
  return (
    <div>
      BlogPost
      <p>Title: {blogPost?.title}</p>
    </div>
  );
}
