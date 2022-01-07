import React, { useState } from 'react'
import Card from './Ui/Card'
import ComposeMessage from './Ui/ComposeMessage'
import Footer from './Ui/Footer'
import Header from './Ui/Header'

function MessageBox() {
    const [showData, setData] = useState()
   const postHandle = (data) =>{
       console.log(data)
       setData(data)
   }
    return (
        <>
       <Card>
           <Header/>
            <ComposeMessage postHandle={postHandle} />
            {/* <Footer postHandle={postHandle} /> */}
       </Card>
       </>
    )
}

export default MessageBox
