import React from 'react'
import { Box} from '@mui/system'
import { Container } from '@mui/system'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button';
import Logo from './logo.png' ;
import Image from './recruitment.png' ;
import Image2 from './recruitment2.png' ;
import Image3 from './gallery.png' ;
import Image4 from './benefits.png';
import Image5 from './BANGLADESH.jpg';
import Image6 from './UK.jpg';
import Image7 from './USA.jpg';
import Image8 from './TURKEY.jpg';
import Bg from './backgroud.jpg';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';



export default function myapp() {
  return (
    <dev>
    <Box sx={{minHeight:"64px",backgroundColor:"#182F59"}}>
        
        <Container maxWidth={'xxl'}>
            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:"15px 0px"}}>
            <Box  display="flex" gap="4px">
            <img src={Logo} alt="" style={{width:'50px',height:'50px'}}/>
            <Box   >
                <Typography color="white" fontWeight="bold">
                    TechForing
                </Typography>
                <Typography color="white" fontSize="14px">
                    Shaping Tommorows Cybersecurity
                </Typography>
            </Box>

          
            
        </Box>
        <Box display="flex" gap="10px">
            <Button variant="outlined" sx={{border:'1px solid rgb(255, 255, 255)',color:'white'}}>SIGN IN</Button>
            <Button variant="contained" sx={{backgroundColor:"#5BBC2E",padding:'0px 20px'}} disableElevation>SIGN UP</Button> 

            </Box>
            </Box>
       
        </Container>
        
    </Box>


    <Box
     sx={{position:'relative',height:"500px",width:'100%'}}
    > 
       <Box sx={{position:"absolute",top:'28%',left:'50%',transform:'translate(-50%, -50%)'}}>
          <Typography fontSize="34px" fontWeight='bold' color="white">
              WORK AT TECHFORING LIMITED
          </Typography>
          <Typography sx={{textAlign:'center',color:'white'}}>
          Turn your passion into a career


          </Typography>
      </Box>

        <img src={Bg} alt="" style={{height:'500px',width:'100%'}}/>
       <Box sx={{position:"absolute",top:'50%',left:'50%',transform:'translate(-50%, -50%)'}}>
      <Box>
      <TextField sx={{backgroundColor:'white',width:'650px',borderRadius:'12px'}} id="outlined-basic"  variant="outlined" placeholder='search' />
      <SearchIcon sx={{position:'absolute',right:'40px',top:'18px'}}/>
      </Box>
      <Box mt={2} px={10} display="flex" gap="2px">
           <span style={{backgroundColor:"#fff",borderRadius:'5px',padding:'4px',marginRight:'10px',color:'rgba(0, 0, 0, 0.68)'}}>
               Jr. Cyber Security Engineer
           </span>
            <span style={{backgroundColor:"#fff",marginRight:'10px',borderRadius:'5px',padding:'4px',color:"rgba(0, 0, 0, 0.68)"}}>
              Sales Executive
           </span> 
           <span style={{backgroundColor:"#fff",marginRight:'10px',borderRadius:'5px',padding:'4px',color:'rgba(0, 0, 0, 0.68)'}}>
              Content Writer
           </span> 
           
       </Box>
       <Box mt={1} px={18} display="flex" gap="2px">
           <span style={{backgroundColor:"#fff",borderRadius:'5px',padding:'4px',marginRight:'10px',color:'rgba(0, 0, 0, 0.68)'}}>
               Sales Manager
           </span>
            <span style={{backgroundColor:"#fff",marginRight:'10px',borderRadius:'5px',padding:'4px',color:"rgba(0, 0, 0, 0.68)"}}>
              HR Admin
           </span> 
           <span style={{backgroundColor:"#fff",borderRadius:'5px',padding:'4px',color:"rgba(0, 0, 0, 0.68)"}}>
              Accountant
           </span> 
           
       </Box>
       </Box>
       
      
    </Box>


     
   
    <Box mt={10} px={5}>
     <Container maxWidth="lg">
        <Typography textAlign="center" color="#5BBC67" fontWeight="bold" pt={2}>
          BROWSE OPEN POSITIONS BY CATEGORY
         </Typography>

        <Typography textAlign="center" fontWeight='bold' fontSize="20px">
          We are always on the lookout for talanted people
        </Typography>
      </Container>

            <Box mt={4} px={5} sx={{backgroundColor:'white'}}>
             <Container maxWidth="lg">
                <Button  sx={{backgroundColor:'white',width:'1224px',borderRadius:'12px'}} variant="outlined" textAlign="left"> Sales & Marketing</Button>
             </Container>
             </Box>


             <Box mt={4} px={5} sx={{backgroundColor:'white'}}>
             <Container maxWidth="lg">
                <Button  sx={{backgroundColor:'white',width:'1224px',borderRadius:'12px'}} variant="outlined" textAlign="left"> Digital Marketing</Button>
             </Container>
             </Box>

             <Box mt={4} px={5} sx={{backgroundColor:'white'}}>
             <Container maxWidth="lg">
                <Button  sx={{backgroundColor:'white',width:'1224px',borderRadius:'12px'}} variant="outlined" textAlign="left"> Human Resource</Button>
             </Container>
             </Box>
                
             <Box mt={4} px={5} sx={{backgroundColor:'white'}}>
             <Container maxWidth="lg">
                <Button  sx={{backgroundColor:'white',width:'1224px',borderRadius:'12px'}} variant="outlined" textAlign="left"> Administration</Button>
             </Container>
             </Box>

             <Box mt={4} px={5} sx={{backgroundColor:'white'}}>
             <Container maxWidth="lg">
                <Button  sx={{backgroundColor:'white',width:'1224px',borderRadius:'12px'}} variant="outlined" textAlign="left"> Development</Button>
             </Container>
             </Box>

             <Box mt={4} px={5} sx={{backgroundColor:'white'}}>
             <Container maxWidth="lg">
                <Button  sx={{backgroundColor:'white',width:'1224px',borderRadius:'12px'}} variant="outlined" textAlign="left"> Engineering</Button>
             </Container>
             </Box>
    </Box>
    


    <Box mt={10} px={5}sx={{backgroundColor:'#F4F4F4'}}>
  <Container maxWidth="lg">
      <Typography textAlign="center" color="#5BBC67" fontWeight="bold" pt={2}>
      LIFE AT TECHFORING

      </Typography>
      <Typography textAlign="center" fontWeight='bold' fontSize="20px">
      Get your chance to work with the coolest cyber-tech companies around

      </Typography>
  <Box sx={{display:'flex',justifyContent:'center',marginTop:"10px"}}>
  <img src={Image} alt="" />
  </Box>

  <Box mt={10}>
        <Container maxWidth="lg">
           <img src={Image2} alt="" />
        </Container>
        
    </Box>



    

  </Container>
  
  </Box>

  <Box mt={10} px={5}sx={{backgroundColor:'#FFFFFF'}}>
  <Container maxWidth="lg">
      <Typography textAlign="center" color="#5BBC67" fontWeight="bold" pt={2}>
      Shaping Tomorrow's Cybersecurity
    </Typography>

    <Typography textAlign="center" color="black" fontSize={30} fontWeight="bold" pt={2}>
    Lets make it happen
    </Typography>


      <Typography textAlign="center" fontWeight='bold' fontSize="20px">
      It doesn't matter where you are from, how you look, or any other aspect about yourself. If you are passionate about what you do, we can't wait to meet you

      </Typography>
  <Box sx={{display:'flex',justifyContent:'center',marginTop:"10px"}}>
    <Container>

  <img src={Image3} alt="" style={{height:'350px',width:'30%',gap:'5px',margin:"10px"}} />
  <img src={Image3} alt="" style={{height:'350px',width:'30%',gap:'5px',margin:"10px"}} />
  <img src={Image3} alt="" style={{height:'350px',width:'30%',gap:'5px',margin:"10px"}} />
  </Container>
  </Box>


  </Container>
  </Box>

    <Box>
    <Container maxWidth="lg" >
          <Box mt={10}>
          <Typography textAlign="center" fontWeight="bold" fontSize="30px">OUR CULTURE</Typography>
     <Box mt={5} display="flex" justifyContent="space-evenly">
       <Box>
       <Box display="flex" alignItems='center' gap="5px" mb={1}>
           <Box sx={{height:'15px',width:'15px',backgroundColor:'#5BBC2E',borderRadius:'50%'}}>

           </Box>
           <Typography color="rgb(0, 0, 0)" fontSize="14px" fontWeight="bold">We are on a missino in shaping tomorrow’s cybersecurity.

