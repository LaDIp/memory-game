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
import style from './style.module.scss'
import classNames from 'classnames'
import { spawn } from 'child_process'

interface StartFormValues {
  typeCards: string;
  gridSize: numbers;
}

function StartGame() {
  const initialValues: StartFormValues = { typeCards: 'Numbers', gridSize: '4' }
  const dispatch = useAppDispatch()
  return (
    <div className={style.form}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          dispatch(startGameAction(values))
          dispatch(generateGridAction(values))
          actions.setSubmitting(false)
        }}
      >
        <Form>
          <div className={style.radioGroup}>
            <h4 className={style.radioGroup__head}>Select theme</h4>
            <label className={classNames(style.button, style.button_radio)}>
              <Field type='radio' name='typeCards' value='Numbers' />
              <span>Numbers</span>
            </label>
            <label className={classNames(style.button, style.button_radio)}>
              <Field type='radio' name='typeCards' value='Icons' />
              <span>Icons</span>
            </label>
          </div>
          <div className={style.radioGroup}>
            <h4 className={style.radioGroup__head}>Select size</h4>
            <label className={classNames(style.button, style.button_radio)}>
              <Field type='radio' name='gridSize' value='4' />
              <span>4x4</span>
            </label>
            <label className={classNames(style.button, style.button_radio)}>
              <Field type='radio' name='gridSize' value='6' />
              <span>6x6</span>
            </label>
            <label className={classNames(style.button, style.button_radio)}>
              <Field type='radio' name='gridSize' value='8' />
              <span>8x8</span>
            </label>
          </div>
          <button
            className={classNames(style.button, style.button_start)}
            type='submit'
          >
            Start game
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default StartGame
