import React from 'react'
import { useActions } from '../../hooks'
import { Formik, Form, Field } from 'formik'
import style from './style.module.scss'
import classNames from 'classnames'

interface StartFormValues {
  typeCards: string;
  gridSize: numbers;
}

function StartGame() {
  const initialValues: StartFormValues = { typeCards: 'Numbers', size: '4' }
  const { startGameAction, generateGridAction } = useActions()
  return (
    <div className={style.form}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          startGameAction(values)
          generateGridAction(values)
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
              <Field type='radio' name='size' value='4' />
              <span>4x4</span>
            </label>
            <label className={classNames(style.button, style.button_radio)}>
              <Field type='radio' name='size' value='6' />
              <span>6x6</span>
            </label>
            <label className={classNames(style.button, style.button_radio)}>
              <Field type='radio' name='size' value='8' />
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
