import React from 'react'

function Footer() {
    const footerStyle = {
        position: "relative",
        width: "100%",
        top:"20vh"

    }
    return (
        <footer className="bg-dark text-light text-center py-1" style={footerStyle}>
            <p> Copyright &copy; Deepak Shukla </p>
        </footer>
    )
}

export default Footer
