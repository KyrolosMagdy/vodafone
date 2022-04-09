import { ModifyData } from "../../Api"

export const fetchAllUsers = async () => {
    const res = await ModifyData({url: '/user'});
    return res;
}