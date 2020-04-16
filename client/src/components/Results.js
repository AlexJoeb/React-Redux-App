import React from 'react'
import { connect } from 'react-redux'
import Controls from './Controls'

import { Link } from 'react-router-dom';

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button } from "@material-ui/core";
 
export function Results({ results }) {
    return (
        <div>
            <Controls />
            <ul css={css`
                list-style: none;
                font-family: sans-serif;

                display: flex;
                flex-wrap: wrap;
                justify-content:space-around;
                align-items: center;
            `}>
                {
                    results.length > 0 ? results.map((item, index) => {
                        console.log(item.href)
                        return (
                            <li css={css`flex-basis: 48%; margin-bottom: 20px;`} key={index}>
                                <Card>
                                    <CardActionArea css={css`display:flex;flex-direction:column;`}>
                                        {item.thumbnail.trim() && <CardMedia component='img' alt={item.title} image={item.thumbnail} title={item.title} />}
                                        <CardContent css={css`flex: 1;`}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {item.ingredients}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <a css={css`
                                            color: gray;
                                            font-size: .8rem;
                                            margin-left: 10px;

                                            &:hover{
                                                color:darkgray;
                                            }
                                        `} href={item.href}>
                                            See full recipe.
                                        </a>
                                    </CardActions>
                                </Card>
                            </li>
                        )
                    }) : null
                }
            </ul>
        </div>
    )
}

export default connect(state => ({
    results: state.results,
}), {})(Results);