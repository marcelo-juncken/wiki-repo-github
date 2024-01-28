import {User} from "../../../models";

export interface ProfileProps {
    userSelected: User | null
    status: "active" | "inactive" | ""
    onResetClick: () => void
}