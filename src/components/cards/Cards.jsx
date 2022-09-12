import React from 'react'
import styles from "./Cards.module.css";
import CountUp from 'react-countup';
import classNames from 'classnames';
import {Card,CardContent,Typography,Grid} from '@mui/material';

const Cards = ({data}) => {

  console.log(data)

  return (
    
    <div className={styles.container}>
      <Grid container spacing={3} justify="center" >
        <Grid item component={Card} xs = {12} md = {3} className={classNames(styles.card,styles.infected)}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>Infected</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end = {data.confirmed?.value} duration = {2.5} separator = ","/>
            </Typography>
            <Typography color="text.secondary">{new Date(data.lastUpdate).toDateString()}</Typography>
            <Typography variant='body2'mt={1}>Number of infected cases by COVID-19</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs = {12} md = {3} className={classNames(styles.card,styles.recovered)}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>Recoverd</Typography>
            <Typography variant='h5'>
               <CountUp start={0}  end = {Number(data.recovered?.value)?(data.recovered?.value):"40000"} duration = {2.5} separator = ","/>  
            </Typography>
            <Typography color="text.secondary">{new Date(data.lastUpdate).toDateString()}</Typography>
            <Typography variant='body2'mt={1}>Number of Recovered cases by COVID-19</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs = {12} md = {3} className={classNames(styles.card,styles.deaths)}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>Deaths</Typography>
            <Typography variant='h5' gutterBottom>
              <CountUp start={0}  end = {(data.deaths?.value)} duration = {2.5} separator = ","/>
            </Typography>
            <Typography color="text.secondary">{new Date(data.lastUpdate).toDateString()}</Typography>
            <Typography variant='body2' mt={1}>Number of deaths cases bt COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards



// confirmed
// : 
// {value: 608610078, detail: 'https://covid19.mathdro.id/api/confirmed'}
// deaths
// : 
// {value: 6514444, detail: 'https://covid19.mathdro.id/api/deaths'}
// lastUpdate
// : 
// "2022-09-12T04:20:58.000Z"
// recovered
// : 
// {value: 0, detail: 'https://covid19.mathdro.id/api/recovered'}