</Typography>
       </Box>
       <Box display="flex" alignItems='center' gap="5px" mb={1}>
           <Box sx={{height:'15px',width:'15px',backgroundColor:'#5BBC2E',borderRadius:'50%'}}>

           </Box>
           <Typography color="rgb(0, 0, 0)" fontSize="14px" fontWeight="bold">We save lives by protecting data and preventing cybercrimes.


</Typography>
       </Box>
       <Box display="flex" alignItems='center' gap="5px" mb={1}>
           <Box sx={{height:'15px',width:'15px',backgroundColor:'#5BBC2E',borderRadius:'50%'}}>

           </Box>
           <Typography color="rgb(0, 0, 0)" fontSize="14px" fontWeight="bold">We work hard, we prefer quality over quantity.


</Typography>
       </Box>
       
       </Box>
       <Box>
       <Box display="flex" alignItems='center' gap="5px" mb={1}>
           <Box sx={{height:'15px',width:'15px',backgroundColor:'#5BBC2E',borderRadius:'50%'}}>

           </Box>
           <Typography color="rgb(0, 0, 0)" fontSize="14px" fontWeight="bold">We push everyone to their limits to help them grow professionally.


</Typography>
       </Box>
       <Box display="flex" alignItems='center' gap="5px" mb={1}>
           <Box sx={{height:'15px',width:'15px',backgroundColor:'#5BBC2E',borderRadius:'50%'}}>

           </Box>
           <Typography color="rgb(0, 0, 0)" fontSize="14px" fontWeight="bold">We always have time for a cup of coffee to keep a healthy relationship.




