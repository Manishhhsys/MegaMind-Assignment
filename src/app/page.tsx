import ProfileCard from "@/components/profilecard";
import ProfileType from "@/types/profile";
import axios from "axios"
export default async function Home() {
  const response=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/profiles`)
  const profiles=(response.data as { data: ProfileType[] }).data;
  return (
    <>

      <div className="max-w-full lg:p-15 m-2 lg:ml-10 grid lg:grid-cols-3 lg:gap-3 grid-cols-1 gap-3">
        {profiles.map((profile)=>(
          <ProfileCard key={profile.id} name={profile.name} avatarUrl={profile.avatarUrl} gender={profile.gender} age={profile.age} pronouns={profile.pronouns} id={profile.id}></ProfileCard>
        ))
          
        }

          
      </div>
    </>
  );
}
