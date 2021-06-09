import React from 'react'
import Categories from './Categories'
import { Grid } from "semantic-ui-react";
import JobList from "../pages/JobList"


export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <JobList></JobList>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
