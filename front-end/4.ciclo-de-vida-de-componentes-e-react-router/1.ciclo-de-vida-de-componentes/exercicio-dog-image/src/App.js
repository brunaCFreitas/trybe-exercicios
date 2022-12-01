import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

class App extends React.Component {
  state = {
    imageUrl: '',
    isLoading: true,
    dogBreedIs: '',
  };

  componentDidMount() {
    const localStorageUrl = localStorage.getItem('imageUrl');
    const localStorageDog = localStorage.getItem('dogBreed');
    if (localStorageUrl && localStorageDog) {
      this.setState({
        imageUrl: localStorageUrl,
        isLoading: false,
        dogBreedIs: localStorageDog,
      });
    } else {
      this.fetchDog();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !nextState.imageUrl.includes('terrier');
  }

  componentDidUpdate() {
    const { imageUrl } = this.state;
    localStorage.setItem('imageUrl', imageUrl);
    const dogBreed = imageUrl.split('/')[4];
    localStorage.setItem('dogBreed', dogBreed);
  }

  fetchDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => this.setState({
        imageUrl: data.message,
        isLoading: false,
        dogBreedIs: data.message.split('/')[4],
      }));
  };

  render() {
    const { imageUrl, isLoading, dogBreedIs } = this.state;
    const dogBreedIsFormatt = dogBreedIs.toUpperCase();

    if (isLoading) {
      return <h2>Loading...</h2>;
    }

    return (
      <Container maxWidth="sm">
        <Card sx={ { maxWidth: 400, maxHeigt: 400, mt: 20 } }>
          <CardActionArea>
            <CardMedia
              component="img"
              width="240"
              height="240"
              image={ imageUrl }
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
              >
                {dogBreedIsFormatt}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={ this.fetchDog }>
              Novo Doguinho!
            </Button>
          </CardActions>
        </Card>
      </Container>
    );
  }
}

export default App;
