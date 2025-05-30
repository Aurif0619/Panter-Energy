import React from 'react'
import { Box, Button, Container, Typography, Grid, useTheme, Stack, IconButton } from '@mui/material'
import { GlobalStyles } from '@mui/system'
import GroupImg from '../assets/group-Img.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import useMediaQuery from '@mui/material/useMediaQuery'
import Ammar from '../assets/Aamir.jpg'
import Bilal from '../assets/Bilal Zia.jpg'
import Misha from '../assets/Mishma Waseem.jpg'
import Israr from '../assets/Muhammad Israr.jpg'
import Talha from '../assets/Muhammad Talha.jpg'
import Tayyab from '../assets/Tayyab Ameen.jpg'
import Shameen from '../assets/Shameen.jpg'
import Sabih from '../assets/Sabi Ahmed.jpeg'
import Alkhamash from '../assets/Alkhamash.jpeg'
import Faraha from '../assets/Faraha.jpg'
import Waseel from '../assets/Muhammad Waseel.jpg'
import Imran from '../assets/Imran Arif.jpeg'
import Amar from '../assets/Muhammad Amar.jpeg'
import Muhammad from '../assets/Muhammad Bin Mohuddin.jpeg'
import Armeen from '../assets/Armeen Haroon.jpg'
import Sharjeel from '../assets/Sharjeel.jpeg'
import Salman from '../assets/Muhammad Salman.jpeg'
import Shumaila from '../assets/Shumaila.jpeg'
import Zain from '../assets/Zain Khalid.jpeg'
import Bazil from '../assets/Bazil Khan.jpeg'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const OurTeam = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:900px)')
  const teamMembers = [
    {
      name: 'AMMAR MEHMOOD',
      image: Ammar,
    },
    {
      name: 'BILAL ZIA',
      image: Bilal,
    },
    {
      name: 'MISHA WASEEM',
      image: Misha,
    },
    {
      name: 'MUHAMMAD ISRAR',
      image: Israr,
    },
    {
      name: 'MUHAMMAD TALHA',
      image: Talha,
    },
    {
      name: 'TAYYAB AMEEN',
      image: Tayyab,
    },
    {
      name: 'SHAMEEN RAFAQAT',
      image: Shameen,
    },
    {
      name: 'SABIH AHMED',
      image: Sabih,
    },
    {
      name: 'ALKHAMASH BIN JAVED',
      image: Alkhamash,
    },
    {
      name: 'FARAHA BALOCH',
      image: Faraha,
    },
    {
      name: 'MUHAMMAD WASEEL',
      image: Waseel,
    },
    {
      name: 'IMRAN ARIF',
      image: Imran,
    },
    {
      name: 'MUHMMAD AMMAR',
      image: Amar,
    },
    {
      name: 'ARMEEN HAROON',
      image: Armeen,
    },
    {
      name: 'SHARJEEL SARWAR',
      image: Sharjeel,
    },
    {
      name: 'MUHAMMAD SALMAN',
      image: Salman,
    },
    {
      name: 'MUHAMMAD BIN MOHUIDDIN',
      image: Muhammad,
    },
    {
      name: 'SHUMAILA SHER AFGHEN',
      image: Shumaila,
    },
    {
      name: 'ZAIN KHALID',
      image: Zain,
    },
    {
      name: 'BAZIL KHAN',
      image: Bazil,
    },
  ]

  return (
    <>
      <Box sx={{ position: 'relative', height: '100vh' }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${GroupImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            textAlign: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            p: 3,
          }}
        >
          <Button variant="contained" color="success" size="large" sx={{ fontWeight: 'bold', px: 6, py: 2, fontSize: '1.2rem' }}>
            CONTACT US
          </Button>
        </Box>
      </Box>

      <Box p={3} borderRadius={2} boxShadow={3} sx={{ bgcolor: '#A5c33c' }}>
        <Container>
          <Typography variant="h5" fontWeight="bold" color="success.main">
            Our Team
          </Typography>
          <Typography variant="body1" paragraph>
            At Pantera Energy, our team is the backbone of our success. Comprised of passionate and skilled professionals,
            we are committed to driving innovation and delivering exceptional renewable energy solutions.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: 6, textAlign: 'center', px: 2 }}>
        <GlobalStyles
          styles={{
            '.swiper-button-prev, .swiper-button-next': {
              color: theme.palette.success.main,
            },
          }}
        />

        {isMobile ? (
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: 3,
                    cursor: 'pointer',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.02)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={member.image}
                    alt={member.name}
                    sx={{ width: '100%', height: 300, objectFit: 'cover' }}
                  />
                  <Box
                    sx={{
                      backgroundColor: '#3E7D32',
                      color: '#fff',
                      p: 2,
                    }}
                  >
                    <Typography fontWeight="bold">{member.name}</Typography>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Grid container spacing={3} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: 3,
                    cursor: 'pointer',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.03)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={member.image}
                    alt={member.name}
                    sx={{ width: '100%', height: 300, objectFit: 'cover' }}
                  />
                  <Box
                    sx={{
                      backgroundColor: '#3E7D32',
                      color: '#fff',
                      p: 2,
                    }}
                  >
                    <Typography fontWeight="bold">{member.name}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>

      <Box component="footer"
        sx={{
          backgroundColor: '#3E7D32',
          color: 'white',
          pt: 6,
          pb: 3,
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Typography variant="body2" sx={{ mb: 2 }}>
          © 2024 All rights reserved.
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center">
          {[FacebookIcon, InstagramIcon, TwitterIcon, YouTubeIcon].map((Icon, i) => (
            <IconButton
              key={i}
              sx={{
                backgroundColor: 'white',
                color: '#3E7D32',
                borderRadius: '50%',
                '&:hover': {
                  backgroundColor: '#c5e1a5',
                },
                width: 40,
                height: 40,
              }}
            >
              <Icon fontSize="small" />
            </IconButton>
          ))}
        </Stack>
      </Box>
    </>
  )
}

export default OurTeam;