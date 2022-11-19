// import { Carousel } from 'flowbite-react/lib/esm/components/Carousel/Carousel';
// import ReactHTMLParser from 'react-html-parser';
// import { JournalImgModel } from '../models/JournalModel';
import { v4 as uuidv4 } from 'uuid';
import { ReactHTMLParser } from '../../../hacks/react-html-parser';
import Image from 'next/image';

import { JournalImgModel } from '../../../models/JournalModel';

type FBCarouselProps = {
  journalImgs: JournalImgModel[];
};

export default function FBCarousel({ journalImgs }: FBCarouselProps) {
  const control = journalImgs.length > 1 ? '' : ' ';
  return (
    <div className="aspect-[4/3] group">
      {/* <Carousel
        indicators={false}
        slideInterval={20000}
        leftControl={control}
        rightControl={control}
      >
        {journalImgs.map((journalImg) => {
          const imgPath = `/imgs/jpeg/${journalImg.img}_1280px.jpeg`;
          return (
            <div
              key={uuidv4()}
              className="flex justify-center items-center h-full bg-neutral-300"
            >
              <Image
                src={imgPath}
                className="max-h-full max-w-full absolute"
                alt={imgPath}
                width={1280}
                height={960}
              />
              {journalImg.description && (
                <p className="prose prose-a:font-normal text-black z-10 self-end m-3 p-2 rounded-md bg-neutral-50 bg-opacity-60 transition duration-300 group-hover:opacity-40">
                  {ReactHTMLParser(journalImg.description)}
                </p>
              )}
            </div>
          );
        })}
      </Carousel> */}
    </div>
  );
}
