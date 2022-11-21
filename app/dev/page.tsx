import { JournalEntryModel } from '../../models/JournalModel';
import { blogPosts } from '../../utils/database';

export default function Dev() {
  const dateFormatter = (dateString: string) =>
    new Intl.DateTimeFormat('en-GB', {
      dateStyle: 'full',
      timeStyle: 'long',
      timeZone: 'Australia/Sydney',
    }).format(new Date(dateString));

  const dates = [
    '2022-10-19T00:00:00.000Z',
    '2020-10-19T00:00:00.000Z',
    '2020-10-19T00:00:09.000Z',
    '2020-10-19T00:01:09.100Z',
    '2020-10-18',
    '2022-11-19T00:00:00.000Z',
    '2020-11-19',
  ];

  function compareDates(a: string, b: string) {
    return new Date(a).getTime() - new Date(b).getTime();
  }

  function compareJournalEntry(a: JournalEntryModel, b: JournalEntryModel) {
    return compareDates(a.upload_date, b.upload_date);
  }

  const sortedBlogPosts = blogPosts.sort(compareJournalEntry).reverse();

  return (
    <div>
      {sortedBlogPosts.map((blogPost) => (
        <div key={blogPost.id} className="pt-4">
          <p>Titel: {blogPost.title}</p>
          <p>Upload Date: {dateFormatter(blogPost.upload_date)}</p>
        </div>
      ))}
    </div>
  );
}
