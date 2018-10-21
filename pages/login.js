import Layout from '../components/layout'

async function tes(e){
	alert('tes')
	e.preventDefault()
}

const Login = () => (
	<div>
	<Layout>
	<h1> Silahkan Login </h1>

			<h3><font color="red" id="tampil"></font></h3>
			

			<form onSubmit={tes}>

			<p><label>Username : </label>
			<input type="text" name="username" placeholder="Username"/>
			</p>
 
			<p><label>Password : </label>
			<input type="password" name="password" placeholder="Password"/>
			</p>

			<p><button type="submit" value="Login" >Login</button></p>
		
			</form>
	</Layout>
	</div>
)

export default Login