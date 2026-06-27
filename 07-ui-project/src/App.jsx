import React from 'react'
import Bottomsection from './components/BottomSection/Bottomsection'
import Topsection from './components/TopSection/Topsection'
const App = () => {

const users = [
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop",
    intro: "Building meaningful connections through creativity, kindness, passion, and shared experiences together.",
    color: "blue",
    tag: "Satisfied",
  },
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop",
    intro: "Always exploring new ideas while inspiring everyone around with positivity daily.",
    color: "lightgreen",
    tag: "Happy",
  },
  {
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop",
    intro: "Dreaming big every day and turning ambitions into remarkable achievements consistently.",
    color: "orange",
    tag: "Creative",
  },
  {
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop",
    intro: "Focused on growth embracing challenges learning continuously and celebrating every milestone.",
    color: "purple",
    tag: "Focused",
  },
  {
    img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop",
    intro: "Finding joy in simple moments creating unforgettable memories with loved ones.",
    color: "pink",
    tag: "Inspired",
  },
  {
    img: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=500&auto=format&fit=crop",
    intro: "Confidence grows stronger through persistence dedication resilience patience and unwavering determination.",
    color: "teal",
    tag: "Confident",
  },
  {
    img: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=500&auto=format&fit=crop",
    intro: "Professional mindset delivering excellence through innovation teamwork integrity and consistent results.",
    color: "gold",
    tag: "Professional",
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop",
    intro: "Motivated individuals achieve extraordinary success by believing working adapting and persevering together.",
    color: "red",
    tag: "Motivated",
  },
  {
    img: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=500&auto=format&fit=crop",
    intro: "Energy and enthusiasm inspire better collaboration stronger relationships and lasting positive impact.",
    color: "cyan",
    tag: "Energetic",
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop",
    intro: "Friendly conversations build trust encourage collaboration strengthen communities and spread genuine happiness.",
    color: "slateblue",
    tag: "Friendly",
  },
];
  return (
    <div>
    <Topsection />
    <Bottomsection users={users} />
    </div>
  )
}

export default App
