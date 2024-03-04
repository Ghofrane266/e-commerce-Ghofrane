import React from 'react'

function Footer({isOpen}) {
    return (
        <div style={{ backgroundColor:"#E8E8E8",position: 'fixed', height: 70, width: "100%", bottom: 0, paddingLeft: isOpen ? 300 : 0}}>
            Footer
        </div>
    )
}

export default Footer