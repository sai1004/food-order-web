import { Injectable } from '@angular/core';

type StorageType = 'local' | 'session';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    private storageMap: Record<StorageType, Storage> = {
        local: localStorage,
        session: sessionStorage,
    };

    constructor() {}

    /** Save a value in storage */
    set<T>(key: string, value: T, type: StorageType = 'local'): void {
        try {
            const stringValue = JSON.stringify(value);
            this.storageMap[type].setItem(key, stringValue);
        } catch (error) {
            console.error(`Error saving to ${type}Storage:`, error);
        }
    }

    /** Get a value from storage */
    get<T>(key: string, type: StorageType = 'local'): T | null {
        try {
            const value = this.storageMap[type].getItem(key);
            return value ? JSON.parse(value) : null;
        } catch (error) {
            console.error(`Error reading from ${type}Storage:`, error);
            return null;
        }
    }

    /** Remove an item from storage */
    remove(key: string, type: StorageType = 'local'): void {
        try {
            this.storageMap[type].removeItem(key);
        } catch (error) {
            console.error(`Error removing from ${type}Storage:`, error);
        }
    }

    /** Clear all items in the selected storage */
    clear(type: StorageType = 'local'): void {
        try {
            this.storageMap[type].clear();
        } catch (error) {
            console.error(`Error clearing ${type}Storage:`, error);
        }
    }

    /** Check if a key exists */
    hasKey(key: string, type: StorageType = 'local'): boolean {
        return this.storageMap[type].getItem(key) !== null;
    }
}

// // Save user info
// this.storageService.set('user', userObject);

// // Get user info
// const user = this.storageService.get<User>('user');

// // Remove user
// this.storageService.remove('user');

// // Clear session storage
// this.storageService.clear('session');
