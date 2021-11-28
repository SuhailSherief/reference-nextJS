import headerStyle from './../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyle.title}><span>Lofi</span>cafe</h1>
            <p className={headerStyle.description}>Listen to best lofi's</p>
        </div>
    )
}

export default Header
