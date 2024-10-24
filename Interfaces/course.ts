export interface ICourse {
  name: string; // Single line text, required
  description: string; // Multi-line text
  banner: { url: string }; // Asset, file upload for image
  totalChapters: number; // Number
  free: boolean; // Boolean
  chapter: IChapter[]; // List of references to Chapters
  tag: string[]; // List of tags as strings
  sourceCode: string; // URL for source code
  author: string; // Single reference to an Author
  youtubeUrl?: string; // Optional URL for YouTube
  demoUrl?: string; // Optional URL for a demo
  slug: string; // Slug for URLs
}

interface IChapter {
  id: string;
  name: string;
  video: { url: string };
}
