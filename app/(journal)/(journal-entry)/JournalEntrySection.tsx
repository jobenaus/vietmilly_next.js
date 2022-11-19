import ReactHTMLParser from 'react-html-parser';
import {
  JournalImgModel,
  JournalSectionModel,
} from '../../../models/JournalModel';
import FBCarousel from './FBCarousel';

type JournalEntrySectionProps = {
  journalEntrySection: JournalSectionModel;
};

export default function JournalEntrySection({
  journalEntrySection,
}: JournalEntrySectionProps) {
  const title = journalEntrySection.title;
  const text = journalEntrySection.text;
  const startImgs: JournalImgModel[] = journalEntrySection.startImgs ?? [];
  const endImgs: JournalImgModel[] = journalEntrySection.endImgs ?? [];

  return (
    <>
      {title && <h2 className="mt-12 mb-2 font-bold text-4xl">{title}</h2>}

      {startImgs.length > 0 && (
        <div className="mt-7 mb-5">
          <FBCarousel journalImgs={startImgs} />
        </div>
      )}

      <p className="text-xl my-6 prose text-black prose-a:font-normal">
        {ReactHTMLParser(text)}
      </p>

      {endImgs.length > 0 && (
        <div className="mt-7 mb-10">
          <FBCarousel journalImgs={endImgs} />
        </div>
      )}
    </>
  );
}
