import React from 'react';
import { Box, Button, Typography, IconButton, Stack, useTheme, useMediaQuery, Container, Grid, Card, CardContent } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SolarPlate from '../assets/SolarPlate.jpeg';
import SolarCommercial from '../assets/Bg-2.png';
import SolarIndustrial from '../assets/Industry.jpg';
import SolarResidential from '../assets/bg-7.png';
import SolarAgriculture from '../assets/AgricultureImg.jpg';

const ServiceCard = ({ service }) => (
    <>
        <Card
            sx={{
                height: '100%',
                borderRadius: 2,
                boxShadow: 3,
                transition: 'transform 0.3s',
                '&:hover': {
                    transform: 'translateY(-5px)',
                },
            }}
        >
            <Box
                component="img"
                src={service.image}
                alt={service.title}
                sx={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                }}
            />
            <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 'bold', color: 'success.main' }}>
                    {service.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    {service.description}
                </Typography>
                <Button variant="contained" color="success" sx={{ fontWeight: 'bold' }}>
                    Learn More
                </Button>
            </CardContent>
        </Card>
    </>
);

const Services = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const servicesData = [
        {
            title: 'COMMERCIAL SOLUTIONS',
            description: 'Power your business with clean, renewable energy! Pantera Energy offers cutting-edge commercial solar solutions that help you reduce operational costs and enhance sustainability.',
            image: SolarCommercial,
        },
        {
            title: 'INDUSTRY',
            description: 'Power your industry with clean, renewable energy! Pantera Energy offers cutting-edge industrial solar solutions that help you reduce operational costs and enhance efficiency.',
            image: SolarIndustrial,
        },
        {
            title: 'RESIDENTIAL',
            description: "Transform your home with clean energy! At Pantera Energy, we provide top-of-the-line residential solar solutions tailored to your needs. Enjoy lower energy bills and increase your home's value.",
            image: SolarResidential,
        },
        {
            title: 'AGRICULTURE',
            description: 'Revolutionize your farming operations with clean, renewable energy! Pantera Energy provides specialized solar solutions for the agricultural sector, helping you reduce energy costs and improve productivity.',
            image: SolarAgriculture,
        },
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
                        backgroundImage: `url(${SolarPlate})`,
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
                    <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 3 }}>
                        Our Solar Services
                    </Typography>
                    <Button variant="contained" color="success" size="large" sx={{ fontWeight: 'bold', px: 6, py: 2, fontSize: '1.2rem' }}>
                        CONTACT US
                    </Button>
                </Box>
            </Box>

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
                        {servicesData.map((service, index) => (
                            <SwiperSlide key={index}>
                                <Box sx={{ p: 2 }}>
                                    <ServiceCard service={service} />
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <Grid container spacing={3}>
                        {servicesData.map((service, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <ServiceCard service={service} />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>

            {/* Footer */}
            <Box
                component="footer"
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
    );
};

export default Services;