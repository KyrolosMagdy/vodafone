import { ModifyData } from "../../Api"

export const fetchTasks = async () => {
    const res = await ModifyData({ url: '/task' })
    console.log('res: ', res);
    return res;
}