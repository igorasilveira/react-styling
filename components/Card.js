import React from 'react'

export default function Card() {
    return (
        <div style={{
            width: '33.33%',
            boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)',
            borderRadius: '0.375rem',
            paddingTop: '1.25rem',
            paddingBottom: '1.25rem',
            paddingLeft: '0.75rem',
            paddingRight: '0.75rem',
            margin: '1rem',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{
                flex: 'none'
            }}>
                <img src="avatar.png" style={{
                    height: '7rem',
                    width: '7rem'
                }} />
            </div>
            <div style={{
                padding: '0.75rem'
            }}>
                <p style={{
                    color: 'rgba(59,130,246,1)',
                    lineHeight: '1.75rem',
                    fontSize: '1.125rem',
                    fontWeight: 700,
                }}>Jhon Snow</p>
                <span style={{
                    fontStyle: 'italic',
                    color: 'rgba(55,65,81,1)',
                    fontSize: '1rem',
                    lineHeight: '1.5rem',
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
        </div>
    )
}
