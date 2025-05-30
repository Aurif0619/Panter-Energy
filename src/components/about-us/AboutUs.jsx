import React from 'react';
import { Box, Typography, Container, Grid, List, ListItem, Stack, Button, IconButton } from '@mui/material';
import TeamImg from '../assets/Team-banner.jpeg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const AboutUs = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(144, 179, 0, 0.9), rgba(144, 179, 0, 0.9)), url(${TeamImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', pt: '34px' }}>
            Welcome to Pantera Energy
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Powering the future with sustainable energy solutions
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
            At Pantera Energy, we're passionate about powering the future with sustainable and innovative energy solutions.
            Founded on the principles of excellence, integrity, and environmental stewardship, we strive to lead the way
            in the renewable energy sector, transforming how the world harnesses and utilizes energy.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid
          container
          spacing={3}
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}
        >
          <Grid item xs={12} md={4}>
            <Box sx={{
              textAlign: 'center',
              p: 3,
              height: '100%',  borderRadius: 2,
              boxShadow: 3,
              backgroundColor: 'success.main',
              color: 'white',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 6
              }
            }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                OUR MISSION
              </Typography>
              <Typography variant="subtitle1" gutterBottom sx={{ mb: 3, fontWeight: 'medium', color: 'success.light' }}>
                MISSION AT PANTERA ENERGY
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                Our mission is to accelerate the transition to renewable energy by providing cutting-edge,
                efficient, and reliable energy solutions. We are dedicated to reducing carbon footprints and
                promoting sustainability through our advanced technologies and commitment to green energy practices.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{
              textAlign: 'center',
              p: 3,
              height: '100%',
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: 'success.main',
              color: 'white',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 6
              }
            }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                OUR VISION
              </Typography>
              <Typography variant="subtitle1" gutterBottom sx={{ mb: 3, fontWeight: 'medium', color: 'success.light' }}>
                VISION AT PANTERA ENERGY
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                We envision a world where clean, renewable energy is accessible to everyone,
                driving economic growth, environmental protection, and improved quality of life.
                Our goal is to be at the forefront of this energy revolution, empowering communities
                and businesses to achieve energy independence and resilience.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{
              textAlign: 'center',
              p: 3,
              height: '100%',
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: 'success.main',
              color: 'white',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 6
              }
            }}>

              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                OUR COMMITMENT
              </Typography>
              <Typography variant="subtitle1" gutterBottom sx={{ mb: 3, fontWeight: 'medium', color: 'success.light' }}>
                COMMITMENTS AT PANTERA ENERGY
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                We are committed to delivering high-quality, sustainable energy solutions that meet the evolving
                needs of our clients and the planet. Our team of experienced professionals works tirelessly to ensure that
                every project is executed with precision, innovation, and a deep respect for the environment.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{
        backgroundColor: '#f5f5f5',
        py: 8
      }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" sx={{
            textAlign: 'center',
            mb: 6,
            fontWeight: 'bold',
            color: 'text.primary'
          }}>
            What we do at Pantera Energy
          </Typography>

          <Typography variant="body1" sx={{
            textAlign: 'center',
            mb: 6,
            fontSize: '1.1rem',
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.8
          }}>
            Pantera Energy specializes in the development, installation, and maintenance of renewable energy systems.
          </Typography>

          <Box sx={{
            backgroundColor: 'white',
            borderRadius: 2,
            boxShadow: 1,
            p: 4,
            mb: 4
          }}>
            
            <Typography variant="h4" component="h3" sx={{
              mb: 3,
              fontWeight: 'bold',
              color: 'success.main'
            }}>
              SOLAR ENERGY SOLUTIONS
            </Typography>

            <List disablePadding>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{
                  backgroundColor: 'success.light',
                  borderRadius: 1,
                  p: 2,
                  width: '100%'
                }}>
                  <Typography variant="h6" component="h4" sx={{
                    fontWeight: 'bold',
                    mb: 1,
                    color: 'success.dark'
                  }}>
                    ENERGY STORAGE
                  </Typography>
                  <Typography variant="body1">
                    Design and installation of solar panels for residential, commercial, industrial and agricultural applications.
                  </Typography>
                </Box>
              </ListItem>

              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{
                  backgroundColor: 'success.light',
                  borderRadius: 1,
                  p: 2,
                  width: '100%'
                }}>
                  <Typography variant="h6" component="h4" sx={{
                    fontWeight: 'bold',
                    mb: 1,
                    color: 'success.dark'
                  }}>
                    STORAGE SOLUTION FROM US
                  </Typography>
                  <Typography variant="body1">
                    Advanced storage solutions to ensure a reliable and consistent energy supply.
                  </Typography>
                </Box>
              </ListItem>

              <ListItem disablePadding>
                <Box sx={{
                  backgroundColor: 'success.light',
                  borderRadius: 1,
                  p: 2,
                  width: '100%'
                }}>
                  <Typography variant="h6" component="h4" sx={{
                    fontWeight: 'bold',
                    mb: 1,
                    color: 'success.dark'
                  }}>
                    CONSULTING AND SUPPORT FROM US
                  </Typography>
                  <Typography variant="body1">
                    Expert consulting services to guide you through every step of your renewable energy journey, from initial assessment to full implementation.
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </Box>
        </Container>
      </Box>
      <Box sx={{
        backgroundColor: '#f5f5f5',
        py: 8
      }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" sx={{
            textAlign: 'center',
            mb: 4,
            fontWeight: 'bold',
            color: 'text.primary'
          }}>
            Why Choose Pantera Energy?
          </Typography>

          {/* Description Paragraph */}
          <Typography variant="body1" sx={{
            textAlign: 'center',
            mb: 6,
            fontSize: '1.1rem',
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.8
          }}>
            At Pantera Energy, we believe that together, we can make a significant impact on the world's energy landscape.
            Join us in our mission to create a cleaner, greener, and more sustainable future for generations to come.
          </Typography>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            <Grid item xs={12} md={6} lg={3}>
              <Box sx={{
                backgroundColor: 'white',
                borderRadius: 2,
                boxShadow: 1,
                p: 3,
                height: '100%'
              }}>
                <Typography variant="h5" component="h3" sx={{
                  mb: 2,
                  fontWeight: 'bold',
                  color: 'success.main'
                }}>
                  EXPERTISE AND EXPERIENCE
                </Typography>
                <Typography variant="body1">
                  With years of experience in the renewable energy sector, our team brings unparalleled expertise and innovative solutions to every project.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <Box sx={{
                backgroundColor: 'white',
                borderRadius: 2,
                boxShadow: 1,
                p: 3,
                height: '100%'
              }}>
                <Typography variant="h5" component="h3" sx={{
                  mb: 2,
                  fontWeight: 'bold',
                  color: 'success.main'
                }}>
                  INNOVATIVE TECHNOLOGIES
                </Typography>
                <Typography variant="body1">
                  Our commitment to research and development ensures that we stay at the cutting edge of renewable energy technology.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Box sx={{
                backgroundColor: 'white',
                borderRadius: 2,
                boxShadow: 1,
                p: 3,
                height: '100%'
              }}>
                <Typography variant="h5" component="h3" sx={{
                  mb: 2,
                  fontWeight: 'bold',
                  color: 'success.main'
                }}>
                  CUSTOMER-CENTRIC APPROACH
                </Typography>
                <Typography variant="body1">
                  We prioritize our clients' needs, offering personalized solutions and exceptional customer service.
                </Typography>
              </Box>
            </Grid>

            {/* Join Us */}
            <Grid item xs={12} md={6} lg={3}>
              <Box sx={{
                backgroundColor: 'success.main',
                borderRadius: 2,
                boxShadow: 1,
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <Typography variant="h5" component="h3" sx={{
                  mb: 2,
                  fontWeight: 'bold',
                  color: 'white'
                }}>
                  Join Us in Powering a Sustainable Future
                </Typography>
                <Button
                  variant="contained"
                  color="warning"
                  sx={{
                    mt: 2,
                    alignSelf: 'center',
                    fontWeight: 'bold'
                  }}
                >
                  Contact Us Today
                </Button>
              </Box>
            </Grid>
          </Grid>

          <Typography variant="body1" sx={{
            textAlign: 'center',
            fontSize: '1.1rem',
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.8
          }}>
            For more information about our services and how we can help you achieve your energy goals, please contact us today.
            Let's power the future, together.
          </Typography>
        </Container>
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

export default AboutUs;
