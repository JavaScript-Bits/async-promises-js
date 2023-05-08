import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useFetchData from './hooks/useFetchData'
import PlainList from './components/List'

function App() {
 
const [users, setUsers] = useState([]);
// this is a custom hook calling
  const {getData}=useFetchData()
  const endpoint='https://randomuser.me/api/'
  const params={
    results:4,
    inc:'name ,email,gender,phone, picture,cell,id,registered,login'
}
  
  // await
  async function fetchData(callbackFunc ) {
    try{
    const response = await fetch( endpoint); // use fetch to get data from an API
    const data =  await response.json(); // wait for the response to resolve and parse the JSON data
    // handle the data
    console.log(data)
    const profile=data?.results?.map((items)=>{
      return{
      //  icon:items.picture.medium,
        col3: items.email,
        col1:items.name.first + '' + items.name.last,
        col2:items.phone,
       }  
    })
    callbackFunc(data.results)
   return  setUsers(profile) 
  }catch(error) {
    console.error(error);
   }
    callbackFunc(data.results)
  }

  //promises
  const fetchThroughPromise=()=>{
  
    getData(endpoint,params)
    .then(res=> {
    //  console.log(res)
      const profile=res.results?.map((items)=>{
        return{
        //  icon:items.picture.medium,
          col3: items.email,
          col1:items.name.first + '' + items.name.last,
          col2:items.phone,
         }  
      })
     
      setUsers(profile) 
      })
    .catch(err=>console.log(err))
  }

  //callback function
  function addToAge(data){
      console.log(data);
      const arr=[]
     data.map(item=>{
      arr.push( item.registered.age + 5)
     })
    return  console.log(arr)
  }
 


  return (
    <div className='w-screen h-screen bg-white flex justify-center items-center '>
    
      <div className='flex flex-col gap-8'>
         <button onClick={()=>fetchData( addToAge )}>
          awaits
        </button>
        <button onClick={fetchThroughPromise}>
          promises
        </button>
      
        <PlainList data={users}/>
      </div>
      
    </div>
  )
}

export default App;
 //    profiles.forEach(element => {
    //        profile.push({
    //           key: element.login.uuid,
    //           col1: `${element.name.first} ${element.name.last}`,
    //           col2: element.email,
    //           phone: element.phone,
    //           avatar: element.picture.medium,
    //           date: element.registered.date

    //        })
