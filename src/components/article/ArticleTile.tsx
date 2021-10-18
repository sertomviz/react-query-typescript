import { Card, CardActionArea, CardContent, Typography, CardMedia, Box } from '@mui/material';
import React from 'react';
import { Article } from '../../models';
import { makeStyles } from '@mui/styles';
import noImg from '../../assets/img/noimg.png';

const useStyles = makeStyles(() => ({
  twoLines: {
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkitLineClamp': 2,
    '-webkitBoxOrient': 'vertical',
  },
}));

interface ArticleTileProps {
  article: Article;
}

export const ArticleTile: React.FC<ArticleTileProps> = ({ article }: ArticleTileProps) => {
  const classes = useStyles();

  const { webUrl, fields, webPublicationDate, webTitle } = article;

  return (
    <CardActionArea component='a' href={webUrl} target='_blank'>
      <Card sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component='img'
          sx={{ width: 'auto', display: { xs: 'none', sm: 'block' } }}
          image={fields.thumbnail ? fields.thumbnail : noImg}
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography sx={{ fontSize: 14 }} mb={1} color='secondary'>
            {new Date(webPublicationDate).toDateString()}
          </Typography>
          <Box className={classes.twoLines} sx={{ minHeight: 36 }} mb={2}>
            <Typography sx={{ fontSize: 13 }}>{webTitle}</Typography>
          </Box>
          <Box className={classes.twoLines} sx={{ minHeight: 32 }} mb={2}>
            <Typography sx={{ fontSize: 11 }}>{fields.trailText}</Typography>
          </Box>
          <Typography sx={{ fontSize: 13 }} color='primary'>
            Continue reading...
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};
