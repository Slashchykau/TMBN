import s from './Dialogs.module.css'
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' +s.active}>Vasa</div>
                <div className={s.dialog}>Sveta</div>
                <div className={s.dialog}>Galya</div>
                <div className={s.dialog}>Arnest</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>hello!</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>I am fine thanks!</div>
            </div>
        </div>
    )
}
export default  Dialogs;