"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import axios from "axios"
import { Button } from "@/components/ui/button"
import EmailIcon from "@/components/icons/email"
import PhoneIcon from "@/components/icons/phone"
import DownloadIcon from "@/components/icons/download"
import PlayIcon from "@/components/icons/play"
import SkillsBar from "@/components/skills"
import Bio from "@/components/bio"
import SkillsIcon from "@/components/skillsicon"
import Exp from "@/components/exp"
import VisualResume from "@/components/visualresume"
import Footer from "@/components/Footer"
import { useParams, useRouter } from "next/navigation"
import { LucideMoveLeft } from "lucide-react"
import Loading from "./loading"
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
interface Project {
  id: string
  imageUrl: string
  title: string
  profileid: string
}

interface CaseStudy {
  id: string
  imageUrl: string
  title: string
  profileid: string
}

interface Profile {
  id: string
  name: string
  avatarUrl: string
  age: string
  gender: string
  pronouns: string
  bio: string
  resumeUrl: string
  videoUrl: string
  email: string
  phone: number
  projects: Project[]
  casestudies: CaseStudy[]
}

interface ProfileResponse {
  data: Profile
}

export default function Page() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const ResumeVideoRef = useRef<HTMLElement>(null);
  const router = useRouter()
  const paramsreq = useParams()
  const { id } = paramsreq

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await axios.get<ProfileResponse>(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/profiles/${id}`
        )
        setProfile(res.data.data)
      } catch (err) {
        console.error("Error fetching profile:", err)
        setProfile(null)
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [id])

  if (loading) return <Loading />
  if (!profile) return <div>Profile not found</div>

  const handleResumeClick = () => {
    if (profile.resumeUrl) {
      window.open(profile.resumeUrl, "_blank")
    }
  }

  return (
    <div className="w-full overflow-x-hidden">

      
      <div className="relative bg-gradient-to-r from-[#F58232] to-[#EE4D3B] h-[285px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        
        <div className="flex md:items-end m-4 sm:m-6 lg:m-10 gap-3 md:justify-center ">
          <Button 
          variant={'outline'}
          className="rounded-full text-base sm:text-lg font-semibold font-helveticDisplay px-4 sm:px-6 py-2 sm:py-4 hidden"
          onClick={() => router.push("/")}
        >
          <LucideMoveLeft className="mr-2" /> Back
        </Button>
          <h5 className="font-helveticDisplay font-bold text-sm sm:text-base flex gap-2 text-white items-center">
            <EmailIcon /> {profile.email}
          </h5>
          <h5 className="font-helveticDisplay font-bold text-sm sm:text-base flex gap-2 text-white items-center">
            <PhoneIcon /> {profile.phone}
          </h5>
        </div>

        
        <div className="relative flex justify-center items-end">
          <div className="absolute -bottom-16 sm:-bottom-24 w-32 h-32 sm:w-48 sm:h-48 rounded-full border-4 border-white bg-white shadow-xl overflow-hidden">
            <Image
              src={profile.avatarUrl}
              width={192}
              height={192}
              alt={profile.name}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        
        <div className="flex items-end m-4 sm:m-6 lg:m-10 gap-3 justify-center">
          <Button
            variant="outline"
            className="font-helveticDisplay text-sm sm:text-base font-bold text-white w-full sm:w-auto"
            onClick={handleResumeClick}
          >
            <DownloadIcon className=" mr-2" size={28}/> Download My Resume
          </Button>
        </div>
      </div>

      
      <div className="w-full p-4 sm:p-5">
        <Button 
          variant={'outline'}
          className="rounded-full text-base sm:text-lg font-semibold font-helveticDisplay px-4 sm:px-6 py-2 sm:py-4 hidden  lg:flex"
          onClick={() => router.push("/")}
        >
          <LucideMoveLeft className="mr-2" /> Back
        </Button>
      </div>

      
      <div className="w-full flex flex-col justify-center items-center p-4 sm:p-5">
        <div className="font-HelveticaNeueBlack font-bold text-3xl sm:text-5xl">{profile.name}</div>
        <div className="font-normal font-HelveticaNeueBlack text-xl sm:text-3xl mt-2 text-center">
          {profile.gender} | {profile.age} | {profile.pronouns}
        </div>
        <div className="mt-6 sm:mt-8 w-full sm:w-auto">
          <Button
            className="bg-[#F58232] font-helveticDisplay rounded-4xl font-bold text-sm sm:text-base text-white px-4 sm:px-7 py-2 sm:py-4 w-full sm:w-[289px] border border-transparent 
              hover:bg-white hover:text-black hover:border-black h-[48px]"
            onClick={() => {
              ResumeVideoRef.current?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <PlayIcon className="sm:w-8 sm:h-8 mr-2" size={38} /> Watch my Visual Resume Now
          </Button>
        </div>
      </div>

      
      <div className="flex justify-center items-center p-5 sm:p-10">
        <SkillsBar />
      </div>

      
      <div className="flex justify-center items-center px-4 sm:px-10 flex-wrap">
        <Bio bio={profile.bio} />
      </div>

      
      <SkillsIcon />

      
      <Exp projects={profile.projects} caseStudies={profile.casestudies} />

      
      <section ref={ResumeVideoRef}>
        <VisualResume videoUrl={profile.videoUrl} />
      </section>

      
      <Footer
        name={profile.name}
        resumeUrl={profile.resumeUrl}
        email={profile.email}
        phone={profile.phone}
      />
    </div>
  )
}
