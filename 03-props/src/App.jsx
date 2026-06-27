import React, { StrictMode } from 'react'
import Card from './components/Card'

const jobs = [
  {
    company: "Amazon",
    posted: "5 days ago",
    title: "UX / UI Designer",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India"
  },
  {
    company: "Google",
    posted: "2 days ago",
    title: "Product Designer",
    level: "Mid Level",
    salary: "$95/hr",
    location: "Bangalore, India"
  },
  {
    company: "Microsoft",
    posted: "1 week ago",
    title: "UI Designer",
    level: "Senior Level",
    salary: "$110/hr",
    location: "Hyderabad, India"
  },
  {
    company: "Adobe",
    posted: "3 days ago",
    title: "UX Researcher",
    level: "Junior Level",
    salary: "$75/hr",
    location: "Pune, India"
  },
  {
    company: "Netflix",
    posted: "Today",
    title: "Product Designer",
    level: "Lead Level",
    salary: "$140/hr",
    location: "Remote"
  },
  {
    company: "Spotify",
    posted: "6 days ago",
    title: "Visual Designer",
    level: "Mid Level",
    salary: "$90/hr",
    location: "Delhi, India"
  },
  {
    company: "Airbnb",
    posted: "4 days ago",
    title: "Interaction Designer",
    level: "Senior Level",
    salary: "$125/hr",
    location: "Remote"
  },
  {
    company: "Meta",
    posted: "2 weeks ago",
    title: "UX Designer",
    level: "Lead Level",
    salary: "$150/hr",
    location: "Bangalore, India"
  },
  {
    company: "Apple",
    posted: "Yesterday",
    title: "Human Interface Designer",
    level: "Senior Level",
    salary: "$160/hr",
    location: "Hyderabad, India"
  },
  {
    company: "Figma",
    posted: "8 days ago",
    title: "UI / UX Designer",
    level: "Mid Level",
    salary: "$105/hr",
    location: "Remote"
  }
];
const App = () => {
  return (
    <div className='parentcard'>
    {jobs.map(function(arrval,idx){ 

      return <div key={idx}><Card company={arrval.company} posted={arrval.posted} title={arrval.title} level={arrval.level} salary={arrval.salary} location={arrval.location}></Card></div>
    })}
      
    </div>
  )
}

export default App

