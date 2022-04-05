import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

const MealItemForm = props => {
  console.log(props);
  return (
    <form className={classes.form}>
      <Input
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
        label='Amount'
      />
      <button>+Add</button>
    </form>
  )
}

export default MealItemForm
