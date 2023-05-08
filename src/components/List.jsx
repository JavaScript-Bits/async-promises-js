import React,{useEffect,useState} from 'react'

const PlainList = ({title,data}) => {

    const [listData, setListData] = useState([])
   const [investmentsPageTable, setInvestmentsPageTable] = useState(1)
   const resultsPerPage = 6
   const totalResults = data.length
 
   useEffect(() => {
     setListData(data.slice((investmentsPageTable - 1) * resultsPerPage, investmentsPageTable * resultsPerPage))
 }, [data,investmentsPageTable])
 
   function onPageChangeInvestmentsTable(p) {
     setInvestmentsPageTable(p)
    }
 
     const styles={
         cardDetailsContainer: `
         p-4
         grid 
         gap-2 
         grid-cols-1
         divide-y
         divide-gray-200
         `,
         farmsTable:`
         bg-white
         dark:bg-gray-700
         pt-4
         mb-2
         mt-4
          `,
         smalltext:`
         mt-2
         text-sm
          text-gray-600 dark:text-gray-200
         
         `,
         headerText:`
         ml-8
         mb-2
         text-base font-semibold
         text-gray-600 dark:text-gray-200
         `
     }
 
     return (
         <ul className={styles.farmsTable} >
         <li className='border-b'>
         <h2 className={styles.headerText}>{title}</h2>
      
         </li>
         {listData.map((items,index)=>(
         <li className='flex flex-col md:flex-row md:items-center md:justify-between p-4 border-b gap-6' 
         key={index}  >
          
         <h3 className='font-semibold text-base text-gray-600 dark:text-gray-300 '>{items.col1}</h3>
       
         <h3 className={styles.smalltext}>{items.col2}</h3>
  
        
         
 
         <h3 className='text-right  text-thin font-semibold mr-4 dark:text-gray-200 '>{items.col3}</h3>
         </li>
         ))}
       
  
      
       </ul>
      
       );
 }
  
 export default PlainList;
 