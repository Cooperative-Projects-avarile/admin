export interface CStoreState {
  pageList: PageType[];
  total: number;
  pageSize: number;
  pageNum: number;
}
export interface PageType {
  id:string;
  name:string;
  path:string;
  active:boolean;
}