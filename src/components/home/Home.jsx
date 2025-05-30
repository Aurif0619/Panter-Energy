import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Typography, Grid, useTheme, GlobalStyles, IconButton, Stack } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import KMC from '../assets/KMC-bg-1.jpg';
import CommercialImg from '../assets/Bg-2.png';
import FlatesBG from '../assets/Flates-bg-3.jpg';
import Solar from '../assets/Solar.jpg';
import Nishat from '../assets/Nishat-Chunian.jpg';
import PSAQR from '../assets/PSAQR.jpg';
import SolarPlantImg from '../assets/bg-6.jpg';
import ResidentialImg from '../assets/bg-7.png';
import CMH from '../assets/CMH.jpg';
import AgricultureImg from '../assets/AgricultureImg.jpg';
import CircleBg from '../assets/BG.jpg';
import DuoImg from '../assets/Duo.png';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LightModeIcon from '@mui/icons-material/LightMode';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import SpaIcon from '@mui/icons-material/Spa';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DoneIcon from '@mui/icons-material/Done';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import useMediaQuery from '@mui/material/useMediaQuery';
import FurqanImg from '../assets/Furqan.jpg';
import TehseenImg from '../assets/Tehseen.jpg';
import HassanImg from '../assets/Hassan.jpg';
import FarooqImg from '../assets/Farooq.jpg';
import MuhhamadShohaibImg from '../assets/Muhammad Shoaib.jpg';

