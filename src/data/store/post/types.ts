export interface IPostState {
  currentPage: number;
  filterKeyword: string;
  isLoading: boolean;
  perPage: number;
  posts: Post[];
  total: number;
}

export type Post = {
  page_id: string | number;
  url: string;
  canonical_url: string;
  parent_url: string;
  image_url: string;
  price: string;
  name: string;
  product_confidence: string | number;
  crawled_time: string;
  created_time: string;
  width?: number;
  height?: number;
  issue?: string;
  description?: string;
  domain?: string;
  source?: string;
  brand?: string;
  slug?: string;
  tags?: string;
  price_updated?: string;
  last_update?: string;
  currency?: string;
  price_old?: string;
  discount?: string;
  s3_url?: string;
};
