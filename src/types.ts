import {z} from 'zod'
import type { inferRouterOutputs } from '@trpc/server'
import type { AppRouter } from './server/api/root'



type RouterOutputs =  inferRouterOutputs<AppRouter>

type allTasksOutput = RouterOutputs["task"]["all"]
export type Task = allTasksOutput[number]

export const taskInput = z.string({required_error: 'Add a Task Please :)'}).min(1).max(100)