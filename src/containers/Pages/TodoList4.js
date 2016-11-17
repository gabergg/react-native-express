import React, { Component } from 'react'

import Page from './Page'
import styles from './styles'

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
}

export default class TodoList4 extends Component {
  render() {
    return (
      <Page title={'Todo List - Step 4'}>
        <div style={styles.well}>
          <div style={containerStyle}>
            <div style={{paddingRight: '60px'}}>
              <div style={styles.h3}> Remove completed tasks and styling </div>
              <div style={styles.p}>
                The goal of this step is to make the 'Remove completed items' button functional and polish the style of our app.
              </div>
              <div style={styles.h4}> Tasks </div>
              <ul>
                <li style={styles.li}> Add a new action and actionCreator, <code>REMOVE_COMPLETED_ITEMS</code> </li>
                <li style={styles.li}> Update the reducer to handle this new action and update the redux state accordingly </li>
                <li style={styles.li}> When the 'Remove completed items' button in Footer is pressed, dispatch that new action </li>
                <li style={styles.li}> Style the app as much or as little as you like. Make it look like the screenshot, or make it your own. </li>
              </ul>
              <div style={styles.h4}> Source Code </div>
              <div style={styles.p}>
                If you're stuck or you want to see a working implementation, you can view the source code for the app on the right <a href={'https://github.com/gabergg/ReactNativeTodoList'}>here</a>.
              </div>
            </div>
            <div style={{border: '1px solid black'}}>
              <img
                width={280}
                src={'todo-screenshot.png'}
              />
            </div>
          </div>
        </div>
        <div style={styles.well}>
          {this.props.navigatorButton}
        </div>
      </Page>
    )
  }
}