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
import { useParams } from "next/navigation"

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
  email:string
  phone:number
  projects: Project[]
  casestudies: CaseStudy[]
}

interface ProfileResponse {
  data: Profile
}

interface PageProps {
  params: {
    id: string
  }
}

export default function Page() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const ResumeVideoRef = useRef<HTMLElement>(null);
  const paramsreq=useParams()
  const {id}=paramsreq


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

  if (loading) return <div>Loading profile...</div>
  if (!profile) return <div>Profile not found</div>

  const handleResumeClick = () => {
    if (profile.resumeUrl) {
      window.open(profile.resumeUrl, "_blank")
    }
  }

  return (
    <div>
      
      <div className="relative bg-gradient-to-r from-[#F58232] to-[#EE4D3B] h-[285px] w-full grid grid-cols-3">
        <div className="flex items-end m-10 gap-3 justify-center">
          <h5 className="font-helveticDisplay font-bold text-base flex gap-2 text-white items-center">
            <EmailIcon /> {profile.email}
          </h5>
          <h5 className="font-helveticDisplay font-bold text-base flex gap-2 text-white items-center">
            <PhoneIcon /> {profile.phone}
          </h5>
        </div>

        <div className="relative flex justify-center items-end">
          <div className="absolute -bottom-24 w-48 h-48 rounded-full border-4 border-white bg-white shadow-xl overflow-hidden">
            <Image
              src={profile.avatarUrl}
              width={192}
              height={192}
              alt={profile.name}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="flex items-end m-10 gap-3 justify-center">
          <Button
            variant="outline"
            className="font-helveticDisplay text-base font-bold text-white"
            onClick={handleResumeClick}
          >
            <DownloadIcon className="w-6 h-6 mr-2" /> Download My Resume
          </Button>
        </div>
      </div>

      
      <div className="w-full flex flex-col justify-center items-center p-30">
        <div className="font-HelveticaNeueBlack font-bold text-5xl">{profile.name}</div>
        <div className="font-normal font-HelveticaNeueBlack text-3xl mt-2">
          {profile.gender} | {profile.age} | {profile.pronouns}
        </div>
        <div className="mt-8">
          <Button className="bg-[#F58232] font-helveticDisplay rounded-4xl font-bold text-base text-white p-7 w-[289px] h-[48px] border border-transparent 
hover:bg-white hover:text-black hover:border-black" onClick={()=>{
        ResumeVideoRef.current?.scrollIntoView({behavior:'smooth'})
}}>
            <PlayIcon className="w-8 h-8 md:w-10 md:h-10 hover:text-black" /> Watch my Visual Resume Now
          </Button>
        </div>
      </div>

      
      <div className="flex justify-center items-center p-10">
        <SkillsBar />
      </div>

      <div className="flex justify-center items-center px-10 flex-wrap"> 
      <Bio bio={profile.bio} />
      </div>

      <SkillsIcon />
      <Exp projects={profile.projects} caseStudies={profile.casestudies}/>
      <section ref={ResumeVideoRef}>
        <VisualResume  videoUrl={profile.videoUrl}/>
      </section>
      

      
      <Footer name={profile.name} resumeUrl={profile.resumeUrl} email={profile.email} phone={profile.phone}/>
    </div>
  )
}
