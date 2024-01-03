import './App.css'

function App() {
  const user = "Queen of Venus"

  const myJobs = ["3D Game Art" , "Front-end Development" , "Philosopher to Yourself" , "Psychologist for Best Friends" , "Despot Sister" , "Bad Joker" , "Unemployed of the Family" , "Blah Blah!!"]
  
  const myKnown = ["Blender 3D Art" , "HTML - CSS" , "JavaScript" , "React.js" , "SQL" , "Linux" , "Illsturator" , "Dreaming"]
  const mapKnown = myKnown.map((Known , j)=><li key={j}>{Known}</li>)

  

  const programs=[
    {id:1 , name:"Blender" , usability:true},
    {id:2 , name:"Adobe Photoshop" , usability:false},
    {id:3 , name:"Visual Studio Code" , usability:true},
    {id:4 , name:"Visual Studio" , usability:false},
    {id:5 , name:"Spotify" , usability:true},
    {id:6 , name:"Adobe Illsturator" , usability:true}

  ]

  return (
    <>
      {/* <img className='bg-img' src="1143833.jpg" alt="" /> */}

      {/* <div className='bg-img'> */}

        <div className='blog-header'>
            <h1>Chronicles of the {user}</h1>
        </div>

        <div className='aa'>
            <div>
                <h3>Who Am I?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quaerat! Ipsa libero minima totam, consequuntur dolor dolorem dignissimos corrupti illo!</p>
                  
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quaerat! Ipsa libero minima totam, consequuntur dolor dolorem dignissimos corrupti illo!</p>

                  <hr />

                <h3>What am I doing now?</h3>
                
                    <ul>
                      {myJobs.map((Jobs , i)=><li key={i}>{Jobs}</li>)}
                    </ul>
                  
                  <hr />

                <h3>Which programs can I use?</h3>
                    
                    <ul>
                      {
                        programs
                        .filter(prog=>prog.usability==true)
                        .map(prog=><li key={prog.id}>{prog.name}</li>)
                      }
                    </ul>





            </div>

            <div>
                
                <h3>What can I know?</h3>
                <div className='reslist'>
                    <img src="https://media.giphy.com/media/vTxWtmX2b0oH6/giphy.gif" alt="" />
                    <ul>
                    {mapKnown}
                    </ul>
                </div>

                <hr />

                <h3>Which programs cant I use?</h3>
                      
                    <ul>
                      {
                        programs
                        .filter(prog=>prog.usability==false)
                        .map(prog=><li key={prog.id}>{prog.name}</li>)
                      }
                    </ul>
                    
                    <h3>Did I mention I am very aggressive when I am hungry?</h3>      
                      <GifCall/>   

            </div>
        </div>


      {/* </div> */}
    </>
  )
}

function GifCall() {

  return (

    <img src="https://media.giphy.com/media/GjR6RPcURgiL6/giphy.gif" style={{padding:"4px",margin:0,borderRadius:"3px",border:"1px solid #fff"}}/>

  )

}

export default App
