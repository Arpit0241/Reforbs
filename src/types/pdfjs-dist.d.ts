declare module "pdfjs-dist/build/pdf" {
  export const GlobalWorkerOptions: {
    workerSrc: string;
  };

  export interface TextItem {
    str: string;
    dir?: string;
    width?: number;
    height?: number;
    transform?: number[];
    fontName?: string;
  }

  export interface TextContent {
    items: TextItem[];
  }

  export interface PDFPageProxy {
    getTextContent(): Promise<TextContent>;
  }

  export interface PDFDocumentProxy {
    numPages: number;
    getPage(pageNumber: number): Promise<PDFPageProxy>;
  }

  export interface PDFDocumentLoadingTask {
    promise: Promise<PDFDocumentProxy>;
  }

  export function getDocument(src: { data: Uint8Array } | string): PDFDocumentLoadingTask;
}
