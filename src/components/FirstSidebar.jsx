import '../index.css'
import '../styles/styles.css'
import { MailOpen , Settings, Users, LogOut, CalendarRange, MailQuestion, Trash, Phone, Presentation, Archive, PanelLeftClose } from "lucide-react";
import { Button } from "./ui/button";

const firstSidebar = () => {
  const elements =[
    {"Inbox": <MailOpen color="#38b6ff" className='h-6 w-6'/>},
    {"Group":<Users color="#38b6ff"/>},
    {"Calender": <CalendarRange color="#38b6ff"/>},
    {"Call": <Phone color="#38b6ff"/>},
    {"Meet": <Presentation color="#38b6ff"/>},
    {"Message Requests": <MailQuestion color="#38b6ff"/>},
    {"Archived": <Archive color="#38b6ff"/>},
    {"Recycle Bin": <Trash color="#38b6ff"/>},
    {"Settings": <Settings color="#38b6ff"/>},


  ]
  return (
    <>
      <div className="flex flex-col h-screen w-64  bg-white text-black p-4 mt-0.5 shadow-sm">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between mb-4 mt-4">
          <h1 className="roboto-300 text-2xl">Applications</h1>
          <span className=""><PanelLeftClose /></span>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex flex-col flex-grow">
          {elements.map((element, index) => {
            return (
              <Button key={index} variant="ghost" className="w-full justify-start mt-4 hover:bg-blue-100">
                {Object.values(element)[0]}
                <p className='roboto-mono-300 pl-2'>{Object.keys(element)[0]}</p>
              </Button>
            )
          })}
        </nav>
        <div className="mt-auto">
          <Button variant="ghost" className="w-full justify-start ">
            <LogOut className="mr-2 h-4 w-4" color="#38b6ff"/>
            Logout
          </Button>
        </div>
      </div>
    </>
  )
}

export default firstSidebar
