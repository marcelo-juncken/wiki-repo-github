export class User {
    private _id: number;
    private _name: string;
    private _avatar_url: string;
    private _location: string;
    private _followers: number;
    private _bio: string;

    constructor(id: number, name: string, avatar_url: string, location: string, followers: number, bio: string) {
        this._id = id;
        this._name = name;
        this._avatar_url = avatar_url;
        this._location = location;
        this._followers = followers;
        this._bio = bio;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get avatar_url(): string {
        return this._avatar_url;
    }

    set avatar_url(value: string) {
        this._avatar_url = value;
    }

    get location(): string {
        return this._location;
    }

    set location(value: string) {
        this._location = value;
    }

    get followers(): number {
        return this._followers;
    }

    set followers(value: number) {
        this._followers = value;
    }

    get bio(): string {
        return this._bio;
    }

    set bio(value: string) {
        this._bio = value;
    }
}