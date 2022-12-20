import request from '@/utils/axios'
/**
 * 登录
 **/
interface IResponseType<P = {}>
{
    code?: number;
    status: number;
    msg: string;
    data: P;
}

interface ILogin{
    token: string;
    realName:string;
}

export  const login=(usr:string,pwd:string) => {
    return request<IResponseType<ILogin>>({
        url:'/api/user/login',
        method: 'POST',
        data:{
            usr,
            pwd
        }
    })
}