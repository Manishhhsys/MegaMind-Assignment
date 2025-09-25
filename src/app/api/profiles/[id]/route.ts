import prisma from "@/lib/prismaConfig";
import { NextRequest, NextResponse } from "next/server"

interface paramsInteface{
    params:{
        id:string
    }
}

export async function GET(req:NextRequest,{ params }:paramsInteface){
        try{
            const { id } = await params;
            if(!id){
                return NextResponse.json({
                    message:"Please Provide the User id"
                },{status:403})
            }
            const response=await prisma.profile.findUnique({
                where:{
                    id
                },include:{
                    projects:true,
                    casestudies:true
                }
            })

            if(!response){
                return NextResponse.json({
                    message:"Please Enter An Valid User ID"
                },{status:401})
            }

            return NextResponse.json({
                data:response
            },{status:200})
        }catch(e:any){
            console.log("Erorr Debug",e)
            return NextResponse.json({
                message:"Internal Error While Feteching the Info"
            },{
                status:500
            })
        }
}