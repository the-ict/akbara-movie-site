import React from 'react'
import Navbar from '../components/Navbar'
import SupportForm from '../components/SupportForm'
import Questions from '../components/Questions'
import Marketing from '../components/Marketing'

export default function Support() {
  return (
    <div>
      <Navbar />
      <SupportForm />
      <Questions />
      {/* <Marketing /> */}
    </div>
  )
}
