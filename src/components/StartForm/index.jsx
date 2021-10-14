import React from 'react'
import { useAppDispatch } from '../../hooks'
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik'
import { startGameAction } from '../../redux/actions/gameActions'
import { generateGridAction } from '../../redux/actions/gridActions'

interface StartFormValues {
  typeCards: string;
  gridSize: numbers;
}

function StartGame() {
  const initialValues: StartFormValues = { typeCards: 'Numbers', gridSize: '4' }
  const dispatch = useAppDispatch()
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          dispatch(startGameAction())
          dispatch(generateGridAction(values))
          actions.setSubmitting(false)
        }}
      >
        <Form>
          <div className=''>
            <label>
              <Field type='radio' name='typeCards' value='Numbers' />
              Numbers
            </label>
            <label>
              <Field type='radio' name='typeCards' value='Icons' />
              Icons
            </label>
          </div>
          <div className=''>
            <label>
              <Field type='radio' name='gridSize' value='4' />
              4x4
            </label>
            <label>
              <Field type='radio' name='gridSize' value='6' />
              6x6
            </label>
            <label>
              <Field type='radio' name='gridSize' value='8' />
              8x8
            </label>
          </div>
          <button type='submit'>Start game</button>
        </Form>
      </Formik>
    </div>
  )
}

export default StartGame
