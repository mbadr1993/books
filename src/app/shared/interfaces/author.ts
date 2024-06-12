export interface Author {
  key: string;
  name: string;
  imageUrl: string;
  work_count?: number;
  birth_date?: Date;
  topWork?: string;
  subjects?: string;
}
