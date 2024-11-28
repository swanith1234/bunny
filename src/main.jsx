import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App userData={{"name":"bunny","emailId":"bunny@gmail.com","phoneNo":"113456789","projects":[{"title":"smac","description":"swanith","technologiesUsed":[],"_id":"67487e3583eb94e5c6c2eab1"}],"resume":"","experiences":[{"companyName":"think","role":"think","description":"thik","technologiesUsed":[],"duration":"6 months","_id":"67487e3583eb94e5c6c2eab2"}],"techStacks":[],"contactDetailsUrls":[],"codingProfilesUrls":[],"certificationsUrls":[],"achievements":[{"title":"chakri","description":"chakkkkkkri","_id":"67487e3583eb94e5c6c2eab3"}],"about":"chakkkkkkkkkri","profilePhoto":"","_id":"67487e3583eb94e5c6c2eab0","createdAt":"2024-11-28T14:29:09.073Z","updatedAt":"2024-11-28T14:29:09.073Z","__v":0}} />
  </StrictMode>,
)
