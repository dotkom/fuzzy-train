export interface IChunk {
  content: string;
  heading: string;
  key: string;
}

export interface ITab {
  name: string;
  chunks: string[];
}
