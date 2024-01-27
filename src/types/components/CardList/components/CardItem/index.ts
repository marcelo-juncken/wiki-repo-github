import {Repository} from "../../../../../models";

export interface CardItemProps {
    repository :  Repository,
    onRemoveRepo : () => void
}