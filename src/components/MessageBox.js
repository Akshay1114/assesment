import React from 'react'
import Card from './Ui/Card'
import ComposeMessage from './Ui/ComposeMessage'
import Footer from './Ui/Footer'
import Header from './Ui/Header'

function MessageBox() {
   
    return (
       <Card>
           <Header/>
            <ComposeMessage />
            <Footer />
       </Card>
    )
}

export default MessageBox
