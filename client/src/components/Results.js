import React from 'react'
import { connect } from 'react-redux'
import Controls from './Controls'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
 
export function Results({ results }) {
    return (
        <div>
            <Controls />
            <ul css={css`
                list-style: none;
                font-family: sans-serif;
            `}>
                {
                    results.length > 0 ? results.map((item, index) => {
                        console.log(item)
                        return (
                            <li key={index}>
                                <Card>
                                    <CardActionArea>
                                        <CardMedia image={item.thumbnail || ""} title={item.title} />
                                    </CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {item.ingredients}
                                        </Typography>
                                    </CardContent>
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