import {Repository} from "../../../models";

export interface CardListProps {
    repositories: Repository[]
    status: "active" | "inactive" | ""
    onRemoveRepo: (id: string) => void
    onViewClick: (repositoryUrl : string) => void
}