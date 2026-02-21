import Card from './Components/Card'

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2sSeQqjaUTuZ3gRgkKjidpaipF_l6s72lBw&s",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy8ivjh3jEgWs6uv7DMzADcxPcFaWP00H1hQ&s",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShBu0cnozmDr454aSmHhedZltGVgU8fTfZwA&s",
    companyName: "Microsoft",
    datePosted: "10 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8WU0Emt19dyXiCPIuhVtxIFbqx13mkj54hA&s",
    companyName: "Amazon",
    datePosted: "3 weeks ago",
    post: "Cloud Support Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://s3-alpha.figma.com/hub/file/5388452724/888ad143-5a02-49cc-8642-f94240b67589-cover.png",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$60/hour",
    location: "Remote, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/020/336/373/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqHlDU3o1OK5s0UtAZgpJDbMUremv6_Xds6g&s",
    companyName: "NVIDIA",
    datePosted: "6 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYDEXuBIhUSRBG1gfGSw6I6dWZm-GGNCah2g&s",
    companyName: "Adobe",
    datePosted: "8 days ago",
    post: "UI/UX Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$50/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM6ZI48oqZNxusiEzG7CzV4hUmPOgUgXxsVw&s",
    companyName: "Tesla",
    datePosted: "1 month ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hour",
    location: "Delhi, India"
  }, 
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnM8U7Fu9UbOMCakFdEen8a8sl_EavE10XHw&s",
    companyName: "Uber",
    datePosted: "12 days ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hour",
    location: "Gurgaon, India"
  }
];
  return (
    <div className='parent'>
        {jobOpenings.map(function(ele,idx){
        return(
        <div key={idx}> 
        <Card company={ele.companyName} brandLogo={ele.brandLogo} datePosted={ele.datePosted} location={ele.location} pay={ele.pay} post={ele.post} tag1={ele.tag1} tag2={ele.tag2} />
        </div>
            )})}
      
    </div>
    
  )
}

export default App