import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function Categories() {
    return (
        <div>
            <Menu pointing secondary vertical size = "big" position='left'>
        <Menu.Item
          name='JobAdvertisements'
        />
        <Menu.Item
          name='Candidates'
        />
        <Menu.Item
          name='Employers'
        />
      </Menu>
        </div>
    )
}
