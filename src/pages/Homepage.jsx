// Combines and renders all sections that make up the homepage
// Contributor : Aryan Puri (23BCE8560)


import Navbar1 from '../components/Navbar1'
import Hero1 from '../components/Hero1'
import About from '../components/About'
import Events from '../components/Events'
import Projects from '../components/Projects_HP'
import Team from '../components/HomePage/Team'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { getData } from '@/utils/api'
import { data } from '@/components/details'
const Homepage = () => {

  const [events, setEvents] = useState([]);
  const [teams, setTeams] = useState(data);
  
  useEffect(() =>{
    const getEventsData = async () =>{
      const upcomingEvents = await getData("event/getUpcomingEvents")
      const pastEvents = await getData("event/getPastEvents")
      const upcomingEventsList = upcomingEvents?.success ? 
          upcomingEvents.data.map(event => ({
            title: event.title,
            bannerUrl: event.bannerUrl,
            eventID: event.eventID
          })) : [];
        const pastEventsList = pastEvents?.success ? 
        pastEvents.data.map(event => ({
          title: event.title,
          bannerUrl: event.bannerUrl,
          eventID: event.eventID
        })) : [];
        setEvents([...upcomingEventsList, ...pastEventsList])

    }
    getEventsData()
  }, [])
  useEffect(() =>{
    const getTeams = async () =>{
        const teamData = await getData("team/user/team")
        console.log(teamData)
        setTeams(teamData.data);
    }
    getTeams()
  }, [])
  console.log(teams)
  return (
    <>
      <Navbar1 />
      <Hero1 />
      <About />
      <Events slidesData={events}/>
      <Projects />
      <Team teamsData={teams}/>
      <Contact />
      {/* <Footer /> */}

    </>
  )
}

export default Homepage
