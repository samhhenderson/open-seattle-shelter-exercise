import styles from '../page.module.css'

export default function Registration() {
  return (
    <main className={styles.main}>
      <h1>DONATION REGISTRATION</h1>
      <form className={styles.grid}>
        <label htmlFor="name">Donor Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="donation-type">Type of Donation</label>
        <select id="donation-type" name="donation-type">
          <option value="clothing">Clothing</option>
          <option value="furniture">Furniture</option>
          <option value="money">Money</option>
        </select>
        <label htmlFor="quantity">Quantity</label>
        <input type="number" id="quantity" name="quantity" />
        <label htmlFor="date">Date</label>
        <input type="date" id="date" name="date" />
        <input type="submit" value='Submit' className={styles.submit}/>
      </form>
    </main>
  )
}