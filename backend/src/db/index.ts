// Simple in-memory storage
import {User} from "../models/user";
import {AudioTrack} from "../models/audioTrack";

class Database {
    private users: Map<number, User> = new Map();
    private tracks: AudioTrack[] = [
        {
            id: '1',
            title: 'Forest Morning',
            artist: 'Nature Sounds',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
            duration: 180
        },
        {
            id: '2',
            title: 'Ocean Waves',
            artist: 'Relaxing Sounds',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
            duration: 240
        }
    ];


    async createUser(user: Omit<User, 'id' | 'createdAt'>): Promise<User> {
        const id = this.users.size + 1
        const newUser: User = {
            ...user,
            id,
            createdAt: new Date()
        };
        this.users.set(id, newUser);
        return newUser;
    }

    async findUserByEmail(email: string): Promise<User | undefined> {
        return Array.from(this.users.values()).find(user => user.email === email);
    }

    async getTracks(): Promise<AudioTrack[]> {
        return this.tracks;
    }
}

export const db = new Database();