import prisma from "@/lib/prismaConfig";
import { NextRequest, NextResponse } from "next/server";

interface ParamsInterface {
    params: Promise<{
        id: string;
    }>;
}

export async function GET(req: NextRequest, { params }: ParamsInterface) {
    try {
        const { id } = await params;
        
        if (!id) {
            return NextResponse.json({
                message: "Please Provide the User id"
            }, { status: 403 });
        }
        
        const response = await prisma.profile.findUnique({
            where: {
                id
            },
            include: {
                projects: true,
                casestudies: true
            }
        });

        if (!response) {
            return NextResponse.json({
                message: "Please Enter A Valid User ID"
            }, { status: 401 });
        }

        return NextResponse.json({
            data: response
        }, { status: 200 });
        
    } catch (error: unknown) {
        console.log("Error Debug", error);
        
        return NextResponse.json({
            message: "Internal Error While Fetching the Info"
        }, {
            status: 500
        });
    }
}