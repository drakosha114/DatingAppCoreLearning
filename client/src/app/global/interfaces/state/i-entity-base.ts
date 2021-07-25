export interface IEntityBase<T> {
  isLoading: boolean;
  isLoaded: boolean;
  data: T | null;
  error: any | null;
}
