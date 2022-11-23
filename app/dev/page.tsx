import SwiperCarousel from '../(journal)/(journal-entry)/SwiperCarousel';
import { JournalImgModel } from '../../models/JournalModel';

import { blogPosts } from '../../utils/database';
import NewCarousel from './NewCarousel';

export default function Dev() {
  const imgs: JournalImgModel[] = blogPosts[0].sections[10].startImgs!;

  return (
    <div className='w-2/3 border mx-auto mt-20'>
      <NewCarousel journalImgs={imgs} />
    </div>
  );
}
