import Header from "./components/header";
import Entry from "./components/entry";
import data from "./data";




export default function App(){
  const spec_data = data.map(data =>{
    return <Entry id= {data.id}title={data.title} country={data.country} img={{src:data.img.src,alt:data.img.alt}} googleMapsLink={data.googleMapsLink} dates={data.dates} text={data.text} />
  })
  return(
    <>
    <Header />
    <main className="entry-wrapper">
  
  {spec_data}



    </main>
    </>
  )
}

