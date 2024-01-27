import {Repository} from "../../../Repository";

export interface ItemRepoProps {
    repository :  Repository,
    onRemoveRepo : () => void
}