import React from 'react'

export default function Home() {
    return (
        <>
            <div
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: '#fff',
                    textAlign: 'center'
                }}
            >
                <h1 style={{color: 'black'}}>Mern Stack Developer</h1>
                <p style={{color: 'black'}}>"Opportunities don't happen, you create them"</p>
                <a href="https://www.linkedin.com/in/muhammad-abdullah-08b0b81b0/" target="_blank" rel="noopener noreferrer">
                    <button style={{ backgroundColor: 'orange', color: '#fff', borderRadius: '8px', padding: '12px 24px', marginTop: '20px', border: 'none' }}>
                        <i style={{ marginRight: '8px' }}></i>
                        Connect on LinkedIn
                    </button>
                </a>
            </div>

        </>
    )
}
