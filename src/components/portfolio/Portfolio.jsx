import React from 'react'
import { Box, Container, Typography, useMediaQuery, Stack, IconButton } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import PortfolioImg from '../assets/Portfolio.jpg'
import commercial from '../assets/Bg-2.png'
import Industry from '../assets/Industry.jpg'
import Residental from '../assets/bg-7.png'
import Agrirculture from '../assets/AgricultureImg.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import 'swiper/css'
import 'swiper/css/pagination'

const Portfolio = () => {
  const isMobile = useMediaQuery('(max-width:900px)')

  const solutions = [
    {
      title: 'Commercial Solutions',
      image: commercial,
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.'
    },
    {
      title: 'Industry',
      image: Industry,
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.'
    },
    {
      title: 'Residential',
      image: Residental,
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.'
    },
    {
      title: 'Agriculture',
      image: Agrirculture,
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.'
    }
  ];

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
            backgroundImage: `url(${PortfolioImg})`,
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
        </Box>
      </Box>

      {/* Services Section */}
      <Box p={3} my={2} borderRadius={2} boxShadow={3} sx={{ bgcolor: '#A5c33c', py: 5 }}>
        <Container>
          <Typography variant="h5" fontWeight="bold" color="success.main" pb={3}>
            Services
          </Typography>
          <Typography variant="body1" paragraph>
            At Pantera Energy, We offer a comprehensive range of renewable energy solutions designed to meet the diverse needs of our clients.
            Whether you're looking to reduce your carbon footprint, achieve energy independence, or save on energy costs, our expert team is here to help you
            every step of the way
          </Typography>
        </Container>
      </Box>

      <Container sx={{ py: 4 }}>
        {isMobile ? (
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            loop={true}
            style={{
              '--swiper-pagination-color': '#A5c33c',
              '--swiper-pagination-bullet-inactive-color': '#999',
              '--swiper-pagination-bullet-inactive-opacity': '1',
              '--swiper-pagination-bullet-size': '10px',
              '--swiper-pagination-bullet-horizontal-gap': '6px'
            }}
          >
            {solutions.map((solution, index) => (
              <SwiperSlide key={index}>
                <Box sx={{ p: 2 }}>
                  <img
                    width="100%"
                    src={solution.image}
                    alt={solution.title}
                    style={{
                      borderRadius: '8px',
                      height: '200px',
                      objectFit: 'cover'
                    }}
                  />
                  <Typography sx={{
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    mt: 2,
                    color: 'text.primary'
                  }}>
                    {solution.title}
                  </Typography>
                  <Typography sx={{ mt: 1 }}>{solution.description}</Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 3
          }}>
            {solutions.map((solution, index) => (
              <Box key={index}>
                <img
                  width="100%"
                  src={solution.image}
                  alt={solution.title}
                  style={{
                    borderRadius: '8px',
                    height: '200px',
                    objectFit: 'cover'
                  }}
                />
                <Typography sx={{
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  mt: 2,
                  color: 'text.primary'
                }}>
                  {solution.title}
                </Typography>
                <Typography sx={{ mt: 1 }}>{solution.description}</Typography>
              </Box>
            ))}
          </Box>
        )}
      </Container>

      {/* footer */}
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

export default Portfolio;