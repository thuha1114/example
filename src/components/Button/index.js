import styles from './Button.module.scss'
import clsx from 'clsx'

function Button({active}){

    const classes = clsx(styles.h1, {
        [styles.active] : active
    })

    return(
        <button className={classes}>Click me!</button>
    )
}

export default Button;