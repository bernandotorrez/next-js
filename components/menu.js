import Link from 'next/link'

const Menu = () => (
	<div>
		<Link href="/"> 
		<a> Home </a> 
		</Link>
		|
		<Link href="/login"> 
		<a> Login </a> 
		</Link>
	</div>
)

export default Menu