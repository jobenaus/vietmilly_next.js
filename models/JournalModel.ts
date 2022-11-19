export interface JournalSectionModel {
  id: number;
  startImgs?: JournalImgModel[];
  endImgs?: JournalImgModel[];
  title?: string;
  text: string;
}

export interface JournalImgModel {
  img: string;
  description?: string;
}

export interface JournalEntryModel {
  upload_date: string;
  title: string;
  thumbnail: string;
  sections: JournalSectionModel[];
}
