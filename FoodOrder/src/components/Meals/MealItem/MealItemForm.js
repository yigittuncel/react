import classes from './MealItemForm.module.css'

const MealItemForm = props => {
  return (
    <form className={classes.form}>
      <div>
        <label>Amount</label>
        <input></input>
      </div>
      <button>+Add</button>
    </form>
  )
}

export default MealItemForm
