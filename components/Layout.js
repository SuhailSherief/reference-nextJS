import layoutStyle from './../styles/Layout.module.css'
import Navbar from './Navbar'
import Header from './Header'

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            <div className={layoutStyle.container}>
                <main className={layoutStyle.main}>
                    <Header />
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout
