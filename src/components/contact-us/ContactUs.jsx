import React, { useState, useEffect } from 'react';
import {
  Box, Typography, Button, Grid, TextField, InputAdornment,
  Divider, Paper, IconButton, Stack
} from '@mui/material';
import Contact from '../assets/contact.jpg';
import PublicIcon from '@mui/icons-material/Public';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    monthlyBill: '',
    systemType: '',
    systemSize: '',
    city: ''
  });

  useEffect(() => {
    const savedFormData = localStorage.getItem('contactFormData');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  const locations = [
    {
      city: 'LAHORE',
      address: 'Plaza 12A, Khayaban-e-Iqbal, Sector XX DHA Phase 3, Lahore, Punjab 54000'
    },
    {
      city: 'ISLAMABAD',
      address: 'EOBI House, Service Road South, 6-10 Mauve Area G 10 Markaz G-10, Islamabad, Islamabad Capital Territory'
    },
    {
      city: 'KARACHI',
      address: 'Plot No.3-C, Street 10, D.H.A. Phase 8 Zulfiqar & Al Murtaza Commercial Area Phase 8 Defence Housing Authority, Karachi, Karachi City, Sindh 75500'
    },
    {
      city: 'MULTAN',
      address: '3rd Floor Business City Plaza Chungi #9, Multan, Punjab, PK'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value
    };
    setFormData(updatedFormData);

    localStorage.setItem('contactFormData', JSON.stringify(updatedFormData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingSubmissions = JSON.parse(localStorage.getItem('contactFormSubmissions') || '[]');

    const newSubmission = {
      ...formData,
      submissionDate: new Date().toISOString()
    };

    localStorage.setItem('contactFormSubmissions', JSON.stringify([...existingSubmissions, newSubmission]));

    alert('Thank you for your submission! We will contact you soon.');

    setFormData({
      fullName: '',
      phone: '',
      email: '',
      monthlyBill: '',
      systemType: '',
      systemSize: '',
      city: ''
    });
    localStorage.removeItem('contactFormData');
  };

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
            backgroundImage: `url(${Contact})`,
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
            Contact Us
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, maxWidth: '800px' }}>
            Let's discuss how we can help you transition to renewable energy
          </Typography>
          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{ fontWeight: 'bold', px: 6, py: 2, fontSize: '1.2rem' }}
            href="#contact-form"
          >
            GET STARTED
          </Button>
        </Box>
      </Box>

      <Box id="contact-form" sx={{ maxWidth: 1200, mx: 'auto', py: 8, px: 3 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
              <Typography variant="h4" sx={{
                fontWeight: 'bold',
                mb: 4,
                color: 'success.main',
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}>
                <SolarPowerIcon fontSize="large" />
                Let's Start a Discussion
              </Typography>

              <form onSubmit={handleSubmit}>
              
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Full Name *"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon color="success" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone *"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PhoneIcon color="success" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="E-mail *"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon color="success" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Average Monthly Bill *"
                      name="monthlyBill"
                      value={formData.monthlyBill}
                      onChange={handleChange}
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AttachMoneyIcon color="success" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="System Type"
                      name="systemType"
                      value={formData.systemType}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SolarPowerIcon color="success" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="System Size"
                      name="systemSize"
                      value={formData.systemSize}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="City"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LocationCityIcon color="success" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="success"
                      size="large"
                      fullWidth
                      sx={{
                        py: 2,
                        fontWeight: 'bold',
                        fontSize: '1.1rem'
                      }}
                    >
                      SUBMIT REQUEST
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>

          {/* Contact Info Section */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2, height: '100%' }}>
              <Typography variant="h4" sx={{
                fontWeight: 'bold',
                mb: 4,
                color: 'success.main'
              }}>
                WE'RE HERE TO HELP
              </Typography>

              <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
                At Pantera Energy, we value our customers and are always ready to assist with any questions,
                concerns, or inquiries you may have. Whether you're looking to learn more about our renewable
                energy solutions, need support with an ongoing project, or want to discuss a new opportunity,
                our team is here for you.
              </Typography>

              <Divider sx={{ my: 3 }} />

              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2
                }}>
                  <ScheduleIcon color="success" />
                  OPENING TIME
                </Typography>
                <Typography>Mon-Fri: 09.00 - 18.00</Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2
                }}>
                  <PhoneIcon color="success" />
                  PHONE NUMBER
                </Typography>
                <Typography>111112886</Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2
                }}>
                  <EmailIcon color="success" />
                  GENERAL INQUIRIES
                </Typography>
                <Typography>info@panteraenergy.pk</Typography>
              </Box>

              <Box>
                <Typography variant="h6" sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2
                }}>
                  <EmailIcon color="success" />
                  CUSTOMER SUPPORT
                </Typography>
                <Typography>support@panteraenergy.pk</Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Locations Section */}
      <Box sx={{
        maxWidth: 1200,
        mx: 'auto',
        py: 6,
        px: 3,
        backgroundColor: '#f9f9f9'
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 4
        }}>
          <PublicIcon sx={{
            fontSize: 40,
            color: 'success.main',
            mr: 2
          }} />
          <Typography variant="h4" component="h2" sx={{
            fontWeight: 'bold',
            color: 'text.primary'
          }}>
            Our Locations
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {locations.map((location, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box sx={{
                p: 3,
                height: '100%',
                backgroundColor: 'white',
                borderRadius: 2,
                boxShadow: 1,
                borderLeft: '4px solid',
                borderColor: 'success.main',
                '&:hover': {
                  boxShadow: 3,
                  transform: 'translateY(-5px)',
                  transition: 'all 0.3s ease'
                }
              }}>
                <Typography variant="h5" component="h3" sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  color: 'success.main'
                }}>
                  {location.city}
                </Typography>
                <Typography variant="body1" sx={{
                  color: 'text.secondary',
                  lineHeight: 1.6
                }}>
                  {location.address}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
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
  );
};

export default ContactUs;