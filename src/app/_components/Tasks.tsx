'use client'

import { api } from "~/trpc/react"
import Task from "./Task";

export default function Tasks() {
    const { data: tasks, isLoading, isError } = api.task.all.useQuery();

    if (isLoading) {
        return (
            <span>Loading..</span>
        );
    }

    if (isError) {
        return (
            <span>Error fetching tasks</span>
        );
    }

    return (
        <>
            {tasks.length ? tasks.map(task => {
                return <Task key={task.id} task={task}/>;
            }) : <span>No tasks available</span>}
        </>
    );
}