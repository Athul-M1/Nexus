import axios from "axios";

export const commonAPI = async(httpmethod,url,reqBody,reqHeader)=>{
    
    let reConfig ={
        method:httpmethod,
        url,
        data:reqBody,
        headers: reqHeader?reqHeader:{"Content-Type": "application/json"}
    }
    return await axios(reConfig).then((res)=>{
        return res
    }).catch((err)=>{
        return err 
    })
}