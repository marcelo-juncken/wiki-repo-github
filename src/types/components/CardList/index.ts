import {Repository} from "../../../models";

export interface CardListProps {
    repositories: Repository[],
    onRemoveRepo: (id: string) => void
    onViewClick: (repositoryUrl : string) => void
}