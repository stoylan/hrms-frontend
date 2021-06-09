import React from 'react'
import { Menu, Segment,Button } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
            <Segment inverted>
                <Menu inverted pointing fixed ="top" size = "huge">
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item
                        name='Job Advertisements'
                    />
                    <Menu.Item
                        name='Create Cv'
                    />
                    
                <Menu.Menu position='right'>
                <Menu.Item>
                    <Button primary position='right'>Sign up</Button>
                </Menu.Item>

                <Menu.Item>
                    <Button position='right'>Log-in</Button>
                </Menu.Item>
                    </Menu.Menu>


                </Menu>
            </Segment>
        </div>

    )
}
