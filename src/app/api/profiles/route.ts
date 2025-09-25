import prisma from "@/lib/prismaConfig";
import { NextResponse } from "next/server";


export  async function GET(){
    try{
            const response=await prisma.profile.findMany({
                select:{
                    id:true,
                    name:true,
                    avatarUrl:true,
                    gender:true,
                    age:true,
                    pronouns:true
                }
            })
            if(response.length===0){
                return NextResponse.json({
                    message:"No Data Found"
                },{
                    status:204
                })
            }

            return NextResponse.json({
                data:response
            },{
                status:200
            })
    }catch(e){
        console.log("the error.../",e)
        return NextResponse.json({
            message:"Internal Error"
        },{status:500})
    }

}