import Menu from './menu'
import Footer from './footer'

const Layout = (props) => (
	<div>
	<Menu/>
	{props.children}
	<Footer/>
	</div>
)

export default Layout