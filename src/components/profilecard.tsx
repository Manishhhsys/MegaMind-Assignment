"use client"
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import ProfileType from "@/types/profile";
import Image from "next/image";
import { useRouter } from "next/navigation";
function ProfileCard({id,name,avatarUrl,gender,age,pronouns}:ProfileType) {
    const router=useRouter()
    return (
        <Card className="w-[354px] h-[450px] relative overflow-hidden mb-10 cursor-pointer" id={id} onClick={()=>router.push(`/profile/${id}`)}>
            <CardHeader className="w-full h-[225px] bg-[#F6893C] rounded-t-lg" />
            <div className="absolute top-[140px] left-1/2 -translate-x-1/2">
                <Image
                    src={"/image/manish.jpeg"}
                    width={168}
                    height={178}
                    alt="Profile Avatar"
                    className="rounded-full border-4 border-white"
                />
            </div>
            <CardContent className="mt-[100px] flex flex-col items-center">
                <div className="font-abhayalibre font-bold text-[32px] tracking-[-0.28px]">
                    {name}
                </div>
                <div className="font-base-adamina text-[15px]">
                    {gender} | {age} | {pronouns}
                </div>
            </CardContent>
        </Card>
    );
}

export default ProfileCard