</Typography>
       </Box>
       <Box display="flex" alignItems='center' gap="5px" mb={1}>
           <Box sx={{height:'15px',width:'15px',backgroundColor:'#5BBC2E',borderRadius:'50%'}}>

           </Box>
           <Typography color="rgb(0, 0, 0)" fontSize="14px" fontWeight="bold">We never mix work life with our personal lives.



</Typography>
       </Box>
       
       </Box>
     </Box>
          </Box>
      
      </Container>

    </Box>

    <Box>
    <Container maxWidth="lg">
<Box mt={8}>
        <Typography mb={5} textAlign="center" fontWeight="bold" fontSize="30px">EMPLOYEE BENEFITS</Typography>

        <Box display="flex" mt={4} gap="20px" justifyContent="space-between" mb={5}>
            <Box display="flex" gap="10px">
                <img src={Image4} alt="" />
                <Box>
                <Typography fontWeight="bold" fontSize="14px">Providend Funds</Typography>
                    <Typography textAlign="justify">A small amount of your basic monthly pay is contributed to your retirement fund.

</Typography>
                </Box>
            </Box>
            <Box display="flex" gap="10px">
                <img src={Image4} alt="" />
                <Box>
                    <Typography fontWeight="bold" fontSize="14px">Providend Funds</Typography>
                    <Typography>A small amount of your basic monthly pay is contributed to your retirement fund.

</Typography>
                </Box>
            </Box>
            <Box display="flex" gap="10px">
                <img src={Image4} alt="" />
                <Box>
                <Typography fontWeight="bold" fontSize="14px">Providend Funds</Typography>
                    <Typography>A small amount of your basic monthly pay is contributed to your retirement fund.

</Typography>
                </Box>
            </Box>
            
        </Box>
        <Box  display="flex" mt={4} gap="20px" justifyContent="space-between">
            <Box display="flex" gap="10px">
                <img src={Image4} alt="" />
                <Box>
                <Typography fontWeight="bold" fontSize="14px">Providend Funds</Typography>
                    <Typography>A small amount of your basic monthly pay is contributed to your retirement fund.

</Typography>
                </Box>
            </Box>
            <Box display="flex" gap="10px">
                <img src={Image4} alt="" />
                <Box>
                    <Typography fontWeight="bold" fontSize="14px">Providend Funds</Typography>
                    <Typography>A small amount of your basic monthly pay is contributed to your retirement fund.

</Typography>
                </Box>
            </Box>
            <Box display="flex" gap="10px">
                <img src={Image4} alt="" />
                <Box>
                <Typography fontWeight="bold" fontSize="14px">Providend Funds</Typography>
                    <Typography>A small amount of your basic monthly pay is contributed to your retirement fund.

</Typography>
                </Box>
            </Box>
            
        </Box>

    </Box>
      </Container>

    </Box>

    <Box mt={8}>
        <Container>
        <Typography mb={5} textAlign="center" fontWeight="bold" fontSize="30px">OUR LOCATION'S
        </Typography>


            <Container>
        
        <img src={Image5} alt="" style={{height:'350px',width:'47%',gap:'5px',margin:"15px",borderRadius:"20px"}} />


        <img src={Image6} alt="" style={{height:'350px',width:'47%',gap:'5px',margin:"15px", borderRadius:"20px"}} />
            </Container>
                
            
        </Container>
    </Box>

    <Box>
        <Container>
        
        <img src={Image7} alt="" style={{height:'350px',width:'47%',gap:'5px',margin:"15px",borderRadius:"20px"}} />


        <img src={Image8} alt="" style={{height:'350px',width:'47%',gap:'5px',margin:"15px", borderRadius:"20px"}}
                
                />
            </Container>
                
    </Box>

    <Box>
    <img src={Image} alt="" style={{height:'500px',width:'98%',gap:'5px',margin:"15px"}}/>
    </Box>

    <Box mt={10} px={5}sx={{backgroundColor:'#182F59'}} style={{ width:'98%'}} >
       <dev>
    <Typography textAlign="left" fontSize="20px" color={'#FFFFFF'}>Company
        </Typography>
    
        <Typography textAlign="center" fontSize="20px" color={'#FFFFFF'}>Company
        </Typography>

        <Typography textAlign="right" fontSize="20px" color={'#FFFFFF'}>Company
        </Typography>
       </dev>
        </Box>
    
    

    </dev>

  )
}
