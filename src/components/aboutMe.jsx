import React from 'react'

function aboutMe() {
  return (
    <div>
        <div className="container mt-5 bg-light rounded p-2 " style={{boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}>
            <h2 className="text-center text-info">About Me</h2>
            <p className="text-center" style={{ fontSize: '1.2rem' }}>
            Hello everyone! <strong>I am Koemchhoeurn Bundet</strong>. I am a M1 junior student at <strong>Royal University of Phnom Penh</strong>
            , majoring in Computer Science. I have a passion for web development and enjoy creating user-friendly applications.
            </p>
            <p className='text-center' style={{ fontSize: '1.2rem' }}>
                This project is a <strong>product management system</strong> that allows users to add, edit, and delete products. It is built using React for the frontend 
                and PHP Slim for the backend. The project is designed to be some responsive and user-friendly.
            </p>
            <p className="text-center" style={{ fontSize: '1.2rem' }}>
            In my free time, I like to explore new programming languages, contribute to open-source projects, and share my knowledge with others.
            I am always eager to learn and improve my skills. If you have any questions or would like to connect, feel free to reach out!
            </p>
        </div>
    </div>
  )
}

export default aboutMe