'use client'
import type {Task} from '../../types'

type TaskProps = {
    task : Task
}

export default function Task ({task} : TaskProps){
const {id,content,done} = task 
return (
    <>
    {content}
    </>
)

}