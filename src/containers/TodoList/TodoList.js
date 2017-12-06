import React, { Component } from 'react'

import { graphql, compose } from 'react-apollo'

import Snackbar from 'material-ui/Snackbar'
import Subheader from 'material-ui/Subheader'
import CircularProgress from 'material-ui/CircularProgress'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import IconButton from 'material-ui/IconButton'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

import ContentAdd from 'material-ui/svg-icons/content/add'
import ContentCheck from 'material-ui/svg-icons/navigation/check'

import { Toolbar } from '../Toolbar'

import { Auxiliary } from '../../hoc/Auxiliary'

import { TODO_ALL, TODO_CREATE, TODO_UPDATE } from '../../graphql'

class TodoList extends Component {
  state = {
    snackbarShow: false,
    snackbarMessage: '',
    snackbarDuration: 4000,
    lastTodo: null
  }

  add() {
    const title = prompt('Enter some text')

    this.props.todoCreate({
      variables: {
        title
      },
      update: (store, { data: { createTodo } }) => {
        const data = store.readQuery({ query: TODO_ALL })

        data.todos.push(createTodo)

        store.writeQuery({
          query: TODO_ALL,
          data
        })
      }
    })
  }

  done(todo, isDone) {
    this.props.todoUpdate({
      variables: {
        id: todo.id,
        done: isDone ? 'TRUE' : 'FALSE'
      },
      update: (store, { data: { updateTodo } }) => {
        if (isDone) {
          this.setState({
            snackbarShow: true,
            snackbarMessage: `Todo "${todo.title}" done!`,
            lastTodo: todo
          })
        }

        const data = store.readQuery({ query: TODO_ALL })

        data.todos = data.todos.map((t) => ({ ...t, done: t.id === updateTodo.id ? updateTodo.done : t.done }))

        store.writeQuery({
          query: TODO_ALL,
          data
        })
      }
    })
  }

  undo = () => {
    this.done(this.state.lastTodo, false)
    this.setState({ snackbarShow: false })
  }

  render() {
    const { todoAll: { loading, error, todos } } = this.props

    const style = {
      floatAction: {
        position: 'fixed',
        bottom: '30px',
        right: '30px'
      },
      loader: {
        margin: '20px auto',
        display: 'block'
      },
      actionCol: {
        width: '48px'
      }
    }

    return (
      <Auxiliary>
        <Toolbar
          title="Todo List"
        />

        <Subheader>Todos</Subheader>

        {loading &&
          <CircularProgress
            mode="indeterminate"
            style={style.loader}
          />}

        {error &&
          <strong>error</strong>}

        {todos &&
          <Table selectable={false} multiSelectable={false}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false} enableSelectAll={false}>
              <TableRow>
                <TableHeaderColumn tooltip="The TODO task title">Title</TableHeaderColumn>
                <TableHeaderColumn />
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} showRowHover={true}>
              {todos.filter((todo) => todo.done === 'FALSE').map((todo, i) => (
                <TableRow key={i}>
                  <TableRowColumn>{todo.title}</TableRowColumn>
                  <TableRowColumn style={style.actionCol}>
                    <IconButton onClick={this.done.bind(this, todo, true)}>
                      <ContentCheck />
                    </IconButton>
                  </TableRowColumn>
                </TableRow>)
              )}
            </TableBody>
          </Table>}

        <FloatingActionButton style={style.floatAction} onClick={this.add.bind(this)}>
          <ContentAdd />
        </FloatingActionButton>

        <Snackbar
          open={this.state.snackbarShow}
          message={this.state.snackbarMessage}
          autoHideDuration={this.state.snackbarDuration}
          action="undo"
          onActionTouchTap={this.undo.bind(this)}
        />
      </Auxiliary>
    )
  }
}

export default compose(
  graphql(TODO_ALL, {
    name: 'todoAll'
  }),
  graphql(TODO_CREATE, {
    name: 'todoCreate'
  }),
  graphql(TODO_UPDATE, {
    name: 'todoUpdate'
  })
)(TodoList)