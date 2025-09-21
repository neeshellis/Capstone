import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'; // Add this import
import { useData } from '../hooks/useData';
import AccommodationCard from '../components/AccommodationCard';

export default function AccommodationPage() { 
    const data = useData("http://localhost:3000/pricingItems")

    const storedItems = data?.map(rate => (
    <Grid item xs={12} sm={6} md={4} key={rate.id} sx={{ display: 'flex' }}>
        <AccommodationCard 
            title={rate.title}
            description={rate.description} 
            image={rate.image} 
            price={rate.price}
        />
    </Grid>
))

    return (
        <div>
            <Container sx={{ 
                padding: 5, 
                marginTop: 10, 
                backgroundColor: 'rgba(225, 227, 211, 0.5)', 
                fontWeight: 600, 
                minHeight: '5vh', 
                maxWidth: '70%', 
                borderRadius: 4 
            }}> 
                <Grid container spacing={3}> {/* Add Grid container */}
                    {storedItems}
                </Grid>
            </Container>
        </div>
    );
}