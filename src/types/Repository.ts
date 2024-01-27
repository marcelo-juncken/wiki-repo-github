export class Repository {
    private _id: string;
    private _name: string;
    private _description: string;
    private _language: string;
    private _updated_at: string;
    private _stargazers_count: number;
    private _watchers_count: number;
    private _html_url: string;

    constructor(id: string, name: string, description: string, language: string, updated_at: string, stargazers_count: number, watchers_count: number, html_url: string) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._language = language;
        this._updated_at = updated_at;
        this._stargazers_count = stargazers_count;
        this._watchers_count = watchers_count;
        this._html_url = html_url;
    }


    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get language(): string {
        return this._language;
    }

    set language(value: string) {
        this._language = value;
    }

    get updated_at(): string {
        return this._updated_at;
    }

    set updated_at(value: string) {
        this._updated_at = value;
    }

    get stargazers_count(): number {
        return this._stargazers_count;
    }

    set stargazers_count(value: number) {
        this._stargazers_count = value;
    }

    get watchers_count(): number {
        return this._watchers_count;
    }

    set watchers_count(value: number) {
        this._watchers_count = value;
    }

    get html_url(): string {
        return this._html_url;
    }

    set html_url(value: string) {
        this._html_url = value;
    }
}