const Home = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery('(max-width:900px)');
    const images = [KMC, CommercialImg, FlatesBG, Nishat, PSAQR, SolarPlantImg, CMH];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const statsData = [
        {
            icon: <EmojiEventsIcon style={{ fontSize: 48 }} color="success" />,
            title: '11',
            subtitle: 'YEARS',
            desc: 'Of Experience'
        },
        {
            icon: <RocketLaunchIcon style={{ fontSize: 48 }} color="success" />,
            title: '360',
            subtitle: 'MW',
            desc: 'Annual Production'
        },
        {
            icon: <LibraryBooksIcon style={{ fontSize: 48 }} color="success" />,
            title: '30',
            subtitle: 'YEARS',
            desc: 'Warranty'
        },
        {
            icon: <LightModeIcon style={{ fontSize: 48 }} color="success" />,
            title: '100%', subtitle: 'EFFICIENCY',
            desc: 'Our solar panels are the best on the market'
        }
    ];

    const benefitsData = [
        {
            icon: <PriceChangeIcon color="success" style={{ fontSize: 40 }} />,
            title: 'Save on bills',
            description: 'Electricity bills are on the rise'
        },
        {
            icon: <SpaIcon color="success" style={{ fontSize: 40 }} />,
            title: "It's Green",
            description: 'Coal energy damages environment. If you place on your roof a solar panel made somewhere else you can pretend you help protect your environment!'
        },
        {
            icon: <FavoriteBorderIcon color="success" style={{ fontSize: 40 }} />,
            title: '24/7 support',
            description: "We'll help you every step of the way, even if the sun doesn't shine!"
        }
    ];
    const projects = [
        { title: "Kamal Textile Mills (Pvt.) Ltd.", mw: "2.16 MW", image: CommercialImg },
        { title: "Lahore Polypropylene Industries (LPI)", mw: "1.99 MW", image: Solar },
        { title: "PSAQSJ Medical Institute, Gambat", mw: "1.28 MW", image: PSAQR },
        { title: "Nishat Chunian ...", mw: "1.76 MW", image: Nishat },
        { title: "KMC Civil Hospital Khairpur", mw: "1.18 MW", image: KMC },
        { title: "CMH Medical College Lahore", mw: "1 MW", image: CMH },
    ];
    const teamMembers = [
        {
            name: 'FURQAN ALI',
            title: 'Chief Executive Officer',
            image: FurqanImg,
        },
        {
            name: 'TEHSEEN QURESHI',
            title: 'Director Operations',
            image: TehseenImg,
        },
        {
            name: 'HASSAN MEHDI',
            title: 'Director HR & Procurement',
            image: HassanImg,
        },
        {
            name: 'FAROOQ SAEED',
            title: 'Director Engineering',
            image: FarooqImg,
        },
        {
            name: 'MUHAMMAD SHOAIB',
            title: 'Director R&D',
            image: MuhhamadShohaibImg,
        },
    ];

    return (
        <>
            <Box sx={{
                position: 'relative',
                height: '100vh',
                backgroundImage: `url(${images[currentImageIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-image 1s ease-in-out',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                color: '#fff',
                textAlign: 'center',
                px: 2
            }}>
                <Typography
                    variant="h3"
                    fontWeight="bold"
                    sx={{
                        fontSize: {
                            xs: '2rem',
                            sm: '2.5rem',
                            md: '3rem'
                        },
                        mb: 2
                    }}
                >
                    STEP INTO A GREENER FUTURE
                </Typography>
                <Typography
                    variant="h5"
                    mb={3}
                    sx={{
                        fontSize: {
                            xs: '1.2rem',
                            sm: '1.5rem'
                        }
                    }}
                >
                    Where Every Step Counts!
                </Typography>
                <Button
                    variant="contained"
                    color="success"
                    size="large"
                    sx={{
                        px: 4,
                        py: 1,
                        fontSize: {
                            xs: '0.8rem',
                            sm: '1rem'
                        }
                    }}
                >
                    Contact Us
                </Button>
            </Box>

            <Box
                sx={{
                    position: 'relative',
                    minHeight: '100vh',
                    backgroundImage: `url(${CircleBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    px: 2,
                }}
            >
                <Box sx={{ width: '100%' }}>
                    <Grid container spacing={4} justifyContent="center">
                        {statsData.map((item, index) => (
                            <Grid
                                item
                                xs={6} sm={6} md={3}
                                key={index}
                                display="flex"
                                justifyContent="center"
                            >
                                <Box
                                    textAlign="center"
                                    width="100%"
                                    maxWidth="238px"
                                    sx={{
                                        p: 2,
                                        borderRadius: 2,
                                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                                        backdropFilter: 'blur(5px)',
                                        height: '100%',
                                    }}
                                >
                                    {item.icon}
                                    <Typography variant="h4" color="success" sx={{ mt: 1 }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body1" color="success" sx={{ fontWeight: 'bold', mt: 1 }}>
                                        {item.subtitle}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ fontSize: '16px', mt: 2,
                                            fontWeight: 'bold',
                                        }}
                                        color="success"
                                    >
                                        {item.desc}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>


            <Container maxWidth="lg">
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    gap: 4
                }}>
                    <Box sx={{
                        flex: 1, order: { xs: 2, md: 1 }
                    }}>
                        <Typography variant="body1" color="success" sx={{ fontSize: '1.2rem' }}>
                            ABOUT US
                        </Typography>
                        <Typography variant="h4" color="success" sx={{ mt: 1, fontWeight: 'bold' }}>
                            WE ARE PANTERA ENERGY
                        </Typography>
                        <Typography variant="body1" color="success" sx={{ mt: 2 }}>
                            We have been a trendsetter in the solar energy market over 11 years.
                        </Typography>
                        <Box
                            sx={{
                                bgcolor: theme.palette.grey[200],
                                p: 3,
                                mt: 3,
                                borderRadius: 1
                            }}
                        >
                            <Typography variant="h5" color="text.primary">
                                What we do
                            </Typography>
                            <Typography color="success.main" sx={{ mt: 1 }}>
                                At Pantera Energy, we are dedicated to harnessing the power
                                of the sun to provide clean, efficient, and reliable energy solutions.
                                Our expertise spans every aspect of solar energy, ensuring that you
                                receive the highest quality service and support from start to finish.
                            </Typography>
                            <Box mt={3}>
                                <Typography variant="h5" color="text.primary">
                                    Our goal
                                </Typography>
                                <Typography color="success.main" sx={{ mt: 1 }}>
                                    At Pantera Energy, our goal is to empower individuals and businesses to transition to sustainable,
                                    renewable energy sources, thereby creating a greener, more resilient future.
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ textAlign: { xs: 'center', md: 'left' }, mt: 3 }}>
                            <Button
                                variant="contained"
                                color="success"
                                size="large"
                            >
                                Contact Us
                            </Button>
                        </Box>
                    </Box>

                    {/* Image */}
                    <Box sx={{
                        flex: 1,
                        order: { xs: 1, md: 2 },
                        width: '100%',
                        borderRadius: 2,
                        overflow: 'hidden',
                        boxShadow: 3
                    }}>
                        <img
                            src={SolarPlantImg}
                            alt="Solar Plant"
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block'
                            }}
                        />
                    </Box>
                </Box>
            </Container>

            {/* Benefits Section */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    gap: 4
                }}>
                    {/* Image */}
                    <Box sx={{
                        flex: 1, width: '100%',
                        borderRadius: 2, overflow: 'hidden',
                        boxShadow: 3
                    }}>
                        <img src={DuoImg}
                            alt="Solar Benefits"
                            style={{
                                width: '100%', height: 'auto',
                                display: 'block'
                            }}
                        />
                    </Box>

                    {/* Text Content */}
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="body1" color="text.secondary">
                            We're here to help you
                        </Typography>
                        <Typography variant="h4" sx={{ mt: 1, fontWeight: 'bold' }}>
                            TAKE A LEAP
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            Migration to solar energy is important. <br />
                            Here are just a few reasons:
                        </Typography>

                        <Box sx={{ mt: 4 }}>
                            {benefitsData.map((benefit, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        mb: 4,
                                        gap: 2
                                    }}
                                >
                                    <Box sx={{ flexShrink: 0 }}>
                                        {benefit.icon}
                                    </Box>
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                            {benefit.title}
                                        </Typography>
                                        <Typography variant="body1" sx={{ mt: 1 }}>
                                            {benefit.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>

                        <Button variant="contained"
                            color="success" size="large"
                            sx={{ mt: 2 }} >
                            Contact Us
                        </Button>
                    </Box>
                </Box>
            </Container>
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="body1" color="success">
                        SERVICES
                    </Typography>
                    <Typography variant="h3"
                        color="success"
                        sx={{
                            fontWeight: 'bold',
                            fontSize: { xs: '28px', md: '35px' },
                            mt: 1
                        }}
                    >
                        WHY CHOOSE US?
                    </Typography>
                </Box>

                {/* Commercial Solution */}
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 6 }}>
                    <Box sx={{ flex: 1 }}>
                        <img
                            src={CommercialImg}
                            alt="Commercial Solar Solutions"
                            style={{
                                width: '100%', height: 'auto',
                                borderRadius: '8px'
                            }}
                        />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                            COMMERCIAL SOLUTIONS
                        </Typography>
                        <Typography>
                            Power your business with clean, renewable energy! Pantera Energy offers cutting-edge
                            commercial solar solutions that help you reduce operational costs and enhance sustainability.
                            Boost your company's green credentials while enjoying significant energy savings.
                        </Typography>
                    </Box>
                </Box>

                {/* Residential Solution */}
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 6 }}>
                    <Box sx={{ flex: 1, order: { xs: 2, md: 1 } }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                            RESIDENTIAL SOLUTIONS
                        </Typography>
                        <Typography>
                            Transform your home with clean! At Pantera Energy, we provide top-of-the-line residential solar
                            solutions tailored to your needs.
                            Enjoy lower energy bills, Increase your home's value with our state-of-the-art solar solution.
                        </Typography>
                    </Box>
                    <Box sx={{ flex: 1, order: { xs: 1, md: 2 } }}>
                        <img
                            src={ResidentialImg}
                            alt="Residential Solar Solutions"
                            style={{
                                width: '100%', height: 'auto',
                                borderRadius: '8px'
                            }}
                        />
                    </Box>
                </Box>

                {/* Agriculture Solution */}
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
                    <Box sx={{ flex: 1 }}>
                        <img
                            src={AgricultureImg}
                            alt="Agricultural Solar Solutions"
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '8px'
                            }}
                        />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <Box>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                                AGRICULTURE SOLUTIONS
                            </Typography>
                            <Typography>
                                Revolutionize your farming operations with clean, renewable energy! Pantera Energy provides
                                specialized solar solutions for the agricultural sector, helping you reduce energy costs and
                                promote sustainable farming practices.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box maxWidth="lg" sx={{ py: 8 }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            alignItems: "center",
                            gap: 4,
                        }}
                    >
                        {/* Text Content */}
                        <Box sx={{ flex: 1, order: { xs: 2, md: 1 } }}>
                            <Typography variant="body1" color="success" sx={{ fontSize: "1.2rem" }}>
                                Our Advantage
                            </Typography>
                            <Typography variant="h4" color="text.primary" sx={{ mt: 1, fontWeight: "bold" }}>
                                You will enjoy:
                            </Typography>

                            {[
                                "Appreciable savings even after the first month",
                                "Independence from the local grid and rising prices",
                                "Tax relief for your solar power investment",
                            ].map((point, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 2,
                                        mt: 3,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: "50%",
                                            backgroundColor: "success.light",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <DoneIcon />
                                    </Box>

                                    {/* Text */}
                                    <Typography variant="body1">{point}</Typography>
                                </Box>
                            ))}

                            {/* Contact Us Button */}
                            <Box sx={{ mt: 4 }}>
                                <Button variant="contained" color="success">
                                    Contact Us
                                </Button>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                flex: 1,
                                order: { xs: 1, md: 2 },
                                width: "100%",
                                borderRadius: 2,
                                overflow: "hidden",
                                boxShadow: 3,
                            }}
                        >
                            <img src={FlatesBG}
                                alt="Solar Plant"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    display: "block",
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ py: 2, textAlign: "center" }}>
                    <Typography variant="body1" color="success.main" fontWeight="bold" my={2}>
                        PORTFOLIO
                    </Typography>
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        COMPLETED PROJECTS
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        maxWidth="sm"
                        mx="auto"
                        mb={4}
                    >
                        We are capable of completing projects of any scale, any customer preference. Our services include, among others, design, construction and installation.
                    </Typography>

                    {isMobile ? (
                        <Swiper
                            modules={[Navigation, Pagination]}
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                            }}
                            pagination={{ clickable: true }}
                            spaceBetween={20}
                            slidesPerView={1}
                            style={{ position: "relative", paddingBottom: "40px" }}
                        >
                            {projects.map((project, index) => (
                                <SwiperSlide key={index}>
                                    <Box
                                        sx={{
                                            position: "relative",
                                            overflow: "hidden",
                                            borderRadius: 2,
                                            height: 230,
                                            backgroundImage: `url(${project.image})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            display: "flex",
                                            alignItems: "flex-end",
                                            color: "#fff",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: 10,
                                                left: 10,
                                                backgroundColor: "#8dc63f",
                                                px: 1.2,
                                                py: 0.5,
                                                borderRadius: "4px",
                                                fontWeight: "bold",
                                                fontSize: "0.9rem",
                                            }}
                                        >
                                            {project.mw}
                                        </Box>

                                        <Box
                                            sx={{
                                                width: "100%",
                                                p: 2,
                                                background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                                            }}
                                        >
                                            <Typography variant="subtitle1" fontWeight="bold">
                                                {project.title}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </SwiperSlide>
                            ))}

                            <Box
                                className="swiper-button-prev"
                                style={{ color: "#2e7d32", left: 0 }}
                            ></Box>
                            <Box
                                className="swiper-button-next"
                                style={{ color: "#2e7d32", right: 0 }}
                            ></Box>
                        </Swiper>
                    ) : (
                        <Grid container spacing={4} justifyContent="center">
                            {projects.map((project, index) => (
                                <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                                    <Box
                                        sx={{
                                            position: "relative",
                                            overflow: "hidden",
                                            borderRadius: 2,
                                            height: 230, backgroundImage: `url(${project.image})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            display: "flex",
                                            alignItems: "flex-end",
                                            color: "#fff",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: 10, left: 10,
                                                backgroundColor: "#8dc63f",
                                                px: 1.2, py: 0.5,
                                                borderRadius: "4px",
                                                fontWeight: "bold",
                                                fontSize: "0.9rem",
                                            }}>
                                            {project.mw}
                                        </Box>

                                        <Box
                                            sx={{
                                                width: "100%",
                                                p: 2, background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                                            }}
                                        >
                                            <Typography variant="subtitle1" fontWeight="bold">
                                                {project.title}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </Box>

            </Container>
            <Box sx={{ py: 6, textAlign: 'center', px: 2 }}>
                <GlobalStyles
                    styles={{
                        '.swiper-button-prev, .swiper-button-next': {
                            color: theme.palette.success.main,
                        },
                    }}
                />

                <Typography color="success.main" sx={{ fontWeight: 'bold', fontSize: '35px' }}>
                    Our Founder
                </Typography>
                <Typography
                    sx={{
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        fontSize: '28px',
                        mb: 4,
                    }}
                >
                    Leading the Charge for Innovation
                </Typography>

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
                                        <Typography fontSize="14px">{member.title}</Typography>
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
                                        <Typography fontSize="14px">{member.title}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Box>
           
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
    );
};

export default Home;