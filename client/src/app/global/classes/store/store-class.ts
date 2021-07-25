import {IStoreService} from "../../interfaces";

export class StoreClass implements IStoreService {
  constructor(private storageProvider: Storage) {
  }

  [name: string]: any;

  get length(): number {
    return this.storageProvider.length;
  }

  clear(): void {
    this.storageProvider.clear();
  }

  getItem(key: string): string | null {
    return this.storageProvider.getItem(key);
  }

  key(index: number): string | null {
    return this.storageProvider.key(index);
  }

  removeItem(key: string): void {
    this.storageProvider.removeItem(key);
  }

  setItem(key: string, value: string): void {
    this.storageProvider.setItem(key, value);
  }

